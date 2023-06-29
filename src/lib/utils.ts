import { common, util } from "replugged";
import { PluginInjector } from "../index";
import { PermissionStore, RTCConnectionStore } from "./requiredModules";
import * as Types from "../types";

const { constants: DiscordConstants, channels: UltimateChannelStore } = common;

export const isObject = (testMaterial: unknown): boolean =>
  typeof testMaterial === "object" && !Array.isArray(testMaterial) && testMaterial != null;

export const prototypeChecker = (
  ModuleExports: Types.DefaultTypes.ModuleExports,
  Protos: string[],
): boolean =>
  isObject(ModuleExports) &&
  Protos.every((p) =>
    Object.values(ModuleExports).some((m) => (m as { prototype: () => void })?.prototype?.[p]),
  );

export const forceUpdate = (element: HTMLElement): void => {
  if (!element) return;
  const toForceUpdate = util.getOwnerInstance(element);
  const forceRerender = PluginInjector.instead(toForceUpdate, "render", () => {
    forceRerender();
    return null;
  });
  toForceUpdate.forceUpdate(() => toForceUpdate.forceUpdate(() => {}));
};

export const canUseCam = (): boolean => {
  const currentChannelId = RTCConnectionStore.getChannelId() as string;
  const channel = UltimateChannelStore.getChannel(currentChannelId);
  if (!channel) return false;
  return PermissionStore.can(DiscordConstants.Permissions.MOVE_MEMBERS, channel) as boolean;
};
