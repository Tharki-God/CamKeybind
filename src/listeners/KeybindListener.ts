import { toast as Toasts } from "replugged/common";
import { CurrentlyPressed, SettingValues } from "../index";
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
  const keybindEvents = KeybindUtils.toBrowserEvents(
    SettingValues.get("keybind", defaultSettings.keybind),
  ) as Types.KeybindEvents;
  if (
    e.type === "keyup" &&
    Utils.canUseCam() &&
    keybindEvents.length &&
    keybindEvents.every(
      (ev) =>
        Object.keys(ev)
          .filter((k) => k !== "keyCode")
          .every((k) => ev[k] === e[k]) && CurrentlyPressed.get(ev.keyCode),
    )
  ) {
    const enabled = MediaEngineStore.isVideoEnabled();
    if (SettingValues.get("showToast", defaultSettings.showToast))
      Toasts.toast(`${enabled ? "Disabled" : "Enabled"} Camera`, Toasts.Kind.SUCCESS);
    if (SettingValues.get("playAudio", defaultSettings.playAudio))
      SoundUtils.playSound(enabled ? Sounds.Disable : Sounds.Enable, 0.5);
    MediaEngineActions.setVideoEnabled(!enabled);
  }
  CurrentlyPressed.set(e.keyCode, e.type === "keydown");
};
