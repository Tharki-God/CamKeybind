import { constants as DiscordConstants, channels as UltimateChannelStore } from "replugged/common";
import { PermissionStore, RTCConnectionStore } from "./requiredModules";

export const canUseCam = (): boolean => {
  const currentChannelId = RTCConnectionStore.getChannelId() as string;
  const channel = UltimateChannelStore.getChannel(currentChannelId);
  if (!channel) return false;
  return (
    (channel.isPrivate() as boolean) ||
    (PermissionStore.can(DiscordConstants.Permissions.STREAM, channel) as boolean)
  );
};

export default { canUseCam };
 