import { Injector, Logger, common, components, settings } from "replugged";
import { defaultSettings } from "./lib/consts";
import { registerSettings } from "./Components/Settings";
export const PluginInjector = new Injector();
export const PluginLogger = Logger.plugin("CamKeybind");
export const SettingValues = await settings.init("dev.tharki.CamKeybind", defaultSettings);
export const { toast: Toasts, fluxDispatcher: FluxDispatcher } = common;
export const { ContextMenu } = components;
export const CurrentlyPressed = new Map();

import { addListeners, removeListeners } from "./listeners/index";

export const start = (): void => {
  registerSettings();
  addListeners();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
  removeListeners();
};

export { Settings } from "./Components/Settings.jsx";
