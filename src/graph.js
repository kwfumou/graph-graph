import Vue from "vue";
import vue2vis from "vue2vis";
//import { DataSet } from "vue2vis";

//Vue.component("temeline", vue2vis.Timeline);
Vue.component("ovs-network", {
  template: "#mytmp",
  data() {
    return {
      nodes: [
        { id: 0, label: 0, x: -147, y: -77 },
        { id: 1, label: 1, x: -186, y: 88 },
        { id: 2, label: 2, x: 8, y: 160 },
        { id: 3, label: 3, x: 159, y: 28 },
        { id: 4, label: 4, x: 45, y: -111 },
      ],
      edges: [
        { from: 0, to: 1 },
        { from: 0, to: 1 },
        { from: 0, to: 2 },
        { from: 0, to: 3 },
        { from: 0, to: 4 },
        { from: 0, to: 4 },
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 1, to: 3 },
        { from: 2, to: 3 },
        { from: 2, to: 4 },
        { from: 3, to: 4 },
      ],
      options: {
        manipulation: {
          enabled: true,
          initiallyActive: true,
          addEdge: function(edgeData, callback) {
            callback(edgeData);
          },
        },
        nodes: {
          physics: false,
        },
      },
      container: "",
      network: null,
    };
  },

  computed: {
    graph_data() {
      return {
        nodes: this.nodes,
        edges: this.edges,
      };
    },
  },

  mounted() {
    this.container = document.getElementById("mynetwork");
    this.network = new vue2vis.Network(
      this.container,
      this.graph_data,
      this.options
    );
  },
});

new Vue({
  el: "#app",
});
