import { CurrentlyPressed, SettingValues, Toasts } from "../index";
import { Sounds, defaultSettings } from "../lib/consts";
import {
  KeybindUtils,
  MediaEngineActions,
  MediaEngineStore,
  SoundUtils,
} from "../lib/requiredModules";
import * as Utils from "../lib/utils";
import * as Types from "../types";
export const keybindListener = (e: Types.KeybindEvent): void => {
  const keybindEvents = KeybindUtils.toEvent(
    SettingValues.get("keybind", defaultSettings.keybind),
  ) as Types.KeybindEvents;
  if (
    e.type === "keyup" &&
    keybindEvents.length &&
    keybindEvents.every(
      (ev) =>
        Object.keys(ev)
          .filter((k) => k !== "keyCode")
          .every((k) => ev[k] === e[k]) && CurrentlyPressed.get(ev.keyCode),
    ) &&
    Utils.canUseCam()
  ) {
    const enabled = MediaEngineStore.isVideoEnabled();
    if (SettingValues.get("showToast", defaultSettings.showToast))
      Toasts.toast(`${enabled ? "Disabled" : "Enabled"} Camera`, Toasts.Kind.SUCCESS);
    if (SettingValues.get("playAudio", defaultSettings.playAudio))
      SoundUtils.playSound(enabled ? Sounds.Disable : Sounds.Enable, 0.5);
    MediaEngineActions.setVideoEnabled(!enabled);
    Utils.forceUpdate(document.querySelector("[class*=baseLayer-]"));
  }
  CurrentlyPressed.set(e.keyCode, e.type === "keydown");
};
