import Card from "./Card";
import ConsItem from './ConsItem'
import ConsSummary from './ConsSummary'
let myPlugin = {};

myPlugin.install = function(Vue) {
  Vue.component(Card.name, Card);
  Vue.component(ConsItem.name, ConsItem)
  Vue.component(ConsSummary.name, ConsSummary)
};

export default myPlugin;
