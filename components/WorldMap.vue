<template>
  <div class="world-map-container">
    <checkbox-svg-map 
      v-if="mounted"
      :map="World" 
      class="svg-map"
      :location-class="getLocationClass"
    />
  </div>
</template>

<script>
// We use CheckboxSvgMap or SvgMap. Checkbox allows interaction/selection if needed.
// But mostly we just want to display.
import { SvgMap } from "vue-svg-map";
import World from "@svg-maps/world";

// Import default styles or define our own
// We'll define our own scoped styles for customization

export default {
  name: "WorldMap",
  components: {
    CheckboxSvgMap: SvgMap // Using base component as we don't need checkbox logic necessarily, but let's see. 
    // Actually SvgMap is the base.
  },
  props: {
    activeCountries: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      World,
      mounted: false
    };
  },
  mounted() {
    this.mounted = true;
  },
  methods: {
    getLocationClass(location, index) {
      // check if location.id (e.g. 'us', 'gb') is in activeCountries
      // activeCountries should be lowercase codes
      const isActive = this.activeCountries.includes(location.id.toUpperCase()) || this.activeCountries.includes(location.id);
      return isActive ? 'svg-map__location--active' : 'svg-map__location';
    }
  }
};
</script>

<style>
.world-map-container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.svg-map {
  width: 100%;
  height: auto;
  stroke: #d1d5db; /* gray-300 */
  stroke-width: 0.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.svg-map__location {
  fill: #f3f4f6; /* gray-100 */
  cursor: pointer;
  transition: fill 0.3s;
}

.svg-map__location:hover {
  fill: #e5e7eb; /* gray-200 */
}

.svg-map__location--active {
  fill: #3b82f6; /* blue-500 */
}

/* Accessible label */
.svg-map__location:focus {
  fill: #2563eb;
  outline: none;
}
</style>
