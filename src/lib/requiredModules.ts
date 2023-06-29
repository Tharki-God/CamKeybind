import { webpack } from "replugged";
import * as Types from "../types";
export const WindowInfoStore = webpack.getByProps<Types.WindowInfoStore>(
  "isFocused",
  "isElementFullScreen",
  "addChangeListener",
  "removeChangeListener",
);
export const KeybindUtilsModule = webpack.getBySource<Types.GenericModule>("numpad plus");
export const KeybindUtils = {
  toCombo: webpack.getFunctionBySource(KeybindUtilsModule, "numpad plus"),
  toEvent: webpack.getFunctionBySource(KeybindUtilsModule, /(?=.*keyCode)(?=.*BROWSER)/),
} as Types.KeybindUtils;
export const SoundUtilsModule = webpack.getBySource<Types.GenericModule>(
  /function.*\.disableSounds.*\.getSoundpack\(\).*play\(\).*return/,
);
export const SoundUtils = {
  createSound: webpack.getFunctionBySource(SoundUtilsModule, "return new"),
  createSoundpackSound: webpack.getFunctionBySource(SoundUtilsModule, ");return"),
  playSound: webpack.getFunctionBySource(SoundUtilsModule, "getSoundpack"),
} as Types.SoundUtils;

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
