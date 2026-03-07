export { RoutingPanel } from "./components/RoutingPanel";
export {
  loadRoutingConfig,
  fetchRoutingConfig,
  persistRoutingConfig,
  addRoutingRule,
  updateRoutingRule,
  removeRoutingRule,
} from "./routingStore";
export {
  getChannelsForAgent,
  getChannelsByAgent,
} from "./agentChannelResolver";
export type { AgentChannelLink } from "./agentChannelResolver";
export type {
  RoutingRuleId,
  RoutingConditionType,
  RoutingCondition,
  RoutingRule,
  RoutingConfig,
} from "./types";
