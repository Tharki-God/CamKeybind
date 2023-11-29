import { webpack } from "replugged";
import Types from "../types";
export const WindowInfoStore = webpack.getByProps<Types.WindowInfoStore>(
  "isFocused",
  "isElementFullScreen",
  "addChangeListener",
  "removeChangeListener",
);

export const SoundUtils = webpack.getByProps<Types.SoundUtils>(
  "playSound",
  "createSound",
  "createSoundForPack",
);

export const KeybindUtils = webpack.getByProps<Types.KeybindUtils>("toCombo");

export const MediaEngineActions = webpack.getByProps<Types.MediaEngineActions>(
  "toggleSelfMute",
  "toggleSelfDeaf",
);
export const MediaEngineStore = webpack.getByProps<Types.MediaEngineStore>(
  "isSelfDeaf",
  "isSelfMute",
);
export const PermissionStore = webpack.getByProps<Types.PermissionStore>("getChannelPermissions");

export const RTCConnectionStore = webpack.getByProps<Types.RTCConnectionStore>(
  "getRTCConnection",
  "getRTCConnectionId",
  "getRemoteDisconnectVoiceChannelId",
);
