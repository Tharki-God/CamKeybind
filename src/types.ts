import { types as DefaultTypes } from "replugged";
export { types as DefaultTypes } from "replugged";
export type { ReactElement, ComponentClass } from "react";
export interface GenericModule extends Record<string, DefaultTypes.AnyFunction> {}

export interface WindowInfoStore {
  isFocused: () => boolean;
  addChangeListener: (callback: DefaultTypes.AnyFunction) => void;
  removeChangeListener: (callback: DefaultTypes.AnyFunction) => void;
  isElementFullScreen: () => boolean;
}
export interface MediaEngineActions {
  enable: DefaultTypes.AnyFunction;
  enableSoundshare: DefaultTypes.AnyFunction;
  interact: DefaultTypes.AnyFunction;
  reset: DefaultTypes.AnyFunction;
  setAV1Enabled: DefaultTypes.AnyFunction;
  setAecDump: DefaultTypes.AnyFunction;
  setAttenuation: DefaultTypes.AnyFunction;
  setAudioSubsystem: DefaultTypes.AnyFunction;
  setAutomaticGainControl: DefaultTypes.AnyFunction;
  setDebugLogging: DefaultTypes.AnyFunction;
  setDesktopSource: DefaultTypes.AnyFunction;
  setDisableLocalVideo: DefaultTypes.AnyFunction;
  setEchoCancellation: DefaultTypes.AnyFunction;
  setExperimentalEncoders: DefaultTypes.AnyFunction;
  setExperimentalSoundshare: DefaultTypes.AnyFunction;
  setHardwareH264: DefaultTypes.AnyFunction;
  setInputDevice: DefaultTypes.AnyFunction;
  setInputVolume: DefaultTypes.AnyFunction;
  setLocalPan: DefaultTypes.AnyFunction;
  setLocalVolume: DefaultTypes.AnyFunction;
  setLoopback: DefaultTypes.AnyFunction;
  setMode: DefaultTypes.AnyFunction;
  setNoiseCancellation: DefaultTypes.AnyFunction;
  setNoiseSuppression: DefaultTypes.AnyFunction;
  setOpenH264: DefaultTypes.AnyFunction;
  setOutputDevice: DefaultTypes.AnyFunction;
  setOutputVolume: DefaultTypes.AnyFunction;
  setQoS: DefaultTypes.AnyFunction;
  setSilenceWarning: DefaultTypes.AnyFunction;
  setTemporarySelfMute: DefaultTypes.AnyFunction;
  setVideoDevice: DefaultTypes.AnyFunction;
  setVideoEnabled: DefaultTypes.AnyFunction;
  setVideoHook: DefaultTypes.AnyFunction;
  toggleLocalMute: DefaultTypes.AnyFunction;
  toggleSelfDeaf: DefaultTypes.AnyFunction;
  toggleSelfMute: DefaultTypes.AnyFunction;
}
export interface MediaEngineStore {
  getAecDump: DefaultTypes.AnyFunction;
  getAttenuateWhileSpeakingOthers: DefaultTypes.AnyFunction;
  getAttenuateWhileSpeakingSelf: DefaultTypes.AnyFunction;
  getAttenuation: DefaultTypes.AnyFunction;
  getAudioSubsystem: DefaultTypes.AnyFunction;
  getAutomaticGainControl: DefaultTypes.AnyFunction;
  getAv1Enabled: DefaultTypes.AnyFunction;
  getCameraComponent: DefaultTypes.AnyFunction;
  getDebugLogging: DefaultTypes.AnyFunction;
  getDesktopSource: DefaultTypes.AnyFunction;
  getDesktopSourceContext: DefaultTypes.AnyFunction;
  getEchoCancellation: DefaultTypes.AnyFunction;
  getEnableSilenceWarning: DefaultTypes.AnyFunction;
  getEverSpeakingWhileMuted: DefaultTypes.AnyFunction;
  getExperimentalEncoders: DefaultTypes.AnyFunction;
  getExperimentalSoundshare: DefaultTypes.AnyFunction;
  getH265Enabled: DefaultTypes.AnyFunction;
  getHardwareClipEncode: DefaultTypes.AnyFunction;
  getHardwareH264: DefaultTypes.AnyFunction;
  getInputDetected: DefaultTypes.AnyFunction;
  getInputDeviceId: DefaultTypes.AnyFunction;
  getInputDevices: DefaultTypes.AnyFunction;
  getInputVolume: DefaultTypes.AnyFunction;
  getLocalPan: DefaultTypes.AnyFunction;
  getLocalVolume: DefaultTypes.AnyFunction;
  getLoopback: DefaultTypes.AnyFunction;
  getMediaEngine: DefaultTypes.AnyFunction;
  getMode: DefaultTypes.AnyFunction;
  getModeOptions: DefaultTypes.AnyFunction;
  getNoInputDetectedNotice: DefaultTypes.AnyFunction;
  getNoiseCancellation: DefaultTypes.AnyFunction;
  getNoiseSuppression: DefaultTypes.AnyFunction;
  getOpenH264: DefaultTypes.AnyFunction;
  getOutputDeviceId: DefaultTypes.AnyFunction;
  getOutputDevices: DefaultTypes.AnyFunction;
  getOutputVolume: DefaultTypes.AnyFunction;
  getPacketDelay: DefaultTypes.AnyFunction;
  getQoS: DefaultTypes.AnyFunction;
  getSettings: DefaultTypes.AnyFunction;
  getShortcuts: DefaultTypes.AnyFunction;
  getSoundshareEnabled: DefaultTypes.AnyFunction;
  getState: DefaultTypes.AnyFunction;
  getVideoComponent: DefaultTypes.AnyFunction;
  getVideoDeviceId: DefaultTypes.AnyFunction;
  getVideoDevices: DefaultTypes.AnyFunction;
  getVideoHook: DefaultTypes.AnyFunction;
  getVideoStreamParameters: DefaultTypes.AnyFunction;
  getVideoToggleState: DefaultTypes.AnyFunction;
  hasContext: DefaultTypes.AnyFunction;
  initialize: DefaultTypes.AnyFunction;
  isAdvancedVoiceActivitySupported: DefaultTypes.AnyFunction;
  isAecDumpSupported: DefaultTypes.AnyFunction;
  isAutomaticGainControlSupported: DefaultTypes.AnyFunction;
  isDeaf: DefaultTypes.AnyFunction;
  isEnabled: DefaultTypes.AnyFunction;
  isExperimentalEncodersSupported: DefaultTypes.AnyFunction;
  isHardwareMute: DefaultTypes.AnyFunction;
  isInteractionRequired: DefaultTypes.AnyFunction;
  isLocalMute: DefaultTypes.AnyFunction;
  isLocalVideoAutoDisabled: DefaultTypes.AnyFunction;
  isLocalVideoDisabled: DefaultTypes.AnyFunction;
  isMediaFilterSettingLoading: DefaultTypes.AnyFunction;
  isMute: DefaultTypes.AnyFunction;
  isNativeAudioPermissionReady: DefaultTypes.AnyFunction;
  isNoiseCancellationError: DefaultTypes.AnyFunction;
  isNoiseCancellationSupported: DefaultTypes.AnyFunction;
  isNoiseSuppressionSupported: DefaultTypes.AnyFunction;
  isScreenSharing: DefaultTypes.AnyFunction;
  isSelfDeaf: DefaultTypes.AnyFunction;
  isSelfMute: DefaultTypes.AnyFunction;
  isSelfMutedTemporarily: DefaultTypes.AnyFunction;
  isSimulcastSupported: DefaultTypes.AnyFunction;
  isSoundSharing: DefaultTypes.AnyFunction;
  isSupported: DefaultTypes.AnyFunction;
  isVideoAvailable: DefaultTypes.AnyFunction;
  isVideoEnabled: DefaultTypes.AnyFunction;
  setCanHavePriority: DefaultTypes.AnyFunction;
  supports: DefaultTypes.AnyFunction;
  supportsDisableLocalVideo: DefaultTypes.AnyFunction;
  supportsEnableSoundshare: DefaultTypes.AnyFunction;
  supportsExperimentalSoundshare: DefaultTypes.AnyFunction;
  supportsInApp: DefaultTypes.AnyFunction;
}
export interface PermissionStore {
  can: DefaultTypes.AnyFunction;
  canAccessGuildSettings: DefaultTypes.AnyFunction;
  canBasicChannel: DefaultTypes.AnyFunction;
  canImpersonateRole: DefaultTypes.AnyFunction;
  canManageUser: DefaultTypes.AnyFunction;
  canWithPartialContext: DefaultTypes.AnyFunction;
  computePermissions: DefaultTypes.AnyFunction;
  getChannelPermissions: DefaultTypes.AnyFunction;
  getChannelsVersion: DefaultTypes.AnyFunction;
  getGuildPermissionProps: DefaultTypes.AnyFunction;
  getPermissionUtils: DefaultTypes.AnyFunction;
  getGuildVersion: DefaultTypes.AnyFunction;
  getHighestRole: DefaultTypes.AnyFunction;
  initialize: DefaultTypes.AnyFunction;
  isRoleHigher: DefaultTypes.AnyFunction;
  clearVars: DefaultTypes.AnyFunction;
}
export interface RTCConnectionStore {
  getAveragePing: DefaultTypes.AnyFunction;
  getChannelId: DefaultTypes.AnyFunction;
  getDuration: DefaultTypes.AnyFunction;
  getGuildId: DefaultTypes.AnyFunction;
  getHostname: DefaultTypes.AnyFunction;
  getLastPing: DefaultTypes.AnyFunction;
  getMediaSessionId: DefaultTypes.AnyFunction;
  getOutboundLossRate: DefaultTypes.AnyFunction;
  getPacketStats: DefaultTypes.AnyFunction;
  getPings: DefaultTypes.AnyFunction;
  getQuality: DefaultTypes.AnyFunction;
  getRTCConnection: DefaultTypes.AnyFunction;
  getRTCConnectionId: DefaultTypes.AnyFunction;
  getRemoteDisconnectVoiceChannelId: DefaultTypes.AnyFunction;
  getState: DefaultTypes.AnyFunction;
  getVoiceStateStats: DefaultTypes.AnyFunction;
  getWasEverMultiParticipant: DefaultTypes.AnyFunction;
  getWasEverRtcConnected: DefaultTypes.AnyFunction;
  initialize: DefaultTypes.AnyFunction;
  isConnected: DefaultTypes.AnyFunction;
  isDisconnected: DefaultTypes.AnyFunction;
}
export interface KeybindUtils {
  toCombo: DefaultTypes.AnyFunction;
  toEvent: DefaultTypes.AnyFunction;
}
export interface SoundUtils {
  createSound: DefaultTypes.AnyFunction;
  createSoundpackSound: DefaultTypes.AnyFunction;
  playSound: DefaultTypes.AnyFunction;
}
export interface KeybindEvent {
  type: string;
  altKey: boolean;
  ctrlKey: boolean;
  keyCode: number;
  metaKey: boolean;
  shiftKey: boolean;
}
export interface CurrentlyPressed {
  [key: number]: KeybindEvent;
}
export interface KeybindEvents extends Array<KeybindEvent> {}

export interface GenericModule {
  [key: string]: DefaultTypes.AnyFunction;
}
export interface CloseButtonProps {
  size?: string;
  className?: string;
  onClick?: () => void;
}
export interface KeybindRecorderItemProps {
  title?: string;
  note?: string;
  size?: string;
  className?: string;
  value?: unknown;
  onChange?: (value: unknown) => void;
  disabled?: boolean;
  clearable?: boolean;
}

export interface Settings {
  playAudio: boolean;
  showToast: boolean;
  keybind: unknown[];
}
