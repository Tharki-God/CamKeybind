import { util } from "replugged";
import { SwitchItem } from "replugged/components";
import { PluginLogger, SettingValues } from "../index";
import { defaultSettings } from "../lib/consts";
import KeybindRecorderItem from "./KeybindItem";
import Types from "../types";
export const registerSettings = (): void => {
  for (const key in defaultSettings) {
    if (SettingValues.has(key as keyof Types.Settings)) return;
    PluginLogger.log(`Adding new setting ${key} with value`, defaultSettings[key]);
    SettingValues.set(key as keyof Types.Settings, defaultSettings[key]);
  }
};
export const Settings = (): React.ReactElement => {
  return (
    <div>
      <KeybindRecorderItem
        {...{
          title: "Toggle keybind:",
          note: "Keybind to toggle camera in vc.",
          ...util.useSetting(SettingValues, "keybind", defaultSettings.keybind),
        }}
      />
      <SwitchItem
        {...{
          note: "Show toasts on using keybind.",
          ...util.useSetting(SettingValues, "showToast", defaultSettings.showToast),
        }}>
        Show toasts
      </SwitchItem>
      <SwitchItem
        {...{
          note: "Play a sound upon using the keybind or clicking the button in the status picker or user panel.",
          ...util.useSetting(SettingValues, "playAudio", defaultSettings.playAudio),
        }}>
        Play audio
      </SwitchItem>
    </div>
  );
};
