var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn2, res) => function() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __commonJS = (cb2, mod) => function() {
  return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to2, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to2, key) && key !== except && __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to2;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// app/common/states.ts
var import_zustand, useFilterState, init_states = __esm({
  "app/common/states.ts"() {
    "use strict";
    import_zustand = require("zustand"), useFilterState = (0, import_zustand.create)((set) => ({
      autoUpdateSBus: !1,
      showSBusStops: !0,
      showSBus: !0,
      showTransJ: !0,
      showTransJStops: !0,
      toggleAutoUpdateSBus: () => set((state) => ({ autoUpdateSBus: !state.autoUpdateSBus })),
      toggleSBusStops: () => set((state) => ({ showSBusStops: !state.showSBusStops })),
      toggleTransJStops: () => set((state) => ({ showTransJStops: !state.showTransJStops })),
      toggleSBus: () => set((state) => ({ showSBus: !state.showSBus })),
      toggleTransJ: () => set((state) => ({ showTransJ: !state.showTransJ }))
    }));
  }
});

// node_modules/.pnpm/@react-leaflet+core@2.1.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/@react-leaflet/core/lib/attribution.js
function useAttribution(map, attribution) {
  let attributionRef = (0, import_react9.useRef)(attribution);
  (0, import_react9.useEffect)(function() {
    attribution !== attributionRef.current && map.attributionControl != null && (attributionRef.current != null && map.attributionControl.removeAttribution(attributionRef.current), attribution != null && map.attributionControl.addAttribution(attribution)), attributionRef.current = attribution;
  }, [
    map,
    attribution
  ]);
}
var import_react9, init_attribution = __esm({
  "node_modules/.pnpm/@react-leaflet+core@2.1.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/@react-leaflet/core/lib/attribution.js"() {
    import_react9 = require("react");
  }
});

// node_modules/.pnpm/@react-leaflet+core@2.1.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/@react-leaflet/core/lib/context.js
function createLeafletContext(map) {
  return Object.freeze({
    __version: CONTEXT_VERSION,
    map
  });
}
function extendContext(source, extra) {
  return Object.freeze({
    ...source,
    ...extra
  });
}
function useLeafletContext() {
  let context = (0, import_react10.useContext)(LeafletContext);
  if (context == null)
    throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");
  return context;
}
var import_react10, CONTEXT_VERSION, LeafletContext, LeafletProvider, init_context = __esm({
  "node_modules/.pnpm/@react-leaflet+core@2.1.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/@react-leaflet/core/lib/context.js"() {
    import_react10 = require("react"), CONTEXT_VERSION = 1;
    LeafletContext = (0, import_react10.createContext)(null), LeafletProvider = LeafletContext.Provider;
  }
});

// node_modules/.pnpm/@react-leaflet+core@2.1.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/@react-leaflet/core/lib/component.js
function createContainerComponent(useElement) {
  function ContainerComponent(props, forwardedRef) {
    let { instance, context } = useElement(props).current;
    return (0, import_react11.useImperativeHandle)(forwardedRef, () => instance), props.children == null ? null : /* @__PURE__ */ import_react11.default.createElement(LeafletProvider, {
      value: context
    }, props.children);
  }
  return /* @__PURE__ */ (0, import_react11.forwardRef)(ContainerComponent);
}
function createDivOverlayComponent(useElement) {
  function OverlayComponent(props, forwardedRef) {
    let [isOpen, setOpen] = (0, import_react11.useState)(!1), { instance } = useElement(props, setOpen).current;
    (0, import_react11.useImperativeHandle)(forwardedRef, () => instance), (0, import_react11.useEffect)(function() {
      isOpen && instance.update();
    }, [
      instance,
      isOpen,
      props.children
    ]);
    let contentNode = instance._contentNode;
    return contentNode ? /* @__PURE__ */ (0, import_react_dom2.createPortal)(props.children, contentNode) : null;
  }
  return /* @__PURE__ */ (0, import_react11.forwardRef)(OverlayComponent);
}
function createLeafComponent(useElement) {
  function LeafComponent(props, forwardedRef) {
    let { instance } = useElement(props).current;
    return (0, import_react11.useImperativeHandle)(forwardedRef, () => instance), null;
  }
  return /* @__PURE__ */ (0, import_react11.forwardRef)(LeafComponent);
}
var import_react11, import_react_dom2, init_component = __esm({
  "node_modules/.pnpm/@react-leaflet+core@2.1.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/@react-leaflet/core/lib/component.js"() {
    import_react11 = __toESM(require("react"), 1), import_react_dom2 = require("react-dom");
    init_context();
  }
});

// node_modules/.pnpm/@react-leaflet+core@2.1.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/@react-leaflet/core/lib/events.js
function useEventHandlers(element, eventHandlers) {
  let eventHandlersRef = (0, import_react12.useRef)();
  (0, import_react12.useEffect)(function() {
    return eventHandlers != null && element.instance.on(eventHandlers), eventHandlersRef.current = eventHandlers, function() {
      eventHandlersRef.current != null && element.instance.off(eventHandlersRef.current), eventHandlersRef.current = null;
    };
  }, [
    element,
    eventHandlers
  ]);
}
var import_react12, init_events = __esm({
  "node_modules/.pnpm/@react-leaflet+core@2.1.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/@react-leaflet/core/lib/events.js"() {
    import_react12 = require("react");
  }
});

// node_modules/.pnpm/@react-leaflet+core@2.1.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/@react-leaflet/core/lib/pane.js
function withPane(props, context) {
  let pane = props.pane ?? context.pane;
  return pane ? {
    ...props,
    pane
  } : props;
}
var init_pane = __esm({
  "node_modules/.pnpm/@react-leaflet+core@2.1.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/@react-leaflet/core/lib/pane.js"() {
  }
});

// node_modules/.pnpm/@react-leaflet+core@2.1.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/@react-leaflet/core/lib/div-overlay.js
function createDivOverlayHook(useElement, useLifecycle) {
  return function(props, setOpen) {
    let context = useLeafletContext(), elementRef = useElement(withPane(props, context), context);
    return useAttribution(context.map, props.attribution), useEventHandlers(elementRef.current, props.eventHandlers), useLifecycle(elementRef.current, context, props, setOpen), elementRef;
  };
}
var init_div_overlay = __esm({
  "node_modules/.pnpm/@react-leaflet+core@2.1.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/@react-leaflet/core/lib/div-overlay.js"() {
    init_attribution();
    init_context();
    init_events();
    init_pane();
  }
});

// node_modules/.pnpm/@react-leaflet+core@2.1.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/@react-leaflet/core/lib/element.js
function createElementObject(instance, context, container) {
  return Object.freeze({
    instance,
    context,
    container
  });
}
function createElementHook(createElement2, updateElement) {
  return updateElement == null ? function(props, context) {
    let elementRef = (0, import_react13.useRef)();
    return elementRef.current || (elementRef.current = createElement2(props, context)), elementRef;
  } : function(props, context) {
    let elementRef = (0, import_react13.useRef)();
    elementRef.current || (elementRef.current = createElement2(props, context));
    let propsRef = (0, import_react13.useRef)(props), { instance } = elementRef.current;
    return (0, import_react13.useEffect)(function() {
      propsRef.current !== props && (updateElement(instance, props, propsRef.current), propsRef.current = props);
    }, [
      instance,
      props,
      context
    ]), elementRef;
  };
}
var import_react13, init_element = __esm({
  "node_modules/.pnpm/@react-leaflet+core@2.1.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/@react-leaflet/core/lib/element.js"() {
    import_react13 = require("react");
  }
});

// node_modules/.pnpm/@react-leaflet+core@2.1.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/@react-leaflet/core/lib/layer.js
function useLayerLifecycle(element, context) {
  (0, import_react14.useEffect)(function() {
    return (context.layerContainer ?? context.map).addLayer(element.instance), function() {
      var _a2;
      (_a2 = context.layerContainer) == null || _a2.removeLayer(element.instance), context.map.removeLayer(element.instance);
    };
  }, [
    context,
    element
  ]);
}
function createLayerHook(useElement) {
  return function(props) {
    let context = useLeafletContext(), elementRef = useElement(withPane(props, context), context);
    return useAttribution(context.map, props.attribution), useEventHandlers(elementRef.current, props.eventHandlers), useLayerLifecycle(elementRef.current, context), elementRef;
  };
}
var import_react14, init_layer = __esm({
  "node_modules/.pnpm/@react-leaflet+core@2.1.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/@react-leaflet/core/lib/layer.js"() {
    import_react14 = require("react");
    init_attribution();
    init_context();
    init_events();
    init_pane();
  }
});

// node_modules/.pnpm/@react-leaflet+core@2.1.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/@react-leaflet/core/lib/path.js
function usePathOptions(element, props) {
  let optionsRef = (0, import_react15.useRef)();
  (0, import_react15.useEffect)(function() {
    if (props.pathOptions !== optionsRef.current) {
      let options = props.pathOptions ?? {};
      element.instance.setStyle(options), optionsRef.current = options;
    }
  }, [
    element,
    props
  ]);
}
function createPathHook(useElement) {
  return function(props) {
    let context = useLeafletContext(), elementRef = useElement(withPane(props, context), context);
    return useEventHandlers(elementRef.current, props.eventHandlers), useLayerLifecycle(elementRef.current, context), usePathOptions(elementRef.current, props), elementRef;
  };
}
var import_react15, init_path = __esm({
  "node_modules/.pnpm/@react-leaflet+core@2.1.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/@react-leaflet/core/lib/path.js"() {
    import_react15 = require("react");
    init_context();
    init_events();
    init_layer();
    init_pane();
  }
});

// node_modules/.pnpm/@react-leaflet+core@2.1.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/@react-leaflet/core/lib/generic.js
function createLayerComponent(createElement2, updateElement) {
  let useElement = createElementHook(createElement2, updateElement), useLayer = createLayerHook(useElement);
  return createContainerComponent(useLayer);
}
function createOverlayComponent(createElement2, useLifecycle) {
  let useElement = createElementHook(createElement2), useOverlay = createDivOverlayHook(useElement, useLifecycle);
  return createDivOverlayComponent(useOverlay);
}
function createPathComponent(createElement2, updateElement) {
  let useElement = createElementHook(createElement2, updateElement), usePath = createPathHook(useElement);
  return createContainerComponent(usePath);
}
function createTileLayerComponent(createElement2, updateElement) {
  let useElement = createElementHook(createElement2, updateElement), useLayer = createLayerHook(useElement);
  return createLeafComponent(useLayer);
}
var init_generic = __esm({
  "node_modules/.pnpm/@react-leaflet+core@2.1.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/@react-leaflet/core/lib/generic.js"() {
    init_component();
    init_element();
    init_layer();
    init_div_overlay();
    init_path();
  }
});

// node_modules/.pnpm/@react-leaflet+core@2.1.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/@react-leaflet/core/lib/grid-layer.js
function updateGridLayer(layer, props, prevProps) {
  let { opacity, zIndex } = props;
  opacity != null && opacity !== prevProps.opacity && layer.setOpacity(opacity), zIndex != null && zIndex !== prevProps.zIndex && layer.setZIndex(zIndex);
}
var init_grid_layer = __esm({
  "node_modules/.pnpm/@react-leaflet+core@2.1.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/@react-leaflet/core/lib/grid-layer.js"() {
  }
});

// node_modules/.pnpm/@react-leaflet+core@2.1.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/@react-leaflet/core/lib/index.js
var init_lib = __esm({
  "node_modules/.pnpm/@react-leaflet+core@2.1.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/@react-leaflet/core/lib/index.js"() {
    init_context();
    init_element();
    init_generic();
    init_grid_layer();
    init_pane();
  }
});

// node_modules/.pnpm/react-leaflet@4.2.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/react-leaflet/lib/MapContainer.js
function _extends() {
  return _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source)
        Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
    }
    return target;
  }, _extends.apply(this, arguments);
}
function MapContainerComponent({ bounds, boundsOptions, center, children, className, id: id2, placeholder, style, whenReady, zoom, ...options }, forwardedRef) {
  let [props] = (0, import_react16.useState)({
    className,
    id: id2,
    style
  }), [context, setContext] = (0, import_react16.useState)(null);
  (0, import_react16.useImperativeHandle)(forwardedRef, () => (context == null ? void 0 : context.map) ?? null, [
    context
  ]);
  let mapRef = (0, import_react16.useCallback)((node) => {
    if (node !== null && context === null) {
      let map = new import_leaflet.Map(node, options);
      center != null && zoom != null ? map.setView(center, zoom) : bounds != null && map.fitBounds(bounds, boundsOptions), whenReady != null && map.whenReady(whenReady), setContext(createLeafletContext(map));
    }
  }, []);
  (0, import_react16.useEffect)(() => () => {
    context == null || context.map.remove();
  }, [
    context
  ]);
  let contents = context ? /* @__PURE__ */ import_react16.default.createElement(LeafletProvider, {
    value: context
  }, children) : placeholder ?? null;
  return /* @__PURE__ */ import_react16.default.createElement("div", _extends({}, props, {
    ref: mapRef
  }), contents);
}
var import_leaflet, import_react16, MapContainer, init_MapContainer = __esm({
  "node_modules/.pnpm/react-leaflet@4.2.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/react-leaflet/lib/MapContainer.js"() {
    init_lib();
    import_leaflet = require("leaflet"), import_react16 = __toESM(require("react"), 1);
    MapContainer = /* @__PURE__ */ (0, import_react16.forwardRef)(MapContainerComponent);
  }
});

// node_modules/.pnpm/react-leaflet@4.2.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/react-leaflet/lib/Marker.js
var import_leaflet2, Marker, init_Marker = __esm({
  "node_modules/.pnpm/react-leaflet@4.2.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/react-leaflet/lib/Marker.js"() {
    init_lib();
    import_leaflet2 = require("leaflet"), Marker = createLayerComponent(function({ position, ...options }, ctx) {
      let marker = new import_leaflet2.Marker(position, options);
      return createElementObject(marker, extendContext(ctx, {
        overlayContainer: marker
      }));
    }, function(marker, props, prevProps) {
      props.position !== prevProps.position && marker.setLatLng(props.position), props.icon != null && props.icon !== prevProps.icon && marker.setIcon(props.icon), props.zIndexOffset != null && props.zIndexOffset !== prevProps.zIndexOffset && marker.setZIndexOffset(props.zIndexOffset), props.opacity != null && props.opacity !== prevProps.opacity && marker.setOpacity(props.opacity), marker.dragging != null && props.draggable !== prevProps.draggable && (props.draggable === !0 ? marker.dragging.enable() : marker.dragging.disable());
    });
  }
});

// node_modules/.pnpm/react-leaflet@4.2.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/react-leaflet/lib/Polyline.js
var import_leaflet3, Polyline, init_Polyline = __esm({
  "node_modules/.pnpm/react-leaflet@4.2.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/react-leaflet/lib/Polyline.js"() {
    init_lib();
    import_leaflet3 = require("leaflet"), Polyline = createPathComponent(function({ positions, ...options }, ctx) {
      let polyline = new import_leaflet3.Polyline(positions, options);
      return createElementObject(polyline, extendContext(ctx, {
        overlayContainer: polyline
      }));
    }, function(layer, props, prevProps) {
      props.positions !== prevProps.positions && layer.setLatLngs(props.positions);
    });
  }
});

// node_modules/.pnpm/react-leaflet@4.2.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/react-leaflet/lib/Popup.js
var import_leaflet4, import_react17, Popup, init_Popup = __esm({
  "node_modules/.pnpm/react-leaflet@4.2.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/react-leaflet/lib/Popup.js"() {
    init_lib();
    import_leaflet4 = require("leaflet"), import_react17 = require("react"), Popup = createOverlayComponent(function(props, context) {
      let popup = new import_leaflet4.Popup(props, context.overlayContainer);
      return createElementObject(popup, context);
    }, function(element, context, { position }, setOpen) {
      (0, import_react17.useEffect)(function() {
        let { instance } = element;
        function onPopupOpen(event) {
          event.popup === instance && (instance.update(), setOpen(!0));
        }
        function onPopupClose(event) {
          event.popup === instance && setOpen(!1);
        }
        return context.map.on({
          popupopen: onPopupOpen,
          popupclose: onPopupClose
        }), context.overlayContainer == null ? (position != null && instance.setLatLng(position), instance.openOn(context.map)) : context.overlayContainer.bindPopup(instance), function() {
          var _a2;
          context.map.off({
            popupopen: onPopupOpen,
            popupclose: onPopupClose
          }), (_a2 = context.overlayContainer) == null || _a2.unbindPopup(), context.map.removeLayer(instance);
        };
      }, [
        element,
        context,
        setOpen,
        position
      ]);
    });
  }
});

// node_modules/.pnpm/react-leaflet@4.2.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/react-leaflet/lib/TileLayer.js
var import_leaflet5, TileLayer, init_TileLayer = __esm({
  "node_modules/.pnpm/react-leaflet@4.2.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/react-leaflet/lib/TileLayer.js"() {
    init_lib();
    import_leaflet5 = require("leaflet"), TileLayer = createTileLayerComponent(function({ url, ...options }, context) {
      let layer = new import_leaflet5.TileLayer(url, withPane(options, context));
      return createElementObject(layer, context);
    }, function(layer, props, prevProps) {
      updateGridLayer(layer, props, prevProps);
      let { url } = props;
      url != null && url !== prevProps.url && layer.setUrl(url);
    });
  }
});

// node_modules/.pnpm/react-leaflet@4.2.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/react-leaflet/lib/index.js
var init_lib2 = __esm({
  "node_modules/.pnpm/react-leaflet@4.2.0_yydtlhsdonbqao6vgvkwhv2zki/node_modules/react-leaflet/lib/index.js"() {
    init_MapContainer();
    init_Marker();
    init_Polyline();
    init_Popup();
    init_TileLayer();
  }
});

// app/icons/bus(2).svg
var require_bus_2 = __commonJS({
  "app/icons/bus(2).svg"(exports, module2) {
    module2.exports = "/build/_assets/bus(2)-C7527DY3.svg";
  }
});

// app/icons/bus(4).svg
var require_bus_4 = __commonJS({
  "app/icons/bus(4).svg"(exports, module2) {
    module2.exports = "/build/_assets/bus(4)-HASC3DGK.svg";
  }
});

// app/icons/bus.ts
var import_leaflet6, BusIcon, init_bus = __esm({
  "app/icons/bus.ts"() {
    "use strict";
    import_leaflet6 = require("leaflet"), BusIcon = (options) => {
      let iconUrl;
      switch (options.color) {
        case "red":
          iconUrl = require_bus_2();
          break;
        case "orange":
          iconUrl = require_bus_4();
          break;
        default:
          iconUrl = require_bus_2();
          break;
      }
      return new import_leaflet6.Icon({
        iconUrl,
        iconRetinaUrl: iconUrl,
        iconAnchor: [5, 55],
        popupAnchor: [10, -44],
        iconSize: options.size ?? [40, 40],
        shadowSize: [68, 95],
        shadowAnchor: [20, 92]
      });
    };
  }
});

// app/icons/bus-stop.ts
var import_leaflet7, BusStopIcon, init_bus_stop = __esm({
  "app/icons/bus-stop.ts"() {
    "use strict";
    import_leaflet7 = require("leaflet"), BusStopIcon = (options) => new import_leaflet7.Icon({
      iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${options.color ?? "red"}.png`,
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      iconSize: options.size ?? [17, 27],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [27, 27]
    });
  }
});

// app/components/surabaya-bus.tsx
function SurabayaBus() {
  let [busStops2, setBusStops] = (0, import_react18.useState)([]), [busPositions, setBusPositions] = (0, import_react18.useState)([]), { showSBusStops, autoUpdateSBus, showSBus } = useFilterState(
    (state) => state
  ), loadSBusStops = async () => await (await fetch(
    `${window.ENV.SBUS_TRACKER_ENDPOINT}/sbus-stops`
  )).json(), loadSBusPositions = async () => await (await fetch(
    `${window.ENV.SBUS_TRACKER_ENDPOINT}/sbus-positions`
  )).json(), autoLoadPosition = () => {
    loadSBusPositions().then((currentPositions) => {
      let sortedPositions = currentPositions.map((pos) => pos.positions).flat().sort(
        (a, b) => a.info.localeCompare(b.info)
      );
      setBusPositions(
        sortedPositions.map((pos) => ({
          ...pos,
          tracked_at: new Date().toString()
        }))
      ), console.info("SBus Updated at " + new Date().toLocaleTimeString());
    });
  };
  return autoUpdateSBus && setInterval(() => {
    autoLoadPosition();
  }, 10 * 1e3), (0, import_react18.useEffect)(() => {
    loadSBusStops().then((stops) => {
      let allStops = stops.map((stop) => stop.stops);
      setBusStops(allStops.flat());
    }), autoLoadPosition();
  }, []), /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
    showSBus && busPositions.map((pos, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      import_react_leaflet_drift_marker.default,
      {
        duration: 1e3,
        position: [parseFloat(pos.lat), parseFloat(pos.lng)],
        icon: BusIcon({ color: "red" }),
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Popup, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h4", { children: pos.info }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { children: [
            "Synced: ",
            pos.tracked_at
          ] })
        ] }, "pp" + index)
      },
      "mp" + index
    )),
    showSBusStops && busStops2.map((stop, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      Marker,
      {
        position: [parseFloat(stop.lat), parseFloat(stop.lon)],
        icon: BusStopIcon({ color: "blue" }),
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Popup, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h4", { children: stop.nama }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { children: stop.description })
        ] }, "p" + index)
      },
      "m" + index
    ))
  ] }, "sbus-pos-map");
}
var import_node3, import_react18, import_react_leaflet_drift_marker, import_jsx_runtime10, init_surabaya_bus = __esm({
  "app/components/surabaya-bus.tsx"() {
    "use strict";
    import_node3 = require("@remix-run/node"), import_react18 = require("react");
    init_lib2();
    import_react_leaflet_drift_marker = __toESM(require("react-leaflet-drift-marker"));
    init_states();
    init_bus();
    init_bus_stop();
    import_jsx_runtime10 = require("react/jsx-runtime");
  }
});

// app/static/routes.json
var routes_default, init_routes = __esm({
  "app/static/routes.json"() {
    routes_default = [
      [-7.1701500000000005, 112.58445],
      [-7.17018, 112.58438000000001],
      [-7.17025, 112.58430000000001],
      [-7.170300000000001, 112.58428],
      [-7.170400000000001, 112.58430000000001],
      [-7.170420000000001, 112.58429000000001],
      [-7.1706900000000005, 112.58374],
      [-7.16985, 112.58324],
      [-7.169650000000001, 112.58319000000002],
      [-7.169580000000001, 112.5832],
      [-7.169510000000001, 112.58326000000001],
      [-7.16945, 112.58342],
      [-7.169390000000001, 112.58448000000001],
      [-7.169320000000001, 112.58550000000001],
      [-7.169150000000001, 112.58701],
      [-7.16898, 112.58853],
      [-7.168970000000001, 112.58892000000002],
      [-7.16877, 112.59101000000001],
      [-7.16837, 112.59409000000001],
      [-7.167800000000001, 112.59895000000002],
      [-7.166790000000001, 112.60693],
      [-7.166150000000001, 112.61246000000001],
      [-7.166040000000001, 112.61334000000001],
      [-7.16586, 112.61444000000002],
      [-7.165830000000001, 112.61447000000001],
      [-7.1658100000000005, 112.61452000000001],
      [-7.1657, 112.61458],
      [-7.16539, 112.61470000000001],
      [-7.164270000000001, 112.61505000000001],
      [-7.16326, 112.61534],
      [-7.162560000000001, 112.61559000000001],
      [-7.161830000000001, 112.61588],
      [-7.161250000000001, 112.61618000000001],
      [-7.160950000000001, 112.61638],
      [-7.16051, 112.61677],
      [-7.160400000000001, 112.61689000000001],
      [-7.16009, 112.61734000000001],
      [-7.1597800000000005, 112.61789],
      [-7.159680000000001, 112.61816],
      [-7.15962, 112.61851000000001],
      [-7.15962, 112.61862],
      [-7.1596400000000004, 112.61889000000001],
      [-7.159680000000001, 112.61907000000001],
      [-7.160240000000001, 112.62069000000001],
      [-7.16051, 112.62151000000001],
      [-7.161420000000001, 112.62445000000001],
      [-7.161490000000001, 112.62474],
      [-7.16166, 112.62518000000001],
      [-7.16187, 112.62566000000001],
      [-7.162070000000001, 112.62601000000001],
      [-7.162920000000001, 112.62736000000001],
      [-7.16309, 112.62769000000002],
      [-7.163150000000001, 112.62784],
      [-7.16319, 112.62797],
      [-7.16323, 112.62822000000001],
      [-7.16323, 112.62853000000001],
      [-7.1631100000000005, 112.62934000000001],
      [-7.16286, 112.63147000000001],
      [-7.16288, 112.63171000000001],
      [-7.162940000000001, 112.63195],
      [-7.1636500000000005, 112.63388],
      [-7.165900000000001, 112.63944000000001],
      [-7.16647, 112.64092000000001],
      [-7.1673100000000005, 112.64321000000001],
      [-7.1686000000000005, 112.64696],
      [-7.169410000000001, 112.64926000000001],
      [-7.169560000000001, 112.64959],
      [-7.170300000000001, 112.65156],
      [-7.171130000000001, 112.65365000000001],
      [-7.17161, 112.65348000000002],
      [-7.174410000000001, 112.65235000000001],
      [-7.177320000000001, 112.65111],
      [-7.178520000000001, 112.65064000000001],
      [-7.1794400000000005, 112.65026],
      [-7.1824200000000005, 112.64908000000001],
      [-7.185110000000001, 112.64814000000001],
      [-7.1851400000000005, 112.64822000000001],
      [-7.185080000000001, 112.64824000000002],
      [-7.1851400000000005, 112.64822000000001],
      [-7.185110000000001, 112.64814000000001],
      [-7.18768, 112.64735],
      [-7.19197, 112.64597],
      [-7.192570000000001, 112.64585000000001],
      [-7.192760000000001, 112.64583],
      [-7.194170000000001, 112.64580000000001],
      [-7.195740000000001, 112.64587],
      [-7.196300000000001, 112.64585000000001],
      [-7.196510000000001, 112.64586000000001],
      [-7.197140000000001, 112.64585000000001],
      [-7.19779, 112.64585000000001],
      [-7.199070000000001, 112.64590000000001],
      [-7.199190000000001, 112.64595000000001],
      [-7.199700000000001, 112.64626000000001],
      [-7.199820000000001, 112.64631000000001],
      [-7.20016, 112.64641],
      [-7.200380000000001, 112.64645000000002],
      [-7.20065, 112.64646],
      [-7.200850000000001, 112.64641],
      [-7.201410000000001, 112.64612000000001],
      [-7.2014700000000005, 112.6461],
      [-7.201980000000001, 112.64609000000002],
      [-7.2026, 112.64603000000001],
      [-7.20363, 112.64602000000001],
      [-7.208030000000001, 112.64611000000001],
      [-7.208550000000001, 112.64607000000001],
      [-7.209060000000001, 112.64599000000001],
      [-7.209650000000001, 112.64583],
      [-7.21034, 112.64559000000001],
      [-7.21098, 112.64539],
      [-7.211290000000001, 112.64536000000001],
      [-7.211830000000001, 112.64540000000001],
      [-7.2136000000000005, 112.64565],
      [-7.2138100000000005, 112.64562000000001],
      [-7.214060000000001, 112.64554000000001],
      [-7.21468, 112.64519000000001],
      [-7.2148900000000005, 112.64510000000001],
      [-7.215110000000001, 112.64506000000002],
      [-7.215370000000001, 112.64507],
      [-7.21567, 112.64517000000001],
      [-7.21602, 112.64534],
      [-7.21818, 112.64684000000001],
      [-7.220350000000001, 112.64838],
      [-7.222290000000001, 112.64977],
      [-7.223470000000001, 112.65067],
      [-7.22409, 112.65119000000001],
      [-7.22543, 112.65242],
      [-7.226850000000001, 112.65389],
      [-7.227990000000001, 112.65531000000001],
      [-7.228930000000001, 112.65666],
      [-7.22991, 112.65827000000002],
      [-7.230650000000001, 112.65969000000001],
      [-7.23127, 112.66107000000001],
      [-7.232050000000001, 112.66286000000001],
      [-7.232450000000001, 112.66371000000001],
      [-7.238090000000001, 112.67713],
      [-7.23857, 112.67817000000001],
      [-7.239330000000001, 112.6803],
      [-7.240710000000001, 112.68440000000001],
      [-7.24162, 112.68753000000001],
      [-7.24183, 112.68828],
      [-7.24239, 112.69052],
      [-7.242640000000001, 112.69171000000001],
      [-7.24333, 112.69527000000001],
      [-7.243480000000001, 112.69595000000001],
      [-7.243600000000001, 112.69669],
      [-7.2443100000000005, 112.70122],
      [-7.244320000000001, 112.70150000000001],
      [-7.244320000000001, 112.70210000000002],
      [-7.24422, 112.70279000000001],
      [-7.244160000000001, 112.70308000000001],
      [-7.24389, 112.70388000000001],
      [-7.24295, 112.70634000000001],
      [-7.242850000000001, 112.70681],
      [-7.24277, 112.7077],
      [-7.242820000000001, 112.70814000000001],
      [-7.242890000000001, 112.70859000000002],
      [-7.243830000000001, 112.71147],
      [-7.243830000000001, 112.71158000000001],
      [-7.243860000000001, 112.71185000000001],
      [-7.243860000000001, 112.71206000000001],
      [-7.243780000000001, 112.71222000000002],
      [-7.243650000000001, 112.71234000000001],
      [-7.24356, 112.71238000000001],
      [-7.24347, 112.7124],
      [-7.243270000000001, 112.71239000000001],
      [-7.2431600000000005, 112.71235000000001],
      [-7.243080000000001, 112.71229000000001],
      [-7.24298, 112.71216000000001],
      [-7.242940000000001, 112.71203000000001],
      [-7.242940000000001, 112.71183],
      [-7.242970000000001, 112.71172000000001],
      [-7.24307, 112.71153000000001],
      [-7.24321, 112.71138],
      [-7.244320000000001, 112.71062],
      [-7.24448, 112.71048],
      [-7.244930000000001, 112.71022],
      [-7.24551, 112.70994],
      [-7.245900000000001, 112.70983000000001],
      [-7.246630000000001, 112.70968],
      [-7.24687, 112.70962000000002],
      [-7.2472900000000005, 112.70945],
      [-7.247470000000001, 112.70939000000001],
      [-7.247520000000001, 112.70934000000001],
      [-7.249110000000001, 112.70930000000001],
      [-7.252680000000001, 112.70932],
      [-7.257460000000001, 112.70945],
      [-7.25818, 112.70943000000001],
      [-7.2597700000000005, 112.70947000000001],
      [-7.26165, 112.70946],
      [-7.26362, 112.7094],
      [-7.267650000000001, 112.70912000000001],
      [-7.276870000000001, 112.70856],
      [-7.279730000000001, 112.70835000000001],
      [-7.280200000000001, 112.70829],
      [-7.281510000000001, 112.70803000000001],
      [-7.28244, 112.70775],
      [-7.282920000000001, 112.70756000000002],
      [-7.28319, 112.70744],
      [-7.284000000000001, 112.70701000000001],
      [-7.284280000000001, 112.70683000000001],
      [-7.284870000000001, 112.70637],
      [-7.285190000000001, 112.70608000000001],
      [-7.285470000000001, 112.70578],
      [-7.2860000000000005, 112.70514000000001],
      [-7.28619, 112.70488],
      [-7.28699, 112.70370000000001],
      [-7.28812, 112.70198],
      [-7.2893300000000005, 112.70026000000001],
      [-7.289630000000001, 112.69991],
      [-7.290050000000001, 112.69950000000001],
      [-7.29058, 112.69907],
      [-7.291010000000001, 112.69878000000001],
      [-7.29133, 112.69861],
      [-7.29166, 112.69845000000001],
      [-7.292160000000001, 112.6983],
      [-7.292790000000001, 112.69814000000001],
      [-7.293330000000001, 112.69805000000001],
      [-7.294150000000001, 112.69798000000002],
      [-7.295490000000001, 112.69803],
      [-7.302090000000001, 112.69860000000001],
      [-7.302840000000001, 112.69871],
      [-7.30332, 112.69882000000001],
      [-7.30381, 112.69897],
      [-7.30435, 112.69918000000001],
      [-7.304810000000001, 112.69943],
      [-7.3052600000000005, 112.69975000000001],
      [-7.305460000000001, 112.69991],
      [-7.305840000000001, 112.70028],
      [-7.30602, 112.70048000000001],
      [-7.306330000000001, 112.7009],
      [-7.306610000000001, 112.7014],
      [-7.306890000000001, 112.70196000000001],
      [-7.3070200000000005, 112.70231000000001],
      [-7.307130000000001, 112.70265],
      [-7.308510000000001, 112.70793],
      [-7.308820000000001, 112.70905],
      [-7.309060000000001, 112.70977],
      [-7.309480000000001, 112.71082000000001],
      [-7.3097, 112.71130000000001],
      [-7.310010000000001, 112.71183],
      [-7.3104000000000005, 112.71242000000001],
      [-7.3108200000000005, 112.71295],
      [-7.31158, 112.71377000000001],
      [-7.312310000000001, 112.71444000000001],
      [-7.31327, 112.71525000000001],
      [-7.3142700000000005, 112.71600000000001],
      [-7.314680000000001, 112.71628000000001],
      [-7.31521, 112.71659000000001],
      [-7.315500000000001, 112.71674000000002],
      [-7.31601, 112.71694000000001],
      [-7.31639, 112.71707],
      [-7.31674, 112.71714000000001],
      [-7.317060000000001, 112.71718000000001],
      [-7.317640000000001, 112.71722000000001],
      [-7.31822, 112.71721000000001],
      [-7.3185400000000005, 112.71718000000001],
      [-7.319280000000001, 112.71707],
      [-7.321680000000001, 112.71655000000001],
      [-7.323230000000001, 112.71618000000001],
      [-7.323840000000001, 112.71600000000001],
      [-7.3251800000000005, 112.71572],
      [-7.326410000000001, 112.71545],
      [-7.3291200000000005, 112.71498000000001],
      [-7.332720000000001, 112.71440000000001],
      [-7.333950000000001, 112.71422000000001],
      [-7.335540000000001, 112.71396000000001],
      [-7.336390000000001, 112.7138],
      [-7.337400000000001, 112.71358000000001],
      [-7.338690000000001, 112.71326],
      [-7.338870000000001, 112.71325],
      [-7.33919, 112.71320000000001],
      [-7.34006, 112.71299],
      [-7.34088, 112.71277],
      [-7.341480000000001, 112.71257000000001],
      [-7.34208, 112.71243000000001],
      [-7.34236, 112.71244000000002],
      [-7.342510000000001, 112.7125],
      [-7.3426800000000005, 112.71259],
      [-7.343050000000001, 112.71287000000001],
      [-7.34344, 112.71325],
      [-7.34358, 112.71344],
      [-7.34372, 112.71368000000001],
      [-7.3439000000000005, 112.71413000000001],
      [-7.34402, 112.71434],
      [-7.344080000000001, 112.71442],
      [-7.344220000000001, 112.71452000000001],
      [-7.3444, 112.71459000000002],
      [-7.344500000000001, 112.7146],
      [-7.3447700000000005, 112.71457000000001],
      [-7.345180000000001, 112.71446],
      [-7.345350000000001, 112.71443000000001],
      [-7.345560000000001, 112.71442],
      [-7.345700000000001, 112.71445000000001],
      [-7.345820000000001, 112.71450000000002],
      [-7.345940000000001, 112.7146],
      [-7.34609, 112.71478],
      [-7.34623, 112.715],
      [-7.3463400000000005, 112.71526000000001],
      [-7.346400000000001, 112.71536],
      [-7.34656, 112.71552000000001],
      [-7.34806, 112.71660000000001],
      [-7.348230000000001, 112.7167],
      [-7.348380000000001, 112.71676000000001],
      [-7.34846, 112.71677000000001],
      [-7.34862, 112.71677000000001],
      [-7.34869, 112.71675],
      [-7.348820000000001, 112.71667000000001],
      [-7.34895, 112.71654000000001],
      [-7.349050000000001, 112.71635],
      [-7.349100000000001, 112.71615000000001],
      [-7.349080000000001, 112.71578000000001],
      [-7.34902, 112.71515000000001],
      [-7.349030000000001, 112.71486000000002],
      [-7.3491100000000005, 112.71459000000002],
      [-7.349330000000001, 112.71411],
      [-7.350090000000001, 112.71305000000001],
      [-7.350560000000001, 112.71243000000001],
      [-7.3508000000000004, 112.712],
      [-7.350860000000001, 112.71187],
      [-7.35097, 112.71184000000001],
      [-7.35113, 112.71190000000001],
      [-7.351190000000001, 112.7121],
      [-7.351240000000001, 112.71218],
      [-7.351330000000001, 112.71265000000001],
      [-7.351540000000001, 112.71442],
      [-7.351630000000001, 112.71489000000001],
      [-7.351750000000001, 112.71527],
      [-7.35212, 112.71629000000001],
      [-7.35228, 112.71677000000001],
      [-7.3523700000000005, 112.71710000000002],
      [-7.3524400000000005, 112.71796],
      [-7.352450000000001, 112.71835000000002],
      [-7.352500000000001, 112.71867],
      [-7.3535900000000005, 112.7223],
      [-7.3535, 112.72246000000001],
      [-7.35317, 112.72256000000002],
      [-7.35261, 112.72271],
      [-7.352460000000001, 112.72279],
      [-7.352040000000001, 112.72292000000002],
      [-7.351940000000001, 112.72299000000001],
      [-7.351840000000001, 112.72322000000001],
      [-7.35195, 112.72356],
      [-7.35212, 112.72437000000001],
      [-7.352130000000001, 112.72446000000001],
      [-7.352060000000001, 112.72482000000001],
      [-7.352100000000001, 112.72486],
      [-7.3521600000000005, 112.72487000000001],
      [-7.353650000000001, 112.72455000000001],
      [-7.35432, 112.72435000000002],
      [-7.3552100000000005, 112.72635000000001],
      [-7.35531, 112.72677000000002],
      [-7.3554200000000005, 112.72779000000001],
      [-7.355580000000001, 112.72879],
      [-7.35552, 112.72899000000001],
      [-7.355480000000001, 112.72904000000001],
      [-7.355410000000001, 112.72909000000001],
      [-7.354590000000001, 112.72908000000001],
      [-7.352580000000001, 112.72895000000001],
      [-7.352290000000001, 112.72903000000001],
      [-7.350650000000001, 112.72914000000002],
      [-7.3491100000000005, 112.72916000000001],
      [-7.348840000000001, 112.72916000000001],
      [-7.348610000000001, 112.72911],
      [-7.3484300000000005, 112.72903000000001],
      [-7.34832, 112.72895000000001],
      [-7.34822, 112.72884],
      [-7.3479600000000005, 112.72818000000001],
      [-7.347900000000001, 112.72806000000001],
      [-7.347690000000001, 112.72783000000001],
      [-7.347580000000001, 112.72768],
      [-7.34745, 112.72756000000001],
      [-7.347340000000001, 112.72742000000001],
      [-7.347250000000001, 112.72729000000001],
      [-7.34712, 112.72699000000001],
      [-7.34703, 112.72648000000001],
      [-7.34703, 112.72563000000001],
      [-7.346940000000001, 112.72449],
      [-7.346850000000001, 112.72382],
      [-7.3466700000000005, 112.72289],
      [-7.346430000000001, 112.72217],
      [-7.34635, 112.72154],
      [-7.346360000000001, 112.72129000000001],
      [-7.346520000000001, 112.72050000000002],
      [-7.34656, 112.72013000000001],
      [-7.346570000000001, 112.71956000000002],
      [-7.3465300000000004, 112.71919000000001],
      [-7.34651, 112.71879000000001],
      [-7.3465300000000004, 112.71848000000001],
      [-7.3463400000000005, 112.71729],
      [-7.34618, 112.71661],
      [-7.346170000000001, 112.71633000000001],
      [-7.346210000000001, 112.71615000000001],
      [-7.346280000000001, 112.71599],
      [-7.346480000000001, 112.71567],
      [-7.346890000000001, 112.7151],
      [-7.3469500000000005, 112.71495000000002],
      [-7.346990000000001, 112.71479000000001],
      [-7.346990000000001, 112.71463000000001],
      [-7.346760000000001, 112.71386000000001],
      [-7.346360000000001, 112.71263],
      [-7.346260000000001, 112.71220000000001],
      [-7.346210000000001, 112.71180000000001],
      [-7.346220000000001, 112.71165],
      [-7.34625, 112.71153000000001],
      [-7.34632, 112.71144000000001],
      [-7.346380000000001, 112.71138],
      [-7.34649, 112.71132000000001],
      [-7.34686, 112.71124],
      [-7.34712, 112.71121000000001],
      [-7.347580000000001, 112.71111],
      [-7.347840000000001, 112.71100000000001],
      [-7.348020000000001, 112.71089],
      [-7.348470000000001, 112.71053],
      [-7.348820000000001, 112.71036000000001],
      [-7.351190000000001, 112.70986],
      [-7.35273, 112.70956000000001],
      [-7.35437, 112.70920000000001],
      [-7.355320000000001, 112.70895000000002],
      [-7.356700000000001, 112.70853000000001],
      [-7.35782, 112.70815],
      [-7.3590800000000005, 112.70764000000001],
      [-7.360390000000001, 112.70706000000001],
      [-7.36211, 112.70619],
      [-7.3634900000000005, 112.70538],
      [-7.36481, 112.70453],
      [-7.365920000000001, 112.70374000000001],
      [-7.36727, 112.70271000000001],
      [-7.368170000000001, 112.70205000000001],
      [-7.36917, 112.70139],
      [-7.37035, 112.70067],
      [-7.37157, 112.70003000000001],
      [-7.372750000000001, 112.69948000000001],
      [-7.37382, 112.69905000000001],
      [-7.375100000000001, 112.69860000000001],
      [-7.376500000000001, 112.69819000000001],
      [-7.377630000000001, 112.69792000000001],
      [-7.37865, 112.69773],
      [-7.380590000000001, 112.69742000000001],
      [-7.38588, 112.69669],
      [-7.388070000000001, 112.69634],
      [-7.39008, 112.69598],
      [-7.39449, 112.69505000000001],
      [-7.396560000000001, 112.69464],
      [-7.397970000000001, 112.69446],
      [-7.398790000000001, 112.69439000000001],
      [-7.399890000000001, 112.69433000000001],
      [-7.402340000000001, 112.69430000000001],
      [-7.403810000000001, 112.69445],
      [-7.40847, 112.69510000000001],
      [-7.409730000000001, 112.69523000000001],
      [-7.4115, 112.69528000000001],
      [-7.41258, 112.69529000000001],
      [-7.41349, 112.69524000000001],
      [-7.41478, 112.69511000000001],
      [-7.415940000000001, 112.69495],
      [-7.41802, 112.69451000000001],
      [-7.419130000000001, 112.69421000000001],
      [-7.4196100000000005, 112.69406000000001],
      [-7.421880000000001, 112.69340000000001],
      [-7.42302, 112.69311],
      [-7.4236200000000006, 112.69299000000001],
      [-7.42426, 112.69293],
      [-7.42454, 112.69288],
      [-7.425120000000001, 112.69285],
      [-7.42583, 112.69284],
      [-7.426520000000001, 112.69287000000001],
      [-7.427130000000001, 112.69292000000002],
      [-7.427830000000001, 112.69301000000002],
      [-7.4286900000000005, 112.69319000000002],
      [-7.42947, 112.69341000000001],
      [-7.4299800000000005, 112.69357000000001],
      [-7.431570000000001, 112.69418],
      [-7.4350000000000005, 112.69561000000002],
      [-7.435600000000001, 112.69582000000001],
      [-7.437100000000001, 112.69631000000001],
      [-7.438040000000001, 112.69658000000001],
      [-7.439470000000001, 112.69688000000001],
      [-7.440570000000001, 112.69707000000001],
      [-7.440710000000001, 112.69715000000001],
      [-7.44078, 112.69717000000001],
      [-7.441700000000001, 112.69733000000001],
      [-7.442780000000001, 112.69755],
      [-7.443150000000001, 112.69768],
      [-7.44336, 112.69785],
      [-7.4439, 112.69842000000001],
      [-7.444140000000001, 112.69863000000001],
      [-7.44444, 112.69877000000001],
      [-7.4449000000000005, 112.69893],
      [-7.44556, 112.69922000000001],
      [-7.44617, 112.69967000000001],
      [-7.44641, 112.69984000000001],
      [-7.44669, 112.7],
      [-7.44678, 112.70008000000001],
      [-7.447220000000001, 112.70051000000001],
      [-7.44739, 112.70065000000001],
      [-7.447610000000001, 112.70096000000001],
      [-7.44786, 112.70141000000001],
      [-7.448040000000001, 112.70171],
      [-7.448220000000001, 112.70221000000001],
      [-7.448570000000001, 112.70335000000001],
      [-7.448710000000001, 112.70395],
      [-7.44873, 112.70424000000001],
      [-7.448690000000001, 112.70437000000001],
      [-7.44868, 112.70449],
      [-7.448720000000001, 112.70461],
      [-7.44885, 112.70483000000002],
      [-7.44988, 112.71024000000001],
      [-7.450360000000001, 112.71241],
      [-7.45051, 112.71322],
      [-7.450670000000001, 112.71395000000001],
      [-7.450990000000001, 112.71525000000001],
      [-7.451020000000001, 112.71547000000001],
      [-7.44983, 112.71555000000001],
      [-7.449490000000001, 112.71561000000001],
      [-7.4492, 112.71567],
      [-7.44908, 112.71571000000002],
      [-7.448950000000001, 112.71578000000001],
      [-7.448860000000001, 112.71588000000001],
      [-7.448790000000001, 112.71599],
      [-7.44873, 112.71621],
      [-7.44866, 112.71631000000001],
      [-7.44859, 112.71635],
      [-7.447970000000001, 112.71649000000001],
      [-7.44678, 112.71674000000002],
      [-7.44718, 112.71870000000001],
      [-7.448650000000001, 112.71839000000001],
      [-7.449860000000001, 112.71811000000001],
      [-7.450550000000001, 112.718],
      [-7.451770000000001, 112.71775000000001],
      [-7.452240000000001, 112.71765],
      [-7.453360000000001, 112.71748000000001],
      [-7.453620000000001, 112.71746],
      [-7.455350000000001, 112.71741000000002],
      [-7.455620000000001, 112.71742],
      [-7.456790000000001, 112.71754000000001],
      [-7.45821, 112.71756],
      [-7.4593300000000005, 112.71756],
      [-7.4601500000000005, 112.71761000000001],
      [-7.46046, 112.71758000000001],
      [-7.46119, 112.71747],
      [-7.46295, 112.71724],
      [-7.467820000000001, 112.71652],
      [-7.469710000000001, 112.71626],
      [-7.47081, 112.71607000000002],
      [-7.471540000000001, 112.71594],
      [-7.47278, 112.71569000000001],
      [-7.473590000000001, 112.7155],
      [-7.47559, 112.71497000000001],
      [-7.476430000000001, 112.71476000000001],
      [-7.47972, 112.71390000000001],
      [-7.480670000000001, 112.71371],
      [-7.48427, 112.71288000000001],
      [-7.4886800000000004, 112.71185000000001],
      [-7.4901100000000005, 112.71153000000001],
      [-7.49023, 112.71164],
      [-7.49037, 112.71172000000001],
      [-7.49054, 112.71178],
      [-7.490730000000001, 112.71179000000001],
      [-7.491010000000001, 112.71175000000001],
      [-7.49136, 112.71165],
      [-7.491530000000001, 112.71153000000001],
      [-7.491670000000001, 112.71139000000001],
      [-7.491790000000001, 112.71124],
      [-7.4930900000000005, 112.71103000000001],
      [-7.49373, 112.71091000000001],
      [-7.49481, 112.71072000000001],
      [-7.49837, 112.71003],
      [-7.501380000000001, 112.7094],
      [-7.502790000000001, 112.70916000000001],
      [-7.504860000000001, 112.70877000000002],
      [-7.50581, 112.70862000000001],
      [-7.5063, 112.70856],
      [-7.50708, 112.70855],
      [-7.50792, 112.70841000000001],
      [-7.509, 112.7082],
      [-7.50947, 112.70803000000001],
      [-7.50975, 112.70788],
      [-7.51003, 112.70776000000001],
      [-7.51097, 112.70753],
      [-7.51111, 112.70753],
      [-7.511220000000001, 112.70746000000001],
      [-7.511270000000001, 112.7074],
      [-7.5113, 112.70733000000001],
      [-7.511310000000001, 112.70725000000002],
      [-7.5113, 112.70717],
      [-7.511260000000001, 112.70710000000001],
      [-7.51123, 112.70705000000001],
      [-7.51111, 112.70698000000002],
      [-7.511030000000001, 112.70685],
      [-7.51097, 112.70668],
      [-7.510770000000001, 112.70593000000001],
      [-7.510530000000001, 112.70483000000002],
      [-7.510350000000001, 112.70412],
      [-7.510330000000001, 112.70379000000001],
      [-7.51036, 112.7035],
      [-7.51043, 112.70319],
      [-7.5105200000000005, 112.70297000000001],
      [-7.51062, 112.70279000000001],
      [-7.51097, 112.70234],
      [-7.512510000000001, 112.70046],
      [-7.512740000000001, 112.70019],
      [-7.512950000000001, 112.69997000000001],
      [-7.513260000000001, 112.69968000000001],
      [-7.51348, 112.69950000000001],
      [-7.51386, 112.69922000000001],
      [-7.514450000000001, 112.69882000000001],
      [-7.51498, 112.69853],
      [-7.5170200000000005, 112.69731000000002],
      [-7.52033, 112.69538000000001],
      [-7.522320000000001, 112.69426000000001],
      [-7.524140000000001, 112.69321000000001],
      [-7.52484, 112.69277000000001],
      [-7.5293600000000005, 112.69010000000002],
      [-7.5331600000000005, 112.68793000000001],
      [-7.5357, 112.68643000000002],
      [-7.53624, 112.68609000000001],
      [-7.538200000000001, 112.68491],
      [-7.539410000000001, 112.68432000000001],
      [-7.539350000000001, 112.68478],
      [-7.53929, 112.68562000000001],
      [-7.53929, 112.68612],
      [-7.539930000000001, 112.68898000000002],
      [-7.539980000000001, 112.68929000000001],
      [-7.540070000000001, 112.68968000000001],
      [-7.540240000000001, 112.69069],
      [-7.540330000000001, 112.69123],
      [-7.54039, 112.69194],
      [-7.540400000000001, 112.69214000000001],
      [-7.540380000000001, 112.69231],
      [-7.540290000000001, 112.69263000000001],
      [-7.540240000000001, 112.69293],
      [-7.54025, 112.69315],
      [-7.540640000000001, 112.69461000000001],
      [-7.5391, 112.69506000000001],
      [-7.539040000000001, 112.69513],
      [-7.53884, 112.69521],
      [-7.538990000000001, 112.69555000000001],
      [-7.538620000000001, 112.69572000000001],
      [-7.53854, 112.69576]
    ];
  }
});

// app/static/transj-bus-stops.json
var transj_bus_stops_default, init_transj_bus_stops = __esm({
  "app/static/transj-bus-stops.json"() {
    transj_bus_stops_default = [
      {
        sh_id: 8018,
        sh_name: "Halte Terminal Porong",
        kor: "JTM1",
        origin: "Sidoarjo via Surabaya",
        toward: "Gresik",
        sh_lat: -7.538562,
        sh_lng: 112.695812,
        tw_lat: -7.170007,
        tw_lng: 112.58445
      },
      {
        sh_id: 8020,
        sh_name: "Halte Gedang",
        kor: "JTM1",
        origin: "Sidoarjo via Surabaya",
        toward: "Gresik",
        sh_lat: -7.535069,
        sh_lng: 112.700963,
        tw_lat: -7.170007,
        tw_lng: 112.58445
      },
      {
        sh_id: 8021,
        sh_name: "Halte Tanggulangin",
        kor: "JTM1",
        origin: "Sidoarjo via Surabaya",
        toward: "Gresik",
        sh_lat: -7.507116,
        sh_lng: 112.708273,
        tw_lat: -7.170007,
        tw_lng: 112.58445
      },
      {
        sh_id: 8022,
        sh_name: "Halte Keramean",
        kor: "JTM1",
        origin: "Sidoarjo via Surabaya",
        toward: "Gresik",
        sh_lat: -7.492475,
        sh_lng: 112.710938,
        tw_lat: -7.170007,
        tw_lng: 112.58445
      },
      {
        sh_id: 8023,
        sh_name: "Halte Terminal Larangan",
        kor: "JTM1",
        origin: "Sidoarjo via Surabaya",
        toward: "Gresik",
        sh_lat: -7.466702,
        sh_lng: 112.712465,
        tw_lat: -7.170007,
        tw_lng: 112.58445
      },
      {
        sh_id: 8024,
        sh_name: "Halte Lemah Putro",
        kor: "JTM1",
        origin: "Sidoarjo via Surabaya",
        toward: "Gresik",
        sh_lat: -7.452591,
        sh_lng: 112.714876,
        tw_lat: -7.170007,
        tw_lng: 112.58445
      },
      {
        sh_id: 8025,
        sh_name: "Halte Alun- Alun I",
        kor: "JTM1",
        origin: "Sidoarjo via Surabaya",
        toward: "Gresik",
        sh_lat: -7.447055,
        sh_lng: 112.717286,
        tw_lat: -7.170007,
        tw_lng: 112.58445
      },
      {
        sh_id: 8010,
        sh_name: "Halte Sun City I",
        kor: "JTM1",
        origin: "Sidoarjo via Surabaya",
        toward: "Gresik",
        sh_lat: -7.450053,
        sh_lng: 112.710307,
        tw_lat: -7.170007,
        tw_lng: 112.58445
      },
      {
        sh_id: 8027,
        sh_name: "Halte Pondok Mutiara",
        kor: "JTM1",
        origin: "Sidoarjo via Surabaya",
        toward: "Gresik",
        sh_lat: -7.4484,
        sh_lng: 112.702277,
        tw_lat: -7.170007,
        tw_lng: 112.58445
      },
      {
        sh_id: 8111,
        sh_name: "Halte Terminal Purabaya",
        kor: "JTM1",
        origin: "Sidoarjo via Surabaya",
        toward: "Gresik",
        sh_lat: -7.352095,
        sh_lng: 112.724081,
        tw_lat: -7.170007,
        tw_lng: 112.58445
      },
      {
        sh_id: 8008,
        sh_name: "Halte Bungurasih",
        kor: "JTM1",
        origin: "Sidoarjo via Surabaya",
        toward: "Gresik",
        sh_lat: -7.349975,
        sh_lng: 112.729104,
        tw_lat: -7.170007,
        tw_lng: 112.58445
      },
      {
        sh_id: 8379,
        sh_name: "Halte Segoromadu I",
        kor: "JTM1",
        origin: "Sidoarjo via Surabaya",
        toward: "Gresik",
        sh_lat: -7.193713,
        sh_lng: 112.645351,
        tw_lat: -7.170007,
        tw_lng: 112.58445
      },
      {
        sh_id: 8030,
        sh_name: "Halte Gelora Joko Samudra I",
        kor: "JTM1",
        origin: "Sidoarjo via Surabaya",
        toward: "Gresik",
        sh_lat: -7.184874,
        sh_lng: 112.648004,
        tw_lat: -7.170007,
        tw_lng: 112.58445
      },
      {
        sh_id: 8031,
        sh_name: "Halte BNI I",
        kor: "JTM1",
        origin: "Sidoarjo via Surabaya",
        toward: "Gresik",
        sh_lat: -7.170779,
        sh_lng: 112.652496,
        tw_lat: -7.170007,
        tw_lng: 112.58445
      },
      {
        sh_id: 8032,
        sh_name: "Halte RS Semen Gresik I",
        kor: "JTM1",
        origin: "Sidoarjo via Surabaya",
        toward: "Gresik",
        sh_lat: -7.166789,
        sh_lng: 112.641443,
        tw_lat: -7.170007,
        tw_lng: 112.58445
      },
      {
        sh_id: 8033,
        sh_name: "Halte Universitas Muhammadiyah Gresik I",
        kor: "JTM1",
        origin: "Sidoarjo via Surabaya",
        toward: "Gresik",
        sh_lat: -7.161471,
        sh_lng: 112.616263,
        tw_lat: -7.170007,
        tw_lng: 112.58445
      },
      {
        sh_id: 8034,
        sh_name: "Halte Kantor Bupati Gresik I",
        kor: "JTM1",
        origin: "Sidoarjo via Surabaya",
        toward: "Gresik",
        sh_lat: -7.167784,
        sh_lng: 112.599605,
        tw_lat: -7.170007,
        tw_lng: 112.58445
      },
      {
        sh_id: 8001,
        sh_name: "Halte Terminal Bunder",
        kor: "JTM1",
        origin: "Sidoarjo via Surabaya",
        toward: "Gresik",
        sh_lat: -7.170117,
        sh_lng: 112.584441,
        tw_lat: -7.170007,
        tw_lng: 112.58445
      },
      {
        sh_id: 8001,
        sh_name: "Halte Terminal Bunder",
        kor: "JTM1",
        origin: "Gresik",
        toward: "Sidoarjo via Surabaya",
        sh_lat: -7.170117,
        sh_lng: 112.584441,
        tw_lat: -7.538638,
        tw_lng: 112.695814
      },
      {
        sh_id: 8002,
        sh_name: "Halte Kantor Bupati Gresik II",
        kor: "JTM1",
        origin: "Gresik",
        toward: "Sidoarjo via Surabaya",
        sh_lat: -7.167599,
        sh_lng: 112.599882,
        tw_lat: -7.538638,
        tw_lng: 112.695814
      },
      {
        sh_id: 8003,
        sh_name: "Halte Universitas Muhammadiyah Gresik II",
        kor: "JTM1",
        origin: "Gresik",
        toward: "Sidoarjo via Surabaya",
        sh_lat: -7.16162,
        sh_lng: 112.615992,
        tw_lat: -7.538638,
        tw_lng: 112.695814
      },
      {
        sh_id: 8004,
        sh_name: "Halte RS Semen Gresik II",
        kor: "JTM1",
        origin: "Gresik",
        toward: "Sidoarjo via Surabaya",
        sh_lat: -7.16677,
        sh_lng: 112.641812,
        tw_lat: -7.538638,
        tw_lng: 112.695814
      },
      {
        sh_id: 8005,
        sh_name: "Halte BNI II",
        kor: "JTM1",
        origin: "Gresik",
        toward: "Sidoarjo via Surabaya",
        sh_lat: -7.171828,
        sh_lng: 112.653431,
        tw_lat: -7.538638,
        tw_lng: 112.695814
      },
      {
        sh_id: 8006,
        sh_name: "Halte Gelora Joko Samudra II",
        kor: "JTM1",
        origin: "Gresik",
        toward: "Sidoarjo via Surabaya",
        sh_lat: -7.185096,
        sh_lng: 112.648291,
        tw_lat: -7.538638,
        tw_lng: 112.695814
      },
      {
        sh_id: 8378,
        sh_name: "Halte Segoromadu II",
        kor: "JTM1",
        origin: "Gresik",
        toward: "Sidoarjo via Surabaya",
        sh_lat: -7.193796,
        sh_lng: 112.6459,
        tw_lat: -7.538638,
        tw_lng: 112.695814
      },
      {
        sh_id: 8111,
        sh_name: "Halte Terminal Purabaya",
        kor: "JTM1",
        origin: "Gresik",
        toward: "Sidoarjo via Surabaya",
        sh_lat: -7.352095,
        sh_lng: 112.724081,
        tw_lat: -7.538638,
        tw_lng: 112.695814
      },
      {
        sh_id: 8008,
        sh_name: "Halte Bungurasih",
        kor: "JTM1",
        origin: "Gresik",
        toward: "Sidoarjo via Surabaya",
        sh_lat: -7.349975,
        sh_lng: 112.729104,
        tw_lat: -7.538638,
        tw_lng: 112.695814
      },
      {
        sh_id: 8009,
        sh_name: "Halte Pondok Jati",
        kor: "JTM1",
        origin: "Gresik",
        toward: "Sidoarjo via Surabaya",
        sh_lat: -7.448151,
        sh_lng: 112.702389,
        tw_lat: -7.538638,
        tw_lng: 112.695814
      },
      {
        sh_id: 8026,
        sh_name: "Halte Sun City II",
        kor: "JTM1",
        origin: "Gresik",
        toward: "Sidoarjo via Surabaya",
        sh_lat: -7.449746,
        sh_lng: 112.709965,
        tw_lat: -7.538638,
        tw_lng: 112.695814
      },
      {
        sh_id: 8011,
        sh_name: "Halte Alun- Alun II",
        kor: "JTM1",
        origin: "Gresik",
        toward: "Sidoarjo via Surabaya",
        sh_lat: -7.446773,
        sh_lng: 112.717302,
        tw_lat: -7.538638,
        tw_lng: 112.695814
      },
      {
        sh_id: 8012,
        sh_name: "Halte Celep (Hanya menurunkan penumpang)",
        kor: "JTM1",
        origin: "Gresik",
        toward: "Sidoarjo via Surabaya",
        sh_lat: -7.465443,
        sh_lng: 112.716907,
        tw_lat: -7.538638,
        tw_lng: 112.695814
      },
      {
        sh_id: 8013,
        sh_name: "Halte Bligo",
        kor: "JTM1",
        origin: "Gresik",
        toward: "Sidoarjo via Surabaya",
        sh_lat: -7.474154,
        sh_lng: 112.715456,
        tw_lat: -7.538638,
        tw_lng: 112.695814
      },
      {
        sh_id: 8014,
        sh_name: "Halte Ngampelsari",
        kor: "JTM1",
        origin: "Gresik",
        toward: "Sidoarjo via Surabaya",
        sh_lat: -7.491266,
        sh_lng: 112.711506,
        tw_lat: -7.538638,
        tw_lng: 112.695814
      },
      {
        sh_id: 8015,
        sh_name: "Halte Ngaban",
        kor: "JTM1",
        origin: "Gresik",
        toward: "Sidoarjo via Surabaya",
        sh_lat: -7.50099,
        sh_lng: 112.709517,
        tw_lat: -7.538638,
        tw_lng: 112.695814
      },
      {
        sh_id: 8016,
        sh_name: "Halte Kalitengah",
        kor: "JTM1",
        origin: "Gresik",
        toward: "Sidoarjo via Surabaya",
        sh_lat: -7.507742,
        sh_lng: 112.708512,
        tw_lat: -7.538638,
        tw_lng: 112.695814
      },
      {
        sh_id: 8017,
        sh_name: "Halte Porong",
        kor: "JTM1",
        origin: "Gresik",
        toward: "Sidoarjo via Surabaya",
        sh_lat: -7.539211,
        sh_lng: 112.685174,
        tw_lat: -7.538638,
        tw_lng: 112.695814
      },
      {
        sh_id: 8018,
        sh_name: "Halte Terminal Porong",
        kor: "JTM1",
        origin: "Gresik",
        toward: "Sidoarjo via Surabaya",
        sh_lat: -7.538562,
        sh_lng: 112.695812,
        tw_lat: -7.538638,
        tw_lng: 112.695814
      }
    ];
  }
});

// app/components/transj-bus.tsx
function TransJBusPos() {
  let [positions, setPositions] = (0, import_react19.useState)([]), { showTransJStops, showTransJ } = useFilterState((state) => state), loadTransJPositions = async () => (await (await fetch(
    `${window.ENV.TRANSJ_TRACKER_ENDPOINT}/api/findAll`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ key: "ngiraya" })
    }
  )).json()).data;
  return (0, import_react19.useEffect)(() => {
    loadTransJPositions().then((results) => {
      setPositions(results);
    }).then(() => {
      (0, import_socket.io)(`${window.ENV.TRANSJ_TRACKER_ENDPOINT}`).on("update_jatim", (event) => {
        setPositions(
          (positions2) => positions2.map((item, i) => (item.id === event.id && (item.lat = event.lat, item.lng = event.lng), item))
        );
      });
    });
  }, []), /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      Polyline,
      {
        pathOptions: { color: "black", opacity: 0.6 },
        positions: busRoutes
      }
    ),
    showTransJ && positions.map((pos, index) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      import_react_leaflet_drift_marker2.default,
      {
        duration: 1e3,
        position: [pos.lat, pos.lng],
        icon: BusIcon({ color: "orange" }),
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Popup, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("h4", { children: [
            pos.plate_number,
            " (",
            pos.name,
            ")"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { children: [
            "Passenger : ",
            pos.passenger,
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
            "Synced : ",
            pos.dt_tracker
          ] })
        ] }, "p" + index)
      },
      "m" + index
    )),
    showTransJStops && busStops.map((stop, index) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      Marker,
      {
        position: [stop.sh_lat, stop.sh_lng],
        icon: BusStopIcon({ color: "yellow" }),
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Popup, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h4", { children: stop.sh_name }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { children: [
            "From : ",
            stop.origin,
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("br", {}),
            " To : ",
            stop.toward
          ] })
        ] }, "p" + index)
      },
      "m" + index
    ))
  ] }, "transj-pos-map");
}
var import_react19, import_react_leaflet_drift_marker2, import_socket, import_jsx_runtime11, busRoutes, busStops, init_transj_bus = __esm({
  "app/components/transj-bus.tsx"() {
    "use strict";
    import_react19 = require("react");
    init_lib2();
    import_react_leaflet_drift_marker2 = __toESM(require("react-leaflet-drift-marker")), import_socket = require("socket.io-client");
    init_states();
    init_bus();
    init_bus_stop();
    init_routes();
    init_transj_bus_stops();
    import_jsx_runtime11 = require("react/jsx-runtime"), busRoutes = routes_default, busStops = transj_bus_stops_default;
  }
});

// app/components/map-wrapper.tsx
var map_wrapper_exports = {};
__export(map_wrapper_exports, {
  default: () => map_wrapper_default
});
var import_jsx_runtime12, Map2, map_wrapper_default, init_map_wrapper = __esm({
  "app/components/map-wrapper.tsx"() {
    "use strict";
    init_lib2();
    init_surabaya_bus();
    init_transj_bus();
    import_jsx_runtime12 = require("react/jsx-runtime"), Map2 = () => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      MapContainer,
      {
        zoom: 11,
        scrollWheelZoom: !0,
        center: [-7.2575, 112.7521],
        className: "full-height-container",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            TileLayer,
            {
              url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
              attribution: '\xA9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TransJBusPos, {}),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SurabayaBus, {})
        ]
      }
    ), map_wrapper_default = Map2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta,
  useBrowserLayoutEffect: () => useBrowserLayoutEffect
});
var import_node2 = require("@remix-run/node"), import_react6 = require("@remix-run/react");

// node_modules/.pnpm/antd-mobile@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/antd-mobile/bundle/antd-mobile.es.js
var L = __toESM(require("react")), import_react2 = __toESM(require("react")), $m = __toESM(require("react-dom")), import_react_dom = require("react-dom"), sr = !!(typeof window < "u" && typeof document < "u" && window.document && window.document.createElement);
sr && document.addEventListener("touchstart", () => {
}, !0);
function di(e10, t) {
  var n = {};
  for (var r in e10)
    Object.prototype.hasOwnProperty.call(e10, r) && t.indexOf(r) < 0 && (n[r] = e10[r]);
  if (e10 != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e10); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e10, r[i]) && (n[r[i]] = e10[r[i]]);
  return n;
}
function ye(e10, t, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
    function s(d) {
      try {
        u(r.next(d));
      } catch (f) {
        o(f);
      }
    }
    function c(d) {
      try {
        u(r.throw(d));
      } catch (f) {
        o(f);
      }
    }
    function u(d) {
      d.done ? a(d.value) : i(d.value).then(s, c);
    }
    u((r = r.apply(e10, t || [])).next());
  });
}
function Om(e10, t) {
  function n(r, i) {
    if (typeof r != "object" || typeof i != "object" || Array.isArray(r) || Array.isArray(i))
      return i !== void 0 ? i : r;
    let a = {};
    for (let o in r)
      r.hasOwnProperty(o) && (a[o] = n(r[o], i[o]));
    return a;
  }
  return n(e10, t);
}
var ze = "${label} is not a valid ${type}", Sm = {
  locale: "en",
  common: {
    confirm: "Confirm",
    cancel: "Cancel",
    loading: "Loading"
  },
  Calendar: {
    markItems: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    renderYearAndMonth: (e10, t) => `${e10}/${t}`
  },
  Cascader: {
    placeholder: "Selecting"
  },
  Dialog: {
    ok: "OK"
  },
  DatePicker: {
    tillNow: "Till Now"
  },
  ErrorBlock: {
    default: {
      title: "Oops, something went wrong",
      description: "Please wait a minute and try again"
    },
    busy: {
      title: "Oops, not loading",
      description: "Try to refresh the page"
    },
    disconnected: {
      title: "Network is busy",
      description: "Try to refresh the page"
    },
    empty: {
      title: "Hmm, couldn't find that...",
      description: "Want to try a new search?"
    }
  },
  Form: {
    required: "Required",
    optional: "Optional",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: ze,
        method: ze,
        array: ze,
        object: ze,
        number: ze,
        date: ze,
        boolean: ze,
        integer: ze,
        float: ze,
        regexp: ze,
        email: ze,
        url: ze,
        hex: ze
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  ImageUploader: {
    uploading: "Uploading...",
    upload: "Upload"
  },
  InfiniteScroll: {
    noMore: "No more",
    failedToLoad: "Failed to load",
    retry: "Retry"
  },
  Input: {
    clear: "clear"
  },
  Mask: {
    name: "Mask"
  },
  Modal: {
    ok: "OK"
  },
  PasscodeInput: {
    name: "Passcode Input"
  },
  PullToRefresh: {
    pulling: "Scroll down to refresh",
    canRelease: "Release to refresh immediately",
    complete: "Refresh successful"
  },
  SearchBar: {
    name: "Search Bar"
  },
  Slider: {
    name: "Slider"
  },
  Stepper: {
    decrease: "decrease",
    increase: "increase"
  },
  Switch: {
    name: "Switch"
  }
}, Ue = "${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}", Fm = Om(Sm, {
  locale: "zh-CH",
  common: {
    confirm: "\u786E\u5B9A",
    cancel: "\u53D6\u6D88",
    loading: "\u52A0\u8F7D\u4E2D"
  },
  Calendar: {
    markItems: ["\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u65E5"],
    renderYearAndMonth: (e10, t) => `${e10}\u5E74${t}\u6708`
  },
  Cascader: {
    placeholder: "\u8BF7\u9009\u62E9"
  },
  Dialog: {
    ok: "\u6211\u77E5\u9053\u4E86"
  },
  DatePicker: {
    tillNow: "\u81F3\u4ECA"
  },
  ErrorBlock: {
    default: {
      title: "\u9875\u9762\u9047\u5230\u4E00\u4E9B\u5C0F\u95EE\u9898",
      description: "\u5F85\u4F1A\u6765\u8BD5\u8BD5"
    },
    busy: {
      title: "\u524D\u65B9\u62E5\u5835",
      description: "\u5237\u65B0\u8BD5\u8BD5"
    },
    disconnected: {
      title: "\u7F51\u7EDC\u6709\u70B9\u5FD9",
      description: "\u52A8\u52A8\u624B\u6307\u5E2E\u5FD9\u4FEE\u590D"
    },
    empty: {
      title: "\u6CA1\u6709\u627E\u5230\u4F60\u9700\u8981\u7684\u4E1C\u897F",
      description: "\u627E\u627E\u5176\u4ED6\u7684\u5427"
    }
  },
  Form: {
    required: "\u5FC5\u586B",
    optional: "\u9009\u586B",
    defaultValidateMessages: {
      default: "\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",
      required: "\u8BF7\u8F93\u5165${label}",
      enum: "${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",
      whitespace: "${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",
      date: {
        format: "${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",
        parse: "${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",
        invalid: "${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"
      },
      types: {
        string: Ue,
        method: Ue,
        array: Ue,
        object: Ue,
        number: Ue,
        date: Ue,
        boolean: Ue,
        integer: Ue,
        float: Ue,
        regexp: Ue,
        email: Ue,
        url: Ue,
        hex: Ue
      },
      string: {
        len: "${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",
        min: "${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",
        max: "${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",
        range: "${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"
      },
      number: {
        len: "${label}\u5FC5\u987B\u7B49\u4E8E${len}",
        min: "${label}\u6700\u5C0F\u503C\u4E3A${min}",
        max: "${label}\u6700\u5927\u503C\u4E3A${max}",
        range: "${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"
      },
      array: {
        len: "\u987B\u4E3A${len}\u4E2A${label}",
        min: "\u6700\u5C11${min}\u4E2A${label}",
        max: "\u6700\u591A${max}\u4E2A${label}",
        range: "${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"
      },
      pattern: {
        mismatch: "${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"
      }
    }
  },
  ImageUploader: {
    uploading: "\u4E0A\u4F20\u4E2D...",
    upload: "\u4E0A\u4F20"
  },
  InfiniteScroll: {
    noMore: "\u6CA1\u6709\u66F4\u591A\u4E86",
    failedToLoad: "\u52A0\u8F7D\u5931\u8D25",
    retry: "\u91CD\u65B0\u52A0\u8F7D"
  },
  Input: {
    clear: "\u6E05\u9664"
  },
  Mask: {
    name: "\u80CC\u666F\u8499\u5C42"
  },
  Modal: {
    ok: "\u6211\u77E5\u9053\u4E86"
  },
  PasscodeInput: {
    name: "\u5BC6\u7801\u8F93\u5165\u6846"
  },
  PullToRefresh: {
    pulling: "\u4E0B\u62C9\u5237\u65B0",
    canRelease: "\u91CA\u653E\u7ACB\u5373\u5237\u65B0",
    complete: "\u5237\u65B0\u6210\u529F"
  },
  SearchBar: {
    name: "\u641C\u7D22\u6846"
  },
  Slider: {
    name: "\u6ED1\u52A8\u8F93\u5165\u6761"
  },
  Stepper: {
    decrease: "\u51CF\u5C11",
    increase: "\u589E\u52A0"
  },
  Switch: {
    name: "\u5F00\u5173"
  }
}), Pm = Fm, jf = {
  current: {
    locale: Pm
  }
};
function mi() {
  return jf.current;
}
var Bf = import_react2.default.createContext(null);
function $e() {
  var e10;
  return (e10 = (0, import_react2.useContext)(Bf)) !== null && e10 !== void 0 ? e10 : mi();
}
function ie(e10, t) {
  let n = e10;
  for (let r in t)
    t.hasOwnProperty(r) && (n[r] = t[r]);
  return n;
}
var Ct = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Wf = { exports: {} };
(function(e10) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], i = 0; i < arguments.length; i++) {
        var a = arguments[i];
        if (a) {
          var o = typeof a;
          if (o === "string" || o === "number")
            r.push(a);
          else if (Array.isArray(a)) {
            if (a.length) {
              var s = n.apply(null, a);
              s && r.push(s);
            }
          } else if (o === "object") {
            if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]")) {
              r.push(a.toString());
              continue;
            }
            for (var c in a)
              t.call(a, c) && a[c] && r.push(c);
          }
        }
      }
      return r.join(" ");
    }
    e10.exports ? (n.default = n, e10.exports = n) : window.classNames = n;
  })();
})(Wf);
var V = Wf.exports;
function j(e10, t) {
  let n = Object.assign({}, t.props);
  e10.className && (n.className = V(t.props.className, e10.className)), e10.style && (n.style = Object.assign(Object.assign({}, n.style), e10.style)), e10.tabIndex !== void 0 && (n.tabIndex = e10.tabIndex);
  for (let r in e10)
    !e10.hasOwnProperty(r) || (r.startsWith("data-") || r.startsWith("aria-")) && (n[r] = e10[r]);
  return import_react2.default.cloneElement(t, n);
}
var Am = typeof Ct == "object" && Ct && Ct.Object === Object && Ct, Zf = Am, Tm = Zf, Rm = typeof self == "object" && self && self.Object === Object && self, Mm = Tm || Rm || Function("return this")(), ht = Mm, Im = ht, Lm = Im.Symbol, Qs = Lm, dc = Qs, Hf = Object.prototype, Dm = Hf.hasOwnProperty, Vm = Hf.toString, _r = dc ? dc.toStringTag : void 0;
function jm(e10) {
  var t = Dm.call(e10, _r), n = e10[_r];
  try {
    e10[_r] = void 0;
    var r = !0;
  } catch {
  }
  var i = Vm.call(e10);
  return r && (t ? e10[_r] = n : delete e10[_r]), i;
}
var Bm = jm, Wm = Object.prototype, Zm = Wm.toString;
function Hm(e10) {
  return Zm.call(e10);
}
var zm = Hm, mc = Qs, Um = Bm, qm = zm, Km = "[object Null]", Gm = "[object Undefined]", hc = mc ? mc.toStringTag : void 0;
function Ym(e10) {
  return e10 == null ? e10 === void 0 ? Gm : Km : hc && hc in Object(e10) ? Um(e10) : qm(e10);
}
var lr = Ym;
function Xm(e10) {
  var t = typeof e10;
  return e10 != null && (t == "object" || t == "function");
}
var kt = Xm, Qm = lr, Jm = kt, eh = "[object AsyncFunction]", th = "[object Function]", nh = "[object GeneratorFunction]", rh = "[object Proxy]";
function ih(e10) {
  if (!Jm(e10))
    return !1;
  var t = Qm(e10);
  return t == th || t == nh || t == eh || t == rh;
}
var Js = ih, ah = ht, oh = ah["__core-js_shared__"], sh = oh, xo = sh, pc = function() {
  var e10 = /[^.]+$/.exec(xo && xo.keys && xo.keys.IE_PROTO || "");
  return e10 ? "Symbol(src)_1." + e10 : "";
}();
function lh(e10) {
  return !!pc && pc in e10;
}
var ch = lh, uh = Function.prototype, fh = uh.toString;
function dh(e10) {
  if (e10 != null) {
    try {
      return fh.call(e10);
    } catch {
    }
    try {
      return e10 + "";
    } catch {
    }
  }
  return "";
}
var zf = dh, mh = Js, hh = ch, ph = kt, vh = zf, gh = /[\\^$.*+?()[\]{}|]/g, yh = /^\[object .+?Constructor\]$/, bh = Function.prototype, wh = Object.prototype, Eh = bh.toString, Ch = wh.hasOwnProperty, $h = RegExp(
  "^" + Eh.call(Ch).replace(gh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function xh(e10) {
  if (!ph(e10) || hh(e10))
    return !1;
  var t = mh(e10) ? $h : yh;
  return t.test(vh(e10));
}
var _h = xh;
function kh(e10, t) {
  return e10 == null ? void 0 : e10[t];
}
var Oh = kh, Sh = _h, Fh = Oh;
function Ph(e10, t) {
  var n = Fh(e10, t);
  return Sh(n) ? n : void 0;
}
var An = Ph, Nh = An, Ah = function() {
  try {
    var e10 = Nh(Object, "defineProperty");
    return e10({}, "", {}), e10;
  } catch {
  }
}(), Uf = Ah, vc = Uf;
function Th(e10, t, n) {
  t == "__proto__" && vc ? vc(e10, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e10[t] = n;
}
var el = Th;
function Rh(e10, t) {
  return e10 === t || e10 !== e10 && t !== t;
}
var hi = Rh, Mh = el, Ih = hi, Lh = Object.prototype, Dh = Lh.hasOwnProperty;
function Vh(e10, t, n) {
  var r = e10[t];
  (!(Dh.call(e10, t) && Ih(r, n)) || n === void 0 && !(t in e10)) && Mh(e10, t, n);
}
var jh = Vh, Bh = jh, Wh = el;
function Zh(e10, t, n, r) {
  var i = !n;
  n || (n = {});
  for (var a = -1, o = t.length; ++a < o; ) {
    var s = t[a], c = r ? r(n[s], e10[s], s, n, e10) : void 0;
    c === void 0 && (c = e10[s]), i ? Wh(n, s, c) : Bh(n, s, c);
  }
  return n;
}
var qf = Zh;
function Hh(e10) {
  return e10;
}
var Kf = Hh;
function zh(e10, t, n) {
  switch (n.length) {
    case 0:
      return e10.call(t);
    case 1:
      return e10.call(t, n[0]);
    case 2:
      return e10.call(t, n[0], n[1]);
    case 3:
      return e10.call(t, n[0], n[1], n[2]);
  }
  return e10.apply(t, n);
}
var Uh = zh, qh = Uh, gc = Math.max;
function Kh(e10, t, n) {
  return t = gc(t === void 0 ? e10.length - 1 : t, 0), function() {
    for (var r = arguments, i = -1, a = gc(r.length - t, 0), o = Array(a); ++i < a; )
      o[i] = r[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; )
      s[i] = r[i];
    return s[t] = n(o), qh(e10, this, s);
  };
}
var Gh = Kh;
function Yh(e10) {
  return function() {
    return e10;
  };
}
var Xh = Yh, Qh = Xh, yc = Uf, Jh = Kf, e2 = yc ? function(e10, t) {
  return yc(e10, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Qh(t),
    writable: !0
  });
} : Jh, t2 = e2, n2 = 800, r2 = 16, i2 = Date.now;
function a2(e10) {
  var t = 0, n = 0;
  return function() {
    var r = i2(), i = r2 - (r - n);
    if (n = r, i > 0) {
      if (++t >= n2)
        return arguments[0];
    } else
      t = 0;
    return e10.apply(void 0, arguments);
  };
}
var o2 = a2, s2 = t2, l2 = o2, c2 = l2(s2), u2 = c2, f2 = Kf, d2 = Gh, m2 = u2;
function h2(e10, t) {
  return m2(d2(e10, t, f2), e10 + "");
}
var p2 = h2, v2 = 9007199254740991;
function g2(e10) {
  return typeof e10 == "number" && e10 > -1 && e10 % 1 == 0 && e10 <= v2;
}
var Gf = g2, y2 = Js, b2 = Gf;
function w2(e10) {
  return e10 != null && b2(e10.length) && !y2(e10);
}
var La = w2, E2 = 9007199254740991, C2 = /^(?:0|[1-9]\d*)$/;
function $2(e10, t) {
  var n = typeof e10;
  return t = t ?? E2, !!t && (n == "number" || n != "symbol" && C2.test(e10)) && e10 > -1 && e10 % 1 == 0 && e10 < t;
}
var Yf = $2, x2 = hi, _2 = La, k2 = Yf, O2 = kt;
function S2(e10, t, n) {
  if (!O2(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? _2(n) && k2(t, n.length) : r == "string" && t in n) ? x2(n[t], e10) : !1;
}
var F2 = S2, P2 = p2, N2 = F2;
function A2(e10) {
  return P2(function(t, n) {
    var r = -1, i = n.length, a = i > 1 ? n[i - 1] : void 0, o = i > 2 ? n[2] : void 0;
    for (a = e10.length > 3 && typeof a == "function" ? (i--, a) : void 0, o && N2(n[0], n[1], o) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++r < i; ) {
      var s = n[r];
      s && e10(t, s, r, a);
    }
    return t;
  });
}
var Xf = A2;
function T2(e10, t) {
  for (var n = -1, r = Array(e10); ++n < e10; )
    r[n] = t(n);
  return r;
}
var R2 = T2;
function M2(e10) {
  return e10 != null && typeof e10 == "object";
}
var Tn = M2, I2 = lr, L2 = Tn, D2 = "[object Arguments]";
function V2(e10) {
  return L2(e10) && I2(e10) == D2;
}
var j2 = V2, bc = j2, B2 = Tn, Qf = Object.prototype, W2 = Qf.hasOwnProperty, Z2 = Qf.propertyIsEnumerable, H2 = bc(function() {
  return arguments;
}()) ? bc : function(e10) {
  return B2(e10) && W2.call(e10, "callee") && !Z2.call(e10, "callee");
}, Jf = H2, z2 = Array.isArray, Da = z2, Xr = { exports: {} };
function U2() {
  return !1;
}
var q2 = U2;
(function(e10, t) {
  var n = ht, r = q2, i = t && !t.nodeType && t, a = i && !0 && e10 && !e10.nodeType && e10, o = a && a.exports === i, s = o ? n.Buffer : void 0, c = s ? s.isBuffer : void 0, u = c || r;
  e10.exports = u;
})(Xr, Xr.exports);
var K2 = lr, G2 = Gf, Y2 = Tn, X2 = "[object Arguments]", Q2 = "[object Array]", J2 = "[object Boolean]", ep = "[object Date]", tp = "[object Error]", np = "[object Function]", rp = "[object Map]", ip = "[object Number]", ap = "[object Object]", op = "[object RegExp]", sp = "[object Set]", lp = "[object String]", cp = "[object WeakMap]", up = "[object ArrayBuffer]", fp = "[object DataView]", dp = "[object Float32Array]", mp = "[object Float64Array]", hp = "[object Int8Array]", pp = "[object Int16Array]", vp = "[object Int32Array]", gp = "[object Uint8Array]", yp = "[object Uint8ClampedArray]", bp = "[object Uint16Array]", wp = "[object Uint32Array]", fe = {};
fe[dp] = fe[mp] = fe[hp] = fe[pp] = fe[vp] = fe[gp] = fe[yp] = fe[bp] = fe[wp] = !0;
fe[X2] = fe[Q2] = fe[up] = fe[J2] = fe[fp] = fe[ep] = fe[tp] = fe[np] = fe[rp] = fe[ip] = fe[ap] = fe[op] = fe[sp] = fe[lp] = fe[cp] = !1;
function Ep(e10) {
  return Y2(e10) && G2(e10.length) && !!fe[K2(e10)];
}
var Cp = Ep;
function $p(e10) {
  return function(t) {
    return e10(t);
  };
}
var xp = $p, ts = { exports: {} };
(function(e10, t) {
  var n = Zf, r = t && !t.nodeType && t, i = r && !0 && e10 && !e10.nodeType && e10, a = i && i.exports === r, o = a && n.process, s = function() {
    try {
      var c = i && i.require && i.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e10.exports = s;
})(ts, ts.exports);
var _p = Cp, kp = xp, wc = ts.exports, Ec = wc && wc.isTypedArray, Op = Ec ? kp(Ec) : _p, tl = Op, Sp = R2, Fp = Jf, Pp = Da, Np = Xr.exports, Ap = Yf, Tp = tl, Rp = Object.prototype, Mp = Rp.hasOwnProperty;
function Ip(e10, t) {
  var n = Pp(e10), r = !n && Fp(e10), i = !n && !r && Np(e10), a = !n && !r && !i && Tp(e10), o = n || r || i || a, s = o ? Sp(e10.length, String) : [], c = s.length;
  for (var u in e10)
    (t || Mp.call(e10, u)) && !(o && (u == "length" || i && (u == "offset" || u == "parent") || a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || Ap(u, c))) && s.push(u);
  return s;
}
var ed = Ip, Lp = Object.prototype;
function Dp(e10) {
  var t = e10 && e10.constructor, n = typeof t == "function" && t.prototype || Lp;
  return e10 === n;
}
var nl = Dp;
function Vp(e10, t) {
  return function(n) {
    return e10(t(n));
  };
}
var td = Vp, jp = td, Bp = jp(Object.keys, Object), Wp = Bp, Zp = nl, Hp = Wp, zp = Object.prototype, Up = zp.hasOwnProperty;
function qp(e10) {
  if (!Zp(e10))
    return Hp(e10);
  var t = [];
  for (var n in Object(e10))
    Up.call(e10, n) && n != "constructor" && t.push(n);
  return t;
}
var Kp = qp, Gp = ed, Yp = Kp, Xp = La;
function Qp(e10) {
  return Xp(e10) ? Gp(e10) : Yp(e10);
}
var nd = Qp, Jp = qf, e3 = Xf, t3 = nd, n3 = e3(function(e10, t, n, r) {
  Jp(t, t3(t), e10, r);
}), r3 = n3;
function Z(...e10) {
  function t(r, i) {
    return i === void 0 ? r : i;
  }
  let n = Object.assign({}, e10[0]);
  for (let r = 1; r < e10.length; r++)
    n = r3(n, e10[r], t);
  return n;
}
var rd = (e10) => (t, n) => {
  let r = (0, import_react2.useRef)(!1);
  e10(() => () => {
    r.current = !1;
  }, []), e10(() => {
    if (!r.current)
      r.current = !0;
    else
      return t();
  }, n);
}, cr = (e10) => typeof e10 == "function", i3 = (e10) => typeof e10 == "number", a3 = !1, pi = a3;
function on(e10) {
  pi && (cr(e10) || console.error(`useMemoizedFn expected parameter is a function, got ${typeof e10}`));
  let t = (0, import_react2.useRef)(e10);
  t.current = (0, import_react2.useMemo)(() => e10, [e10]);
  let n = (0, import_react2.useRef)();
  return n.current || (n.current = function(...r) {
    return t.current.apply(this, r);
  }), n.current;
}
var Va = rd(import_react2.useEffect);
function Cc(e10, t) {
  if (e10 === t)
    return !0;
  for (let n = 0; n < e10.length; n++)
    if (!Object.is(e10[n], t[n]))
      return !1;
  return !0;
}
function vi(e10) {
  let t = (0, import_react2.useRef)(e10);
  return t.current = e10, t;
}
var o3 = (e10) => {
  pi && (cr(e10) || console.error(`useUnmount expected parameter is a function, got ${typeof e10}`));
  let t = vi(e10);
  (0, import_react2.useEffect)(() => () => {
    t.current();
  }, []);
}, gi = o3, s3 = ht, l3 = function() {
  return s3.Date.now();
}, c3 = l3, u3 = /\s/;
function f3(e10) {
  for (var t = e10.length; t-- && u3.test(e10.charAt(t)); )
    ;
  return t;
}
var d3 = f3, m3 = d3, h3 = /^\s+/;
function p3(e10) {
  return e10 && e10.slice(0, m3(e10) + 1).replace(h3, "");
}
var v3 = p3, g3 = lr, y3 = Tn, b3 = "[object Symbol]";
function w3(e10) {
  return typeof e10 == "symbol" || y3(e10) && g3(e10) == b3;
}
var E3 = w3, C3 = v3, $c = kt, $3 = E3, xc = 0 / 0, x3 = /^[-+]0x[0-9a-f]+$/i, _3 = /^0b[01]+$/i, k3 = /^0o[0-7]+$/i, O3 = parseInt;
function S3(e10) {
  if (typeof e10 == "number")
    return e10;
  if ($3(e10))
    return xc;
  if ($c(e10)) {
    var t = typeof e10.valueOf == "function" ? e10.valueOf() : e10;
    e10 = $c(t) ? t + "" : t;
  }
  if (typeof e10 != "string")
    return e10 === 0 ? e10 : +e10;
  e10 = C3(e10);
  var n = _3.test(e10);
  return n || k3.test(e10) ? O3(e10.slice(2), n ? 2 : 8) : x3.test(e10) ? xc : +e10;
}
var F3 = S3, P3 = kt, _o = c3, _c = F3, N3 = "Expected a function", A3 = Math.max, T3 = Math.min;
function R3(e10, t, n) {
  var r, i, a, o, s, c, u = 0, d = !1, f = !1, m = !0;
  if (typeof e10 != "function")
    throw new TypeError(N3);
  t = _c(t) || 0, P3(n) && (d = !!n.leading, f = "maxWait" in n, a = f ? A3(_c(n.maxWait) || 0, t) : a, m = "trailing" in n ? !!n.trailing : m);
  function g($) {
    var k = r, A = i;
    return r = i = void 0, u = $, o = e10.apply(A, k), o;
  }
  function p($) {
    return u = $, s = setTimeout(w, t), d ? g($) : o;
  }
  function h($) {
    var k = $ - c, A = $ - u, P = t - k;
    return f ? T3(P, a - A) : P;
  }
  function b($) {
    var k = $ - c, A = $ - u;
    return c === void 0 || k >= t || k < 0 || f && A >= a;
  }
  function w() {
    var $ = _o();
    if (b($))
      return C($);
    s = setTimeout(w, h($));
  }
  function C($) {
    return s = void 0, m && r ? g($) : (r = i = void 0, o);
  }
  function v() {
    s !== void 0 && clearTimeout(s), u = 0, r = c = i = s = void 0;
  }
  function y() {
    return s === void 0 ? o : C(_o());
  }
  function E() {
    var $ = _o(), k = b($);
    if (r = arguments, i = this, c = $, k) {
      if (s === void 0)
        return p(c);
      if (f)
        return clearTimeout(s), s = setTimeout(w, t), g(c);
    }
    return s === void 0 && (s = setTimeout(w, t)), o;
  }
  return E.cancel = v, E.flush = y, E;
}
var id = R3, M3 = !!(typeof window < "u" && window.document && window.document.createElement), rl = M3, I3 = id, L3 = kt, D3 = "Expected a function";
function V3(e10, t, n) {
  var r = !0, i = !0;
  if (typeof e10 != "function")
    throw new TypeError(D3);
  return L3(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), I3(e10, t, {
    leading: r,
    maxWait: t,
    trailing: i
  });
}
var j3 = V3, B3 = (e10) => {
  pi && (cr(e10) || console.error(`useMount: parameter \`fn\` expected to be a function, but got "${typeof e10}".`)), (0, import_react2.useEffect)(() => {
    e10 == null || e10();
  }, []);
}, W3 = B3, Z3 = () => {
  let [, e10] = (0, import_react2.useState)({});
  return (0, import_react2.useCallback)(() => e10({}), []);
}, ad = Z3;
function On(e10, t) {
  if (!rl)
    return;
  if (!e10)
    return t;
  let n;
  return cr(e10) ? n = e10() : "current" in e10 ? n = e10.current : n = e10, n;
}
var H3 = (e10) => e10.every((t) => {
  let n = On(t);
  if (!n)
    return !1;
  if (n.getRootNode() instanceof ShadowRoot)
    return !0;
}), z3 = (e10) => e10 ? e10.getRootNode() : document, U3 = (e10) => {
  if (!e10 || !document.getRootNode)
    return document;
  let t = Array.isArray(e10) ? e10 : [e10];
  return H3(t) ? z3(On(t[0])) : document;
}, q3 = U3, K3 = (e10) => (n, r, i) => {
  let a = (0, import_react2.useRef)(!1), o = (0, import_react2.useRef)([]), s = (0, import_react2.useRef)([]), c = (0, import_react2.useRef)();
  e10(() => {
    var u;
    let f = (Array.isArray(i) ? i : [i]).map((m) => On(m));
    if (!a.current) {
      a.current = !0, o.current = f, s.current = r, c.current = n();
      return;
    }
    (f.length !== o.current.length || !Cc(f, o.current) || !Cc(r, s.current)) && ((u = c.current) === null || u === void 0 || u.call(c), o.current = f, s.current = r, c.current = n());
  }), gi(() => {
    var u;
    (u = c.current) === null || u === void 0 || u.call(c), a.current = !1;
  });
}, od = K3, G3 = od(import_react2.useEffect), il = G3;
function sd(e10, t, n = "click") {
  let r = vi(e10);
  il(() => {
    let i = (s) => {
      (Array.isArray(t) ? t : [t]).some((u) => {
        let d = On(u);
        return !d || d.contains(s.target);
      }) || r.current(s);
    }, a = q3(t), o = Array.isArray(n) ? n : [n];
    return o.forEach((s) => a.addEventListener(s, i)), () => {
      o.forEach((s) => a.removeEventListener(s, i));
    };
  }, Array.isArray(n) ? n : [n], t);
}
var ld = { exports: {} };
(function(e10, t) {
  (function(n, r) {
    e10.exports = r();
  })(Ct, function() {
    var n = 1e3, r = 6e4, i = 36e5, a = "millisecond", o = "second", s = "minute", c = "hour", u = "day", d = "week", f = "month", m = "quarter", g = "year", p = "date", h = "Invalid Date", b = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, w = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, C = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(_) {
      var x = ["th", "st", "nd", "rd"], S = _ % 100;
      return "[" + _ + (x[(S - 20) % 10] || x[S] || x[0]) + "]";
    } }, v = function(_, x, S) {
      var M = String(_);
      return !M || M.length >= x ? _ : "" + Array(x + 1 - M.length).join(S) + _;
    }, y = { s: v, z: function(_) {
      var x = -_.utcOffset(), S = Math.abs(x), M = Math.floor(S / 60), F = S % 60;
      return (x <= 0 ? "+" : "-") + v(M, 2, "0") + ":" + v(F, 2, "0");
    }, m: function _(x, S) {
      if (x.date() < S.date())
        return -_(S, x);
      var M = 12 * (S.year() - x.year()) + (S.month() - x.month()), F = x.clone().add(M, f), R = S - F < 0, I = x.clone().add(M + (R ? -1 : 1), f);
      return +(-(M + (S - F) / (R ? F - I : I - F)) || 0);
    }, a: function(_) {
      return _ < 0 ? Math.ceil(_) || 0 : Math.floor(_);
    }, p: function(_) {
      return { M: f, y: g, w: d, d: u, D: p, h: c, m: s, s: o, ms: a, Q: m }[_] || String(_ || "").toLowerCase().replace(/s$/, "");
    }, u: function(_) {
      return _ === void 0;
    } }, E = "en", $ = {};
    $[E] = C;
    var k = function(_) {
      return _ instanceof T;
    }, A = function _(x, S, M) {
      var F;
      if (!x)
        return E;
      if (typeof x == "string") {
        var R = x.toLowerCase();
        $[R] && (F = R), S && ($[R] = S, F = R);
        var I = x.split("-");
        if (!F && I.length > 1)
          return _(I[0]);
      } else {
        var W = x.name;
        $[W] = x, F = W;
      }
      return !M && F && (E = F), F || !M && E;
    }, P = function(_, x) {
      if (k(_))
        return _.clone();
      var S = typeof x == "object" ? x : {};
      return S.date = _, S.args = arguments, new T(S);
    }, N = y;
    N.l = A, N.i = k, N.w = function(_, x) {
      return P(_, { locale: x.$L, utc: x.$u, x: x.$x, $offset: x.$offset });
    };
    var T = function() {
      function _(S) {
        this.$L = A(S.locale, null, !0), this.parse(S);
      }
      var x = _.prototype;
      return x.parse = function(S) {
        this.$d = function(M) {
          var F = M.date, R = M.utc;
          if (F === null)
            return new Date(NaN);
          if (N.u(F))
            return new Date();
          if (F instanceof Date)
            return new Date(F);
          if (typeof F == "string" && !/Z$/i.test(F)) {
            var I = F.match(b);
            if (I) {
              var W = I[2] - 1 || 0, G = (I[7] || "0").substring(0, 3);
              return R ? new Date(Date.UTC(I[1], W, I[3] || 1, I[4] || 0, I[5] || 0, I[6] || 0, G)) : new Date(I[1], W, I[3] || 1, I[4] || 0, I[5] || 0, I[6] || 0, G);
            }
          }
          return new Date(F);
        }(S), this.$x = S.x || {}, this.init();
      }, x.init = function() {
        var S = this.$d;
        this.$y = S.getFullYear(), this.$M = S.getMonth(), this.$D = S.getDate(), this.$W = S.getDay(), this.$H = S.getHours(), this.$m = S.getMinutes(), this.$s = S.getSeconds(), this.$ms = S.getMilliseconds();
      }, x.$utils = function() {
        return N;
      }, x.isValid = function() {
        return this.$d.toString() !== h;
      }, x.isSame = function(S, M) {
        var F = P(S);
        return this.startOf(M) <= F && F <= this.endOf(M);
      }, x.isAfter = function(S, M) {
        return P(S) < this.startOf(M);
      }, x.isBefore = function(S, M) {
        return this.endOf(M) < P(S);
      }, x.$g = function(S, M, F) {
        return N.u(S) ? this[M] : this.set(F, S);
      }, x.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, x.valueOf = function() {
        return this.$d.getTime();
      }, x.startOf = function(S, M) {
        var F = this, R = !!N.u(M) || M, I = N.p(S), W = function(he, pe) {
          var we = N.w(F.$u ? Date.UTC(F.$y, pe, he) : new Date(F.$y, pe, he), F);
          return R ? we : we.endOf(u);
        }, G = function(he, pe) {
          return N.w(F.toDate()[he].apply(F.toDate("s"), (R ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(pe)), F);
        }, H = this.$W, U = this.$M, X = this.$D, K = "set" + (this.$u ? "UTC" : "");
        switch (I) {
          case g:
            return R ? W(1, 0) : W(31, 11);
          case f:
            return R ? W(1, U) : W(0, U + 1);
          case d:
            var Oe = this.$locale().weekStart || 0, Se = (H < Oe ? H + 7 : H) - Oe;
            return W(R ? X - Se : X + (6 - Se), U);
          case u:
          case p:
            return G(K + "Hours", 0);
          case c:
            return G(K + "Minutes", 1);
          case s:
            return G(K + "Seconds", 2);
          case o:
            return G(K + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, x.endOf = function(S) {
        return this.startOf(S, !1);
      }, x.$set = function(S, M) {
        var F, R = N.p(S), I = "set" + (this.$u ? "UTC" : ""), W = (F = {}, F[u] = I + "Date", F[p] = I + "Date", F[f] = I + "Month", F[g] = I + "FullYear", F[c] = I + "Hours", F[s] = I + "Minutes", F[o] = I + "Seconds", F[a] = I + "Milliseconds", F)[R], G = R === u ? this.$D + (M - this.$W) : M;
        if (R === f || R === g) {
          var H = this.clone().set(p, 1);
          H.$d[W](G), H.init(), this.$d = H.set(p, Math.min(this.$D, H.daysInMonth())).$d;
        } else
          W && this.$d[W](G);
        return this.init(), this;
      }, x.set = function(S, M) {
        return this.clone().$set(S, M);
      }, x.get = function(S) {
        return this[N.p(S)]();
      }, x.add = function(S, M) {
        var F, R = this;
        S = Number(S);
        var I = N.p(M), W = function(U) {
          var X = P(R);
          return N.w(X.date(X.date() + Math.round(U * S)), R);
        };
        if (I === f)
          return this.set(f, this.$M + S);
        if (I === g)
          return this.set(g, this.$y + S);
        if (I === u)
          return W(1);
        if (I === d)
          return W(7);
        var G = (F = {}, F[s] = r, F[c] = i, F[o] = n, F)[I] || 1, H = this.$d.getTime() + S * G;
        return N.w(H, this);
      }, x.subtract = function(S, M) {
        return this.add(-1 * S, M);
      }, x.format = function(S) {
        var M = this, F = this.$locale();
        if (!this.isValid())
          return F.invalidDate || h;
        var R = S || "YYYY-MM-DDTHH:mm:ssZ", I = N.z(this), W = this.$H, G = this.$m, H = this.$M, U = F.weekdays, X = F.months, K = function(pe, we, Rn, Be) {
          return pe && (pe[we] || pe(M, R)) || Rn[we].slice(0, Be);
        }, Oe = function(pe) {
          return N.s(W % 12 || 12, pe, "0");
        }, Se = F.meridiem || function(pe, we, Rn) {
          var Be = pe < 12 ? "AM" : "PM";
          return Rn ? Be.toLowerCase() : Be;
        }, he = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: H + 1, MM: N.s(H + 1, 2, "0"), MMM: K(F.monthsShort, H, X, 3), MMMM: K(X, H), D: this.$D, DD: N.s(this.$D, 2, "0"), d: String(this.$W), dd: K(F.weekdaysMin, this.$W, U, 2), ddd: K(F.weekdaysShort, this.$W, U, 3), dddd: U[this.$W], H: String(W), HH: N.s(W, 2, "0"), h: Oe(1), hh: Oe(2), a: Se(W, G, !0), A: Se(W, G, !1), m: String(G), mm: N.s(G, 2, "0"), s: String(this.$s), ss: N.s(this.$s, 2, "0"), SSS: N.s(this.$ms, 3, "0"), Z: I };
        return R.replace(w, function(pe, we) {
          return we || he[pe] || I.replace(":", "");
        });
      }, x.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, x.diff = function(S, M, F) {
        var R, I = N.p(M), W = P(S), G = (W.utcOffset() - this.utcOffset()) * r, H = this - W, U = N.m(this, W);
        return U = (R = {}, R[g] = U / 12, R[f] = U, R[m] = U / 3, R[d] = (H - G) / 6048e5, R[u] = (H - G) / 864e5, R[c] = H / i, R[s] = H / r, R[o] = H / n, R)[I] || H, F ? U : N.a(U);
      }, x.daysInMonth = function() {
        return this.endOf(f).$D;
      }, x.$locale = function() {
        return $[this.$L];
      }, x.locale = function(S, M) {
        if (!S)
          return this.$L;
        var F = this.clone(), R = A(S, M, !0);
        return R && (F.$L = R), F;
      }, x.clone = function() {
        return N.w(this.$d, this);
      }, x.toDate = function() {
        return new Date(this.valueOf());
      }, x.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, x.toISOString = function() {
        return this.$d.toISOString();
      }, x.toString = function() {
        return this.$d.toUTCString();
      }, _;
    }(), O = T.prototype;
    return P.prototype = O, [["$ms", a], ["$s", o], ["$m", s], ["$H", c], ["$W", u], ["$M", f], ["$y", g], ["$D", p]].forEach(function(_) {
      O[_[1]] = function(x) {
        return this.$g(x, _[0], _[1]);
      };
    }), P.extend = function(_, x) {
      return _.$i || (_(x, T, P), _.$i = !0), P;
    }, P.locale = A, P.isDayjs = k, P.unix = function(_) {
      return P(1e3 * _);
    }, P.en = $[E], P.Ls = $, P.p = {}, P;
  });
})(ld);
var xe = ld.exports;
function Y3(e10, t) {
  var n;
  pi && (cr(e10) || console.error(`useDebounceFn expected parameter is a function, got ${typeof e10}`));
  let r = vi(e10), i = (n = t == null ? void 0 : t.wait) !== null && n !== void 0 ? n : 1e3, a = (0, import_react2.useMemo)(() => id((...o) => r.current(...o), i, t), []);
  return gi(() => {
    a.cancel();
  }), {
    run: a,
    cancel: a.cancel,
    flush: a.flush
  };
}
function X3(e10, t, n) {
  let [r, i] = (0, import_react2.useState)({}), {
    run: a
  } = Y3(() => {
    i({});
  }, n);
  (0, import_react2.useEffect)(() => a(), t), Va(e10, [r]);
}
function Q3() {
  this.__data__ = [], this.size = 0;
}
var J3 = Q3, ev = hi;
function tv(e10, t) {
  for (var n = e10.length; n--; )
    if (ev(e10[n][0], t))
      return n;
  return -1;
}
var ja = tv, nv = ja, rv = Array.prototype, iv = rv.splice;
function av(e10) {
  var t = this.__data__, n = nv(t, e10);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : iv.call(t, n, 1), --this.size, !0;
}
var ov = av, sv = ja;
function lv(e10) {
  var t = this.__data__, n = sv(t, e10);
  return n < 0 ? void 0 : t[n][1];
}
var cv = lv, uv = ja;
function fv(e10) {
  return uv(this.__data__, e10) > -1;
}
var dv = fv, mv = ja;
function hv(e10, t) {
  var n = this.__data__, r = mv(n, e10);
  return r < 0 ? (++this.size, n.push([e10, t])) : n[r][1] = t, this;
}
var pv = hv, vv = J3, gv = ov, yv = cv, bv = dv, wv = pv;
function ur(e10) {
  var t = -1, n = e10 == null ? 0 : e10.length;
  for (this.clear(); ++t < n; ) {
    var r = e10[t];
    this.set(r[0], r[1]);
  }
}
ur.prototype.clear = vv;
ur.prototype.delete = gv;
ur.prototype.get = yv;
ur.prototype.has = bv;
ur.prototype.set = wv;
var Ba = ur, Ev = Ba;
function Cv() {
  this.__data__ = new Ev(), this.size = 0;
}
var $v = Cv;
function xv(e10) {
  var t = this.__data__, n = t.delete(e10);
  return this.size = t.size, n;
}
var _v = xv;
function kv(e10) {
  return this.__data__.get(e10);
}
var Ov = kv;
function Sv(e10) {
  return this.__data__.has(e10);
}
var Fv = Sv, Pv = An, Nv = ht, Av = Pv(Nv, "Map"), al = Av, Tv = An, Rv = Tv(Object, "create"), Wa = Rv, kc = Wa;
function Mv() {
  this.__data__ = kc ? kc(null) : {}, this.size = 0;
}
var Iv = Mv;
function Lv(e10) {
  var t = this.has(e10) && delete this.__data__[e10];
  return this.size -= t ? 1 : 0, t;
}
var Dv = Lv, Vv = Wa, jv = "__lodash_hash_undefined__", Bv = Object.prototype, Wv = Bv.hasOwnProperty;
function Zv(e10) {
  var t = this.__data__;
  if (Vv) {
    var n = t[e10];
    return n === jv ? void 0 : n;
  }
  return Wv.call(t, e10) ? t[e10] : void 0;
}
var Hv = Zv, zv = Wa, Uv = Object.prototype, qv = Uv.hasOwnProperty;
function Kv(e10) {
  var t = this.__data__;
  return zv ? t[e10] !== void 0 : qv.call(t, e10);
}
var Gv = Kv, Yv = Wa, Xv = "__lodash_hash_undefined__";
function Qv(e10, t) {
  var n = this.__data__;
  return this.size += this.has(e10) ? 0 : 1, n[e10] = Yv && t === void 0 ? Xv : t, this;
}
var Jv = Qv, e4 = Iv, t4 = Dv, n4 = Hv, r4 = Gv, i4 = Jv;
function fr(e10) {
  var t = -1, n = e10 == null ? 0 : e10.length;
  for (this.clear(); ++t < n; ) {
    var r = e10[t];
    this.set(r[0], r[1]);
  }
}
fr.prototype.clear = e4;
fr.prototype.delete = t4;
fr.prototype.get = n4;
fr.prototype.has = r4;
fr.prototype.set = i4;
var a4 = fr, Oc = a4, o4 = Ba, s4 = al;
function l4() {
  this.size = 0, this.__data__ = {
    hash: new Oc(),
    map: new (s4 || o4)(),
    string: new Oc()
  };
}
var c4 = l4;
function u4(e10) {
  var t = typeof e10;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e10 !== "__proto__" : e10 === null;
}
var f4 = u4, d4 = f4;
function m4(e10, t) {
  var n = e10.__data__;
  return d4(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var Za = m4, h4 = Za;
function p4(e10) {
  var t = h4(this, e10).delete(e10);
  return this.size -= t ? 1 : 0, t;
}
var v4 = p4, g4 = Za;
function y4(e10) {
  return g4(this, e10).get(e10);
}
var b4 = y4, w4 = Za;
function E4(e10) {
  return w4(this, e10).has(e10);
}
var C4 = E4, $4 = Za;
function x4(e10, t) {
  var n = $4(this, e10), r = n.size;
  return n.set(e10, t), this.size += n.size == r ? 0 : 1, this;
}
var _4 = x4, k4 = c4, O4 = v4, S4 = b4, F4 = C4, P4 = _4;
function dr(e10) {
  var t = -1, n = e10 == null ? 0 : e10.length;
  for (this.clear(); ++t < n; ) {
    var r = e10[t];
    this.set(r[0], r[1]);
  }
}
dr.prototype.clear = k4;
dr.prototype.delete = O4;
dr.prototype.get = S4;
dr.prototype.has = F4;
dr.prototype.set = P4;
var ol = dr, N4 = Ba, A4 = al, T4 = ol, R4 = 200;
function M4(e10, t) {
  var n = this.__data__;
  if (n instanceof N4) {
    var r = n.__data__;
    if (!A4 || r.length < R4 - 1)
      return r.push([e10, t]), this.size = ++n.size, this;
    n = this.__data__ = new T4(r);
  }
  return n.set(e10, t), this.size = n.size, this;
}
var I4 = M4, L4 = Ba, D4 = $v, V4 = _v, j4 = Ov, B4 = Fv, W4 = I4;
function mr(e10) {
  var t = this.__data__ = new L4(e10);
  this.size = t.size;
}
mr.prototype.clear = D4;
mr.prototype.delete = V4;
mr.prototype.get = j4;
mr.prototype.has = B4;
mr.prototype.set = W4;
var cd = mr, Z4 = "__lodash_hash_undefined__";
function H4(e10) {
  return this.__data__.set(e10, Z4), this;
}
var z4 = H4;
function U4(e10) {
  return this.__data__.has(e10);
}
var q4 = U4, K4 = ol, G4 = z4, Y4 = q4;
function ha(e10) {
  var t = -1, n = e10 == null ? 0 : e10.length;
  for (this.__data__ = new K4(); ++t < n; )
    this.add(e10[t]);
}
ha.prototype.add = ha.prototype.push = G4;
ha.prototype.has = Y4;
var X4 = ha;
function Q4(e10, t) {
  for (var n = -1, r = e10 == null ? 0 : e10.length; ++n < r; )
    if (t(e10[n], n, e10))
      return !0;
  return !1;
}
var J4 = Q4;
function eg(e10, t) {
  return e10.has(t);
}
var tg = eg, ng = X4, rg = J4, ig = tg, ag = 1, og = 2;
function sg(e10, t, n, r, i, a) {
  var o = n & ag, s = e10.length, c = t.length;
  if (s != c && !(o && c > s))
    return !1;
  var u = a.get(e10), d = a.get(t);
  if (u && d)
    return u == t && d == e10;
  var f = -1, m = !0, g = n & og ? new ng() : void 0;
  for (a.set(e10, t), a.set(t, e10); ++f < s; ) {
    var p = e10[f], h = t[f];
    if (r)
      var b = o ? r(h, p, f, t, e10, a) : r(p, h, f, e10, t, a);
    if (b !== void 0) {
      if (b)
        continue;
      m = !1;
      break;
    }
    if (g) {
      if (!rg(t, function(w, C) {
        if (!ig(g, C) && (p === w || i(p, w, n, r, a)))
          return g.push(C);
      })) {
        m = !1;
        break;
      }
    } else if (!(p === h || i(p, h, n, r, a))) {
      m = !1;
      break;
    }
  }
  return a.delete(e10), a.delete(t), m;
}
var ud = sg, lg = ht, cg = lg.Uint8Array, fd = cg;
function ug(e10) {
  var t = -1, n = Array(e10.size);
  return e10.forEach(function(r, i) {
    n[++t] = [i, r];
  }), n;
}
var fg = ug;
function dg(e10) {
  var t = -1, n = Array(e10.size);
  return e10.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var mg = dg, Sc = Qs, Fc = fd, hg = hi, pg = ud, vg = fg, gg = mg, yg = 1, bg = 2, wg = "[object Boolean]", Eg = "[object Date]", Cg = "[object Error]", $g = "[object Map]", xg = "[object Number]", _g = "[object RegExp]", kg = "[object Set]", Og = "[object String]", Sg = "[object Symbol]", Fg = "[object ArrayBuffer]", Pg = "[object DataView]", Pc = Sc ? Sc.prototype : void 0, ko = Pc ? Pc.valueOf : void 0;
function Ng(e10, t, n, r, i, a, o) {
  switch (n) {
    case Pg:
      if (e10.byteLength != t.byteLength || e10.byteOffset != t.byteOffset)
        return !1;
      e10 = e10.buffer, t = t.buffer;
    case Fg:
      return !(e10.byteLength != t.byteLength || !a(new Fc(e10), new Fc(t)));
    case wg:
    case Eg:
    case xg:
      return hg(+e10, +t);
    case Cg:
      return e10.name == t.name && e10.message == t.message;
    case _g:
    case Og:
      return e10 == t + "";
    case $g:
      var s = vg;
    case kg:
      var c = r & yg;
      if (s || (s = gg), e10.size != t.size && !c)
        return !1;
      var u = o.get(e10);
      if (u)
        return u == t;
      r |= bg, o.set(e10, t);
      var d = pg(s(e10), s(t), r, i, a, o);
      return o.delete(e10), d;
    case Sg:
      if (ko)
        return ko.call(e10) == ko.call(t);
  }
  return !1;
}
var Ag = Ng;
function Tg(e10, t) {
  for (var n = -1, r = t.length, i = e10.length; ++n < r; )
    e10[i + n] = t[n];
  return e10;
}
var Rg = Tg, Mg = Rg, Ig = Da;
function Lg(e10, t, n) {
  var r = t(e10);
  return Ig(e10) ? r : Mg(r, n(e10));
}
var Dg = Lg;
function Vg(e10, t) {
  for (var n = -1, r = e10 == null ? 0 : e10.length, i = 0, a = []; ++n < r; ) {
    var o = e10[n];
    t(o, n, e10) && (a[i++] = o);
  }
  return a;
}
var jg = Vg;
function Bg() {
  return [];
}
var Wg = Bg, Zg = jg, Hg = Wg, zg = Object.prototype, Ug = zg.propertyIsEnumerable, Nc = Object.getOwnPropertySymbols, qg = Nc ? function(e10) {
  return e10 == null ? [] : (e10 = Object(e10), Zg(Nc(e10), function(t) {
    return Ug.call(e10, t);
  }));
} : Hg, Kg = qg, Gg = Dg, Yg = Kg, Xg = nd;
function Qg(e10) {
  return Gg(e10, Xg, Yg);
}
var Jg = Qg, Ac = Jg, e5 = 1, t5 = Object.prototype, n5 = t5.hasOwnProperty;
function r5(e10, t, n, r, i, a) {
  var o = n & e5, s = Ac(e10), c = s.length, u = Ac(t), d = u.length;
  if (c != d && !o)
    return !1;
  for (var f = c; f--; ) {
    var m = s[f];
    if (!(o ? m in t : n5.call(t, m)))
      return !1;
  }
  var g = a.get(e10), p = a.get(t);
  if (g && p)
    return g == t && p == e10;
  var h = !0;
  a.set(e10, t), a.set(t, e10);
  for (var b = o; ++f < c; ) {
    m = s[f];
    var w = e10[m], C = t[m];
    if (r)
      var v = o ? r(C, w, m, t, e10, a) : r(w, C, m, e10, t, a);
    if (!(v === void 0 ? w === C || i(w, C, n, r, a) : v)) {
      h = !1;
      break;
    }
    b || (b = m == "constructor");
  }
  if (h && !b) {
    var y = e10.constructor, E = t.constructor;
    y != E && "constructor" in e10 && "constructor" in t && !(typeof y == "function" && y instanceof y && typeof E == "function" && E instanceof E) && (h = !1);
  }
  return a.delete(e10), a.delete(t), h;
}
var i5 = r5, a5 = An, o5 = ht, s5 = a5(o5, "DataView"), l5 = s5, c5 = An, u5 = ht, f5 = c5(u5, "Promise"), d5 = f5, m5 = An, h5 = ht, p5 = m5(h5, "Set"), v5 = p5, g5 = An, y5 = ht, b5 = g5(y5, "WeakMap"), w5 = b5, ns = l5, rs = al, is = d5, as = v5, os = w5, dd = lr, hr = zf, Tc = "[object Map]", E5 = "[object Object]", Rc = "[object Promise]", Mc = "[object Set]", Ic = "[object WeakMap]", Lc = "[object DataView]", C5 = hr(ns), $5 = hr(rs), x5 = hr(is), _5 = hr(as), k5 = hr(os), Cn = dd;
(ns && Cn(new ns(new ArrayBuffer(1))) != Lc || rs && Cn(new rs()) != Tc || is && Cn(is.resolve()) != Rc || as && Cn(new as()) != Mc || os && Cn(new os()) != Ic) && (Cn = function(e10) {
  var t = dd(e10), n = t == E5 ? e10.constructor : void 0, r = n ? hr(n) : "";
  if (r)
    switch (r) {
      case C5:
        return Lc;
      case $5:
        return Tc;
      case x5:
        return Rc;
      case _5:
        return Mc;
      case k5:
        return Ic;
    }
  return t;
});
var O5 = Cn, Oo = cd, S5 = ud, F5 = Ag, P5 = i5, Dc = O5, Vc = Da, jc = Xr.exports, N5 = tl, A5 = 1, Bc = "[object Arguments]", Wc = "[object Array]", Hi = "[object Object]", T5 = Object.prototype, Zc = T5.hasOwnProperty;
function R5(e10, t, n, r, i, a) {
  var o = Vc(e10), s = Vc(t), c = o ? Wc : Dc(e10), u = s ? Wc : Dc(t);
  c = c == Bc ? Hi : c, u = u == Bc ? Hi : u;
  var d = c == Hi, f = u == Hi, m = c == u;
  if (m && jc(e10)) {
    if (!jc(t))
      return !1;
    o = !0, d = !1;
  }
  if (m && !d)
    return a || (a = new Oo()), o || N5(e10) ? S5(e10, t, n, r, i, a) : F5(e10, t, c, n, r, i, a);
  if (!(n & A5)) {
    var g = d && Zc.call(e10, "__wrapped__"), p = f && Zc.call(t, "__wrapped__");
    if (g || p) {
      var h = g ? e10.value() : e10, b = p ? t.value() : t;
      return a || (a = new Oo()), i(h, b, n, r, a);
    }
  }
  return m ? (a || (a = new Oo()), P5(e10, t, n, r, i, a)) : !1;
}
var M5 = R5, I5 = M5, Hc = Tn;
function md(e10, t, n, r, i) {
  return e10 === t ? !0 : e10 == null || t == null || !Hc(e10) && !Hc(t) ? e10 !== e10 && t !== t : I5(e10, t, n, r, md, i);
}
var L5 = md, D5 = L5;
function V5(e10, t) {
  return D5(e10, t);
}
var j5 = V5;
(function() {
  if (typeof window != "object")
    return;
  if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
    "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(
      window.IntersectionObserverEntry.prototype,
      "isIntersecting",
      {
        get: function() {
          return this.intersectionRatio > 0;
        }
      }
    );
    return;
  }
  function e10(v) {
    try {
      return v.defaultView && v.defaultView.frameElement || null;
    } catch {
      return null;
    }
  }
  var t = function(v) {
    for (var y = v, E = e10(y); E; )
      y = E.ownerDocument, E = e10(y);
    return y;
  }(window.document), n = [], r = null, i = null;
  function a(v) {
    this.time = v.time, this.target = v.target, this.rootBounds = p(v.rootBounds), this.boundingClientRect = p(v.boundingClientRect), this.intersectionRect = p(v.intersectionRect || g()), this.isIntersecting = !!v.intersectionRect;
    var y = this.boundingClientRect, E = y.width * y.height, $ = this.intersectionRect, k = $.width * $.height;
    E ? this.intersectionRatio = Number((k / E).toFixed(4)) : this.intersectionRatio = this.isIntersecting ? 1 : 0;
  }
  function o(v, y) {
    var E = y || {};
    if (typeof v != "function")
      throw new Error("callback must be a function");
    if (E.root && E.root.nodeType != 1 && E.root.nodeType != 9)
      throw new Error("root must be a Document or Element");
    this._checkForIntersections = c(
      this._checkForIntersections.bind(this),
      this.THROTTLE_TIMEOUT
    ), this._callback = v, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(E.rootMargin), this.thresholds = this._initThresholds(E.threshold), this.root = E.root || null, this.rootMargin = this._rootMarginValues.map(function($) {
      return $.value + $.unit;
    }).join(" "), this._monitoringDocuments = [], this._monitoringUnsubscribes = [];
  }
  o.prototype.THROTTLE_TIMEOUT = 100, o.prototype.POLL_INTERVAL = null, o.prototype.USE_MUTATION_OBSERVER = !0, o._setupCrossOriginUpdater = function() {
    return r || (r = function(v, y) {
      !v || !y ? i = g() : i = h(v, y), n.forEach(function(E) {
        E._checkForIntersections();
      });
    }), r;
  }, o._resetCrossOriginUpdater = function() {
    r = null, i = null;
  }, o.prototype.observe = function(v) {
    var y = this._observationTargets.some(function(E) {
      return E.element == v;
    });
    if (!y) {
      if (!(v && v.nodeType == 1))
        throw new Error("target must be an Element");
      this._registerInstance(), this._observationTargets.push({ element: v, entry: null }), this._monitorIntersections(v.ownerDocument), this._checkForIntersections();
    }
  }, o.prototype.unobserve = function(v) {
    this._observationTargets = this._observationTargets.filter(function(y) {
      return y.element != v;
    }), this._unmonitorIntersections(v.ownerDocument), this._observationTargets.length == 0 && this._unregisterInstance();
  }, o.prototype.disconnect = function() {
    this._observationTargets = [], this._unmonitorAllIntersections(), this._unregisterInstance();
  }, o.prototype.takeRecords = function() {
    var v = this._queuedEntries.slice();
    return this._queuedEntries = [], v;
  }, o.prototype._initThresholds = function(v) {
    var y = v || [0];
    return Array.isArray(y) || (y = [y]), y.sort().filter(function(E, $, k) {
      if (typeof E != "number" || isNaN(E) || E < 0 || E > 1)
        throw new Error("threshold must be a number between 0 and 1 inclusively");
      return E !== k[$ - 1];
    });
  }, o.prototype._parseRootMargin = function(v) {
    var y = v || "0px", E = y.split(/\s+/).map(function($) {
      var k = /^(-?\d*\.?\d+)(px|%)$/.exec($);
      if (!k)
        throw new Error("rootMargin must be specified in pixels or percent");
      return { value: parseFloat(k[1]), unit: k[2] };
    });
    return E[1] = E[1] || E[0], E[2] = E[2] || E[0], E[3] = E[3] || E[1], E;
  }, o.prototype._monitorIntersections = function(v) {
    var y = v.defaultView;
    if (!!y && this._monitoringDocuments.indexOf(v) == -1) {
      var E = this._checkForIntersections, $ = null, k = null;
      this.POLL_INTERVAL ? $ = y.setInterval(E, this.POLL_INTERVAL) : (u(y, "resize", E, !0), u(v, "scroll", E, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in y && (k = new y.MutationObserver(E), k.observe(v, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }))), this._monitoringDocuments.push(v), this._monitoringUnsubscribes.push(function() {
        var N = v.defaultView;
        N && ($ && N.clearInterval($), d(N, "resize", E, !0)), d(v, "scroll", E, !0), k && k.disconnect();
      });
      var A = this.root && (this.root.ownerDocument || this.root) || t;
      if (v != A) {
        var P = e10(v);
        P && this._monitorIntersections(P.ownerDocument);
      }
    }
  }, o.prototype._unmonitorIntersections = function(v) {
    var y = this._monitoringDocuments.indexOf(v);
    if (y != -1) {
      var E = this.root && (this.root.ownerDocument || this.root) || t, $ = this._observationTargets.some(function(P) {
        var N = P.element.ownerDocument;
        if (N == v)
          return !0;
        for (; N && N != E; ) {
          var T = e10(N);
          if (N = T && T.ownerDocument, N == v)
            return !0;
        }
        return !1;
      });
      if (!$) {
        var k = this._monitoringUnsubscribes[y];
        if (this._monitoringDocuments.splice(y, 1), this._monitoringUnsubscribes.splice(y, 1), k(), v != E) {
          var A = e10(v);
          A && this._unmonitorIntersections(A.ownerDocument);
        }
      }
    }
  }, o.prototype._unmonitorAllIntersections = function() {
    var v = this._monitoringUnsubscribes.slice(0);
    this._monitoringDocuments.length = 0, this._monitoringUnsubscribes.length = 0;
    for (var y = 0; y < v.length; y++)
      v[y]();
  }, o.prototype._checkForIntersections = function() {
    if (!(!this.root && r && !i)) {
      var v = this._rootIsInDom(), y = v ? this._getRootRect() : g();
      this._observationTargets.forEach(function(E) {
        var $ = E.element, k = m($), A = this._rootContainsTarget($), P = E.entry, N = v && A && this._computeTargetAndRootIntersection($, k, y), T = null;
        this._rootContainsTarget($) ? (!r || this.root) && (T = y) : T = g();
        var O = E.entry = new a({
          time: s(),
          target: $,
          boundingClientRect: k,
          rootBounds: T,
          intersectionRect: N
        });
        P ? v && A ? this._hasCrossedThreshold(P, O) && this._queuedEntries.push(O) : P && P.isIntersecting && this._queuedEntries.push(O) : this._queuedEntries.push(O);
      }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this);
    }
  }, o.prototype._computeTargetAndRootIntersection = function(v, y, E) {
    if (window.getComputedStyle(v).display != "none") {
      for (var $ = y, k = w(v), A = !1; !A && k; ) {
        var P = null, N = k.nodeType == 1 ? window.getComputedStyle(k) : {};
        if (N.display == "none")
          return null;
        if (k == this.root || k.nodeType == 9)
          if (A = !0, k == this.root || k == t)
            r && !this.root ? !i || i.width == 0 && i.height == 0 ? (k = null, P = null, $ = null) : P = i : P = E;
          else {
            var T = w(k), O = T && m(T), _ = T && this._computeTargetAndRootIntersection(T, O, E);
            O && _ ? (k = T, P = h(O, _)) : (k = null, $ = null);
          }
        else {
          var x = k.ownerDocument;
          k != x.body && k != x.documentElement && N.overflow != "visible" && (P = m(k));
        }
        if (P && ($ = f(P, $)), !$)
          break;
        k = k && w(k);
      }
      return $;
    }
  }, o.prototype._getRootRect = function() {
    var v;
    if (this.root && !C(this.root))
      v = m(this.root);
    else {
      var y = C(this.root) ? this.root : t, E = y.documentElement, $ = y.body;
      v = {
        top: 0,
        left: 0,
        right: E.clientWidth || $.clientWidth,
        width: E.clientWidth || $.clientWidth,
        bottom: E.clientHeight || $.clientHeight,
        height: E.clientHeight || $.clientHeight
      };
    }
    return this._expandRectByRootMargin(v);
  }, o.prototype._expandRectByRootMargin = function(v) {
    var y = this._rootMarginValues.map(function($, k) {
      return $.unit == "px" ? $.value : $.value * (k % 2 ? v.width : v.height) / 100;
    }), E = {
      top: v.top - y[0],
      right: v.right + y[1],
      bottom: v.bottom + y[2],
      left: v.left - y[3]
    };
    return E.width = E.right - E.left, E.height = E.bottom - E.top, E;
  }, o.prototype._hasCrossedThreshold = function(v, y) {
    var E = v && v.isIntersecting ? v.intersectionRatio || 0 : -1, $ = y.isIntersecting ? y.intersectionRatio || 0 : -1;
    if (E !== $)
      for (var k = 0; k < this.thresholds.length; k++) {
        var A = this.thresholds[k];
        if (A == E || A == $ || A < E != A < $)
          return !0;
      }
  }, o.prototype._rootIsInDom = function() {
    return !this.root || b(t, this.root);
  }, o.prototype._rootContainsTarget = function(v) {
    var y = this.root && (this.root.ownerDocument || this.root) || t;
    return b(y, v) && (!this.root || y == v.ownerDocument);
  }, o.prototype._registerInstance = function() {
    n.indexOf(this) < 0 && n.push(this);
  }, o.prototype._unregisterInstance = function() {
    var v = n.indexOf(this);
    v != -1 && n.splice(v, 1);
  };
  function s() {
    return window.performance && performance.now && performance.now();
  }
  function c(v, y) {
    var E = null;
    return function() {
      E || (E = setTimeout(function() {
        v(), E = null;
      }, y));
    };
  }
  function u(v, y, E, $) {
    typeof v.addEventListener == "function" ? v.addEventListener(y, E, $ || !1) : typeof v.attachEvent == "function" && v.attachEvent("on" + y, E);
  }
  function d(v, y, E, $) {
    typeof v.removeEventListener == "function" ? v.removeEventListener(y, E, $ || !1) : typeof v.detachEvent == "function" && v.detachEvent("on" + y, E);
  }
  function f(v, y) {
    var E = Math.max(v.top, y.top), $ = Math.min(v.bottom, y.bottom), k = Math.max(v.left, y.left), A = Math.min(v.right, y.right), P = A - k, N = $ - E;
    return P >= 0 && N >= 0 && {
      top: E,
      bottom: $,
      left: k,
      right: A,
      width: P,
      height: N
    } || null;
  }
  function m(v) {
    var y;
    try {
      y = v.getBoundingClientRect();
    } catch {
    }
    return y ? (y.width && y.height || (y = {
      top: y.top,
      right: y.right,
      bottom: y.bottom,
      left: y.left,
      width: y.right - y.left,
      height: y.bottom - y.top
    }), y) : g();
  }
  function g() {
    return {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }
  function p(v) {
    return !v || "x" in v ? v : {
      top: v.top,
      y: v.top,
      bottom: v.bottom,
      left: v.left,
      x: v.left,
      right: v.right,
      width: v.width,
      height: v.height
    };
  }
  function h(v, y) {
    var E = y.top - v.top, $ = y.left - v.left;
    return {
      top: E,
      left: $,
      height: y.height,
      width: y.width,
      bottom: E + y.height,
      right: $ + y.width
    };
  }
  function b(v, y) {
    for (var E = y; E; ) {
      if (E == v)
        return !0;
      E = w(E);
    }
    return !1;
  }
  function w(v) {
    var y = v.parentNode;
    return v.nodeType == 9 && v != t ? e10(v) : (y && y.assignedSlot && (y = y.assignedSlot.parentNode), y && y.nodeType == 11 && y.host ? y.host : y);
  }
  function C(v) {
    return v && v.nodeType === 9;
  }
  window.IntersectionObserver = o, window.IntersectionObserverEntry = a;
})();
function B5(e10, t) {
  let [n, r] = (0, import_react2.useState)(), [i, a] = (0, import_react2.useState)();
  return il(() => {
    let o = On(e10);
    if (!o)
      return;
    let s = new IntersectionObserver((c) => {
      for (let u of c)
        a(u.intersectionRatio), r(u.isIntersecting);
    }, Object.assign(Object.assign({}, t), {
      root: On(t == null ? void 0 : t.root)
    }));
    return s.observe(o), () => {
      s.disconnect();
    };
  }, [t == null ? void 0 : t.rootMargin, t == null ? void 0 : t.threshold], e10), [n, i];
}
var W5 = rl ? import_react2.useLayoutEffect : import_react2.useEffect, Ce = W5;
function H5(e10) {
  let t = (0, import_react2.useRef)(0), [n, r] = (0, import_react2.useState)(e10), i = (0, import_react2.useCallback)((a) => {
    cancelAnimationFrame(t.current), t.current = requestAnimationFrame(() => {
      r(a);
    });
  }, []);
  return gi(() => {
    cancelAnimationFrame(t.current);
  }), [n, i];
}
var z5 = () => {
  let e10 = (0, import_react2.useRef)(!1);
  return (0, import_react2.useEffect)(() => (e10.current = !1, () => {
    e10.current = !0;
  }), []), e10;
}, sl = z5, hd = function() {
  if (typeof Map < "u")
    return Map;
  function e10(t, n) {
    var r = -1;
    return t.some(function(i, a) {
      return i[0] === n ? (r = a, !0) : !1;
    }), r;
  }
  return function() {
    function t() {
      this.__entries__ = [];
    }
    return Object.defineProperty(t.prototype, "size", {
      get: function() {
        return this.__entries__.length;
      },
      enumerable: !0,
      configurable: !0
    }), t.prototype.get = function(n) {
      var r = e10(this.__entries__, n), i = this.__entries__[r];
      return i && i[1];
    }, t.prototype.set = function(n, r) {
      var i = e10(this.__entries__, n);
      ~i ? this.__entries__[i][1] = r : this.__entries__.push([n, r]);
    }, t.prototype.delete = function(n) {
      var r = this.__entries__, i = e10(r, n);
      ~i && r.splice(i, 1);
    }, t.prototype.has = function(n) {
      return !!~e10(this.__entries__, n);
    }, t.prototype.clear = function() {
      this.__entries__.splice(0);
    }, t.prototype.forEach = function(n, r) {
      r === void 0 && (r = null);
      for (var i = 0, a = this.__entries__; i < a.length; i++) {
        var o = a[i];
        n.call(r, o[1], o[0]);
      }
    }, t;
  }();
}(), ss = typeof window < "u" && typeof document < "u" && window.document === document, pa = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), U5 = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(pa) : function(e10) {
    return setTimeout(function() {
      return e10(Date.now());
    }, 1e3 / 60);
  };
}(), q5 = 2;
function K5(e10, t) {
  var n = !1, r = !1, i = 0;
  function a() {
    n && (n = !1, e10()), r && s();
  }
  function o() {
    U5(a);
  }
  function s() {
    var c = Date.now();
    if (n) {
      if (c - i < q5)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(o, t);
    i = c;
  }
  return s;
}
var G5 = 20, Y5 = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], X5 = typeof MutationObserver < "u", Q5 = function() {
  function e10() {
    this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = K5(this.refresh.bind(this), G5);
  }
  return e10.prototype.addObserver = function(t) {
    ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
  }, e10.prototype.removeObserver = function(t) {
    var n = this.observers_, r = n.indexOf(t);
    ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
  }, e10.prototype.refresh = function() {
    var t = this.updateObservers_();
    t && this.refresh();
  }, e10.prototype.updateObservers_ = function() {
    var t = this.observers_.filter(function(n) {
      return n.gatherActive(), n.hasActive();
    });
    return t.forEach(function(n) {
      return n.broadcastActive();
    }), t.length > 0;
  }, e10.prototype.connect_ = function() {
    !ss || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), X5 ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
      attributes: !0,
      childList: !0,
      characterData: !0,
      subtree: !0
    })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
  }, e10.prototype.disconnect_ = function() {
    !ss || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
  }, e10.prototype.onTransitionEnd_ = function(t) {
    var n = t.propertyName, r = n === void 0 ? "" : n, i = Y5.some(function(a) {
      return !!~r.indexOf(a);
    });
    i && this.refresh();
  }, e10.getInstance = function() {
    return this.instance_ || (this.instance_ = new e10()), this.instance_;
  }, e10.instance_ = null, e10;
}(), pd = function(e10, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var i = r[n];
    Object.defineProperty(e10, i, {
      value: t[i],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e10;
}, tr = function(e10) {
  var t = e10 && e10.ownerDocument && e10.ownerDocument.defaultView;
  return t || pa;
}, vd = Ha(0, 0, 0, 0);
function va(e10) {
  return parseFloat(e10) || 0;
}
function zc(e10) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, i) {
    var a = e10["border-" + i + "-width"];
    return r + va(a);
  }, 0);
}
function J5(e10) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, i = t; r < i.length; r++) {
    var a = i[r], o = e10["padding-" + a];
    n[a] = va(o);
  }
  return n;
}
function e6(e10) {
  var t = e10.getBBox();
  return Ha(0, 0, t.width, t.height);
}
function t6(e10) {
  var t = e10.clientWidth, n = e10.clientHeight;
  if (!t && !n)
    return vd;
  var r = tr(e10).getComputedStyle(e10), i = J5(r), a = i.left + i.right, o = i.top + i.bottom, s = va(r.width), c = va(r.height);
  if (r.boxSizing === "border-box" && (Math.round(s + a) !== t && (s -= zc(r, "left", "right") + a), Math.round(c + o) !== n && (c -= zc(r, "top", "bottom") + o)), !r6(e10)) {
    var u = Math.round(s + a) - t, d = Math.round(c + o) - n;
    Math.abs(u) !== 1 && (s -= u), Math.abs(d) !== 1 && (c -= d);
  }
  return Ha(i.left, i.top, s, c);
}
var n6 = function() {
  return typeof SVGGraphicsElement < "u" ? function(e10) {
    return e10 instanceof tr(e10).SVGGraphicsElement;
  } : function(e10) {
    return e10 instanceof tr(e10).SVGElement && typeof e10.getBBox == "function";
  };
}();
function r6(e10) {
  return e10 === tr(e10).document.documentElement;
}
function i6(e10) {
  return ss ? n6(e10) ? e6(e10) : t6(e10) : vd;
}
function a6(e10) {
  var t = e10.x, n = e10.y, r = e10.width, i = e10.height, a = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, o = Object.create(a.prototype);
  return pd(o, {
    x: t,
    y: n,
    width: r,
    height: i,
    top: n,
    right: t + r,
    bottom: i + n,
    left: t
  }), o;
}
function Ha(e10, t, n, r) {
  return { x: e10, y: t, width: n, height: r };
}
var o6 = function() {
  function e10(t) {
    this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ha(0, 0, 0, 0), this.target = t;
  }
  return e10.prototype.isActive = function() {
    var t = i6(this.target);
    return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
  }, e10.prototype.broadcastRect = function() {
    var t = this.contentRect_;
    return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
  }, e10;
}(), s6 = function() {
  function e10(t, n) {
    var r = a6(n);
    pd(this, { target: t, contentRect: r });
  }
  return e10;
}(), l6 = function() {
  function e10(t, n, r) {
    if (this.activeObservations_ = [], this.observations_ = new hd(), typeof t != "function")
      throw new TypeError("The callback provided as parameter 1 is not a function.");
    this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
  }
  return e10.prototype.observe = function(t) {
    if (!arguments.length)
      throw new TypeError("1 argument required, but only 0 present.");
    if (!(typeof Element > "u" || !(Element instanceof Object))) {
      if (!(t instanceof tr(t).Element))
        throw new TypeError('parameter 1 is not of type "Element".');
      var n = this.observations_;
      n.has(t) || (n.set(t, new o6(t)), this.controller_.addObserver(this), this.controller_.refresh());
    }
  }, e10.prototype.unobserve = function(t) {
    if (!arguments.length)
      throw new TypeError("1 argument required, but only 0 present.");
    if (!(typeof Element > "u" || !(Element instanceof Object))) {
      if (!(t instanceof tr(t).Element))
        throw new TypeError('parameter 1 is not of type "Element".');
      var n = this.observations_;
      !n.has(t) || (n.delete(t), n.size || this.controller_.removeObserver(this));
    }
  }, e10.prototype.disconnect = function() {
    this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
  }, e10.prototype.gatherActive = function() {
    var t = this;
    this.clearActive(), this.observations_.forEach(function(n) {
      n.isActive() && t.activeObservations_.push(n);
    });
  }, e10.prototype.broadcastActive = function() {
    if (this.hasActive()) {
      var t = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
        return new s6(r.target, r.broadcastRect());
      });
      this.callback_.call(t, n, t), this.clearActive();
    }
  }, e10.prototype.clearActive = function() {
    this.activeObservations_.splice(0);
  }, e10.prototype.hasActive = function() {
    return this.activeObservations_.length > 0;
  }, e10;
}(), gd = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new hd(), yd = function() {
  function e10(t) {
    if (!(this instanceof e10))
      throw new TypeError("Cannot call a class as a function.");
    if (!arguments.length)
      throw new TypeError("1 argument required, but only 0 present.");
    var n = Q5.getInstance(), r = new l6(t, n, this);
    gd.set(this, r);
  }
  return e10;
}();
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e10) {
  yd.prototype[e10] = function() {
    var t;
    return (t = gd.get(this))[e10].apply(t, arguments);
  };
});
var c6 = function() {
  return typeof pa.ResizeObserver < "u" ? pa.ResizeObserver : yd;
}(), u6 = od(import_react2.useLayoutEffect), f6 = u6, d6 = rl ? f6 : il, m6 = d6;
function ls(e10) {
  let [t, n] = H5();
  return m6(() => {
    let r = On(e10);
    if (!r)
      return;
    let i = new c6((a) => {
      a.forEach((o) => {
        let {
          clientWidth: s,
          clientHeight: c
        } = o.target;
        n({
          width: s,
          height: c
        });
      });
    });
    return i.observe(r), () => {
      i.disconnect();
    };
  }, [], e10), t;
}
function za(e10, t) {
  var n;
  pi && (cr(e10) || console.error(`useThrottleFn expected parameter is a function, got ${typeof e10}`));
  let r = vi(e10), i = (n = t == null ? void 0 : t.wait) !== null && n !== void 0 ? n : 1e3, a = (0, import_react2.useMemo)(() => j3((...o) => r.current(...o), i, t), []);
  return gi(() => {
    a.cancel();
  }), {
    run: a,
    cancel: a.cancel,
    flush: a.flush
  };
}
function h6(e10, t) {
  let n = vi(e10), r = (0, import_react2.useRef)(null);
  return (0, import_react2.useEffect)(() => {
    if (!(!i3(t) || t < 0))
      return r.current = setTimeout(() => {
        n.current();
      }, t), () => {
        r.current && clearTimeout(r.current);
      };
  }, [t]), (0, import_react2.useCallback)(() => {
    r.current && clearTimeout(r.current);
  }, []);
}
var Uc = 10;
function p6(e10, t) {
  return e10 > t && e10 > Uc ? "horizontal" : t > e10 && t > Uc ? "vertical" : "";
}
function v6() {
  let e10 = (0, import_react2.useRef)(0), t = (0, import_react2.useRef)(0), n = (0, import_react2.useRef)(0), r = (0, import_react2.useRef)(0), i = (0, import_react2.useRef)(0), a = (0, import_react2.useRef)(0), o = (0, import_react2.useRef)(""), s = () => o.current === "vertical", c = () => o.current === "horizontal", u = () => {
    n.current = 0, r.current = 0, i.current = 0, a.current = 0, o.current = "";
  };
  return {
    move: (m) => {
      let g = m.touches[0];
      n.current = g.clientX < 0 ? 0 : g.clientX - e10.current, r.current = g.clientY - t.current, i.current = Math.abs(n.current), a.current = Math.abs(r.current), o.current || (o.current = p6(i.current, a.current));
    },
    start: (m) => {
      u(), e10.current = m.touches[0].clientX, t.current = m.touches[0].clientY;
    },
    reset: u,
    startX: e10,
    startY: t,
    deltaX: n,
    deltaY: r,
    offsetX: i,
    offsetY: a,
    direction: o,
    isVertical: s,
    isHorizontal: c
  };
}
var g6 = sr ? window : void 0, y6 = ["scroll", "auto", "overlay"];
function b6(e10) {
  return e10.nodeType === 1;
}
function ga(e10, t = g6) {
  let n = e10;
  for (; n && n !== t && b6(n); ) {
    if (n === document.body)
      return t;
    let {
      overflowY: r
    } = window.getComputedStyle(n);
    if (y6.includes(r) && n.scrollHeight > n.clientHeight)
      return n;
    n = n.parentNode;
  }
  return t;
}
var yi = !1;
if (sr)
  try {
    let e10 = {};
    Object.defineProperty(e10, "passive", {
      get() {
        yi = !0;
      }
    }), window.addEventListener("test-passive", null, e10);
  } catch {
  }
var kr = 0, qc = "adm-overflow-hidden";
function w6(e10) {
  let t = e10 == null ? void 0 : e10.parentElement;
  for (; t; ) {
    if (t.clientHeight < t.scrollHeight)
      return t;
    t = t.parentElement;
  }
  return null;
}
function Ua(e10, t) {
  let n = v6(), r = (o) => {
    n.move(o);
    let s = n.deltaY.current > 0 ? "10" : "01", c = ga(o.target, e10.current);
    if (!c)
      return;
    if (t === "strict") {
      let g = w6(o.target);
      if (g === document.body || g === document.documentElement) {
        o.preventDefault();
        return;
      }
    }
    let {
      scrollHeight: u,
      offsetHeight: d,
      scrollTop: f
    } = c, m = "11";
    f === 0 ? m = d >= u ? "00" : "01" : f + d >= u && (m = "10"), m !== "11" && n.isVertical() && !(parseInt(m, 2) & parseInt(s, 2)) && o.cancelable && o.preventDefault();
  }, i = () => {
    document.addEventListener("touchstart", n.start), document.addEventListener("touchmove", r, yi ? {
      passive: !1
    } : !1), kr || document.body.classList.add(qc), kr++;
  }, a = () => {
    kr && (document.removeEventListener("touchstart", n.start), document.removeEventListener("touchmove", r), kr--, kr || document.body.classList.remove(qc));
  };
  (0, import_react2.useEffect)(() => {
    if (t)
      return i(), () => {
        a();
      };
  }, [t]);
}
var ll = wi(), Y = (e10) => bi(e10, ll), cl = wi();
Y.write = (e10) => bi(e10, cl);
var qa = wi();
Y.onStart = (e10) => bi(e10, qa);
var ul = wi();
Y.onFrame = (e10) => bi(e10, ul);
var fl = wi();
Y.onFinish = (e10) => bi(e10, fl);
var Xn = [];
Y.setTimeout = (e10, t) => {
  let n = Y.now() + t, r = () => {
    let a = Xn.findIndex((o) => o.cancel == r);
    ~a && Xn.splice(a, 1), Yt -= ~a ? 1 : 0;
  }, i = {
    time: n,
    handler: e10,
    cancel: r
  };
  return Xn.splice(bd(n), 0, i), Yt += 1, wd(), i;
};
var bd = (e10) => ~(~Xn.findIndex((t) => t.time > e10) || ~Xn.length);
Y.cancel = (e10) => {
  qa.delete(e10), ul.delete(e10), fl.delete(e10), ll.delete(e10), cl.delete(e10);
};
Y.sync = (e10) => {
  cs = !0, Y.batchedUpdates(e10), cs = !1;
};
Y.throttle = (e10) => {
  let t;
  function n() {
    try {
      e10(...t);
    } finally {
      t = null;
    }
  }
  function r(...i) {
    t = i, Y.onStart(n);
  }
  return r.handler = e10, r.cancel = () => {
    qa.delete(n), t = null;
  }, r;
};
var dl = typeof window < "u" ? window.requestAnimationFrame : () => {
};
Y.use = (e10) => dl = e10;
Y.now = typeof performance < "u" ? () => performance.now() : Date.now;
Y.batchedUpdates = (e10) => e10();
Y.catch = console.error;
Y.frameLoop = "always";
Y.advance = () => {
  Y.frameLoop !== "demand" ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Cd();
};
var Gt = -1, Yt = 0, cs = !1;
function bi(e10, t) {
  cs ? (t.delete(e10), e10(0)) : (t.add(e10), wd());
}
function wd() {
  Gt < 0 && (Gt = 0, Y.frameLoop !== "demand" && dl(Ed));
}
function E6() {
  Gt = -1;
}
function Ed() {
  ~Gt && (dl(Ed), Y.batchedUpdates(Cd));
}
function Cd() {
  let e10 = Gt;
  Gt = Y.now();
  let t = bd(Gt);
  if (t && ($d(Xn.splice(0, t), (n) => n.handler()), Yt -= t), !Yt) {
    E6();
    return;
  }
  qa.flush(), ll.flush(e10 ? Math.min(64, Gt - e10) : 16.667), ul.flush(), cl.flush(), fl.flush();
}
function wi() {
  let e10 = /* @__PURE__ */ new Set(), t = e10;
  return {
    add(n) {
      Yt += t == e10 && !e10.has(n) ? 1 : 0, e10.add(n);
    },
    delete(n) {
      return Yt -= t == e10 && e10.has(n) ? 1 : 0, e10.delete(n);
    },
    flush(n) {
      t.size && (e10 = /* @__PURE__ */ new Set(), Yt -= t.size, $d(t, (r) => r(n) && e10.add(r)), Yt += e10.size, t = e10);
    }
  };
}
function $d(e10, t) {
  e10.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      Y.catch(r);
    }
  });
}
function us() {
}
var C6 = (e10, t, n) => Object.defineProperty(e10, t, {
  value: n,
  writable: !0,
  configurable: !0
}), B = {
  arr: Array.isArray,
  obj: (e10) => !!e10 && e10.constructor.name === "Object",
  fun: (e10) => typeof e10 == "function",
  str: (e10) => typeof e10 == "string",
  num: (e10) => typeof e10 == "number",
  und: (e10) => e10 === void 0
};
function Rt(e10, t) {
  if (B.arr(e10)) {
    if (!B.arr(t) || e10.length !== t.length)
      return !1;
    for (let n = 0; n < e10.length; n++)
      if (e10[n] !== t[n])
        return !1;
    return !0;
  }
  return e10 === t;
}
var J = (e10, t) => e10.forEach(t);
function xt(e10, t, n) {
  if (B.arr(e10)) {
    for (let r = 0; r < e10.length; r++)
      t.call(n, e10[r], `${r}`);
    return;
  }
  for (let r in e10)
    e10.hasOwnProperty(r) && t.call(n, e10[r], r);
}
var Ke = (e10) => B.und(e10) ? [] : B.arr(e10) ? e10 : [e10];
function Wr(e10, t) {
  if (e10.size) {
    let n = Array.from(e10);
    e10.clear(), J(n, t);
  }
}
var jr = (e10, ...t) => Wr(e10, (n) => n(...t)), ml = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), hl, xd, Jt = null, _d = !1, pl = us, $6 = (e10) => {
  e10.to && (xd = e10.to), e10.now && (Y.now = e10.now), e10.colors !== void 0 && (Jt = e10.colors), e10.skipAnimation != null && (_d = e10.skipAnimation), e10.createStringInterpolator && (hl = e10.createStringInterpolator), e10.requestAnimationFrame && Y.use(e10.requestAnimationFrame), e10.batchedUpdates && (Y.batchedUpdates = e10.batchedUpdates), e10.willAdvance && (pl = e10.willAdvance), e10.frameLoop && (Y.frameLoop = e10.frameLoop);
}, lt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  get createStringInterpolator() {
    return hl;
  },
  get to() {
    return xd;
  },
  get colors() {
    return Jt;
  },
  get skipAnimation() {
    return _d;
  },
  get willAdvance() {
    return pl;
  },
  assign: $6
}), Zr = /* @__PURE__ */ new Set(), at = [], So = [], ya = 0, Ka = {
  get idle() {
    return !Zr.size && !at.length;
  },
  start(e10) {
    ya > e10.priority ? (Zr.add(e10), Y.onStart(x6)) : (kd(e10), Y(fs));
  },
  advance: fs,
  sort(e10) {
    if (ya)
      Y.onFrame(() => Ka.sort(e10));
    else {
      let t = at.indexOf(e10);
      ~t && (at.splice(t, 1), Od(e10));
    }
  },
  clear() {
    at = [], Zr.clear();
  }
};
function x6() {
  Zr.forEach(kd), Zr.clear(), Y(fs);
}
function kd(e10) {
  at.includes(e10) || Od(e10);
}
function Od(e10) {
  at.splice(_6(at, (t) => t.priority > e10.priority), 0, e10);
}
function fs(e10) {
  let t = So;
  for (let n = 0; n < at.length; n++) {
    let r = at[n];
    ya = r.priority, r.idle || (pl(r), r.advance(e10), r.idle || t.push(r));
  }
  return ya = 0, So = at, So.length = 0, at = t, at.length > 0;
}
function _6(e10, t) {
  let n = e10.findIndex(t);
  return n < 0 ? e10.length : n;
}
var k6 = (e10, t, n) => Math.min(Math.max(n, e10), t), O6 = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
}, dt = "[-+]?\\d*\\.?\\d+", ba = dt + "%";
function Ga(...e10) {
  return "\\(\\s*(" + e10.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var S6 = new RegExp("rgb" + Ga(dt, dt, dt)), F6 = new RegExp("rgba" + Ga(dt, dt, dt, dt)), P6 = new RegExp("hsl" + Ga(dt, ba, ba)), N6 = new RegExp("hsla" + Ga(dt, ba, ba, dt)), A6 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, T6 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, R6 = /^#([0-9a-fA-F]{6})$/, M6 = /^#([0-9a-fA-F]{8})$/;
function I6(e10) {
  let t;
  return typeof e10 == "number" ? e10 >>> 0 === e10 && e10 >= 0 && e10 <= 4294967295 ? e10 : null : (t = R6.exec(e10)) ? parseInt(t[1] + "ff", 16) >>> 0 : Jt && Jt[e10] !== void 0 ? Jt[e10] : (t = S6.exec(e10)) ? (Mn(t[1]) << 24 | Mn(t[2]) << 16 | Mn(t[3]) << 8 | 255) >>> 0 : (t = F6.exec(e10)) ? (Mn(t[1]) << 24 | Mn(t[2]) << 16 | Mn(t[3]) << 8 | Yc(t[4])) >>> 0 : (t = A6.exec(e10)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = M6.exec(e10)) ? parseInt(t[1], 16) >>> 0 : (t = T6.exec(e10)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = P6.exec(e10)) ? (Kc(Gc(t[1]), zi(t[2]), zi(t[3])) | 255) >>> 0 : (t = N6.exec(e10)) ? (Kc(Gc(t[1]), zi(t[2]), zi(t[3])) | Yc(t[4])) >>> 0 : null;
}
function Fo(e10, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e10 + (t - e10) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e10 + (t - e10) * (2 / 3 - n) * 6 : e10;
}
function Kc(e10, t, n) {
  let r = n < 0.5 ? n * (1 + t) : n + t - n * t, i = 2 * n - r, a = Fo(i, r, e10 + 1 / 3), o = Fo(i, r, e10), s = Fo(i, r, e10 - 1 / 3);
  return Math.round(a * 255) << 24 | Math.round(o * 255) << 16 | Math.round(s * 255) << 8;
}
function Mn(e10) {
  let t = parseInt(e10, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Gc(e10) {
  return (parseFloat(e10) % 360 + 360) % 360 / 360;
}
function Yc(e10) {
  let t = parseFloat(e10);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function zi(e10) {
  let t = parseFloat(e10);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Xc(e10) {
  let t = I6(e10);
  if (t === null)
    return e10;
  t = t || 0;
  let n = (t & 4278190080) >>> 24, r = (t & 16711680) >>> 16, i = (t & 65280) >>> 8, a = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${i}, ${a})`;
}
var Qr = (e10, t, n) => {
  if (B.fun(e10))
    return e10;
  if (B.arr(e10))
    return Qr({
      range: e10,
      output: t,
      extrapolate: n
    });
  if (B.str(e10.output[0]))
    return hl(e10);
  let r = e10, i = r.output, a = r.range || [0, 1], o = r.extrapolateLeft || r.extrapolate || "extend", s = r.extrapolateRight || r.extrapolate || "extend", c = r.easing || ((u) => u);
  return (u) => {
    let d = D6(u, a);
    return L6(u, a[d], a[d + 1], i[d], i[d + 1], c, o, s, r.map);
  };
};
function L6(e10, t, n, r, i, a, o, s, c) {
  let u = c ? c(e10) : e10;
  if (u < t) {
    if (o === "identity")
      return u;
    o === "clamp" && (u = t);
  }
  if (u > n) {
    if (s === "identity")
      return u;
    s === "clamp" && (u = n);
  }
  return r === i ? r : t === n ? e10 <= t ? r : i : (t === -1 / 0 ? u = -u : n === 1 / 0 ? u = u - t : u = (u - t) / (n - t), u = a(u), r === -1 / 0 ? u = -u : i === 1 / 0 ? u = u + r : u = u * (i - r) + r, u);
}
function D6(e10, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e10); ++n)
    ;
  return n - 1;
}
var V6 = (e10, t = "end") => (n) => {
  n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 1e-3);
  let r = n * e10, i = t === "end" ? Math.floor(r) : Math.ceil(r);
  return k6(0, 1, i / e10);
}, wa = 1.70158, Ui = wa * 1.525, Qc = wa + 1, Jc = 2 * Math.PI / 3, eu = 2 * Math.PI / 4.5, qi = (e10) => e10 < 1 / 2.75 ? 7.5625 * e10 * e10 : e10 < 2 / 2.75 ? 7.5625 * (e10 -= 1.5 / 2.75) * e10 + 0.75 : e10 < 2.5 / 2.75 ? 7.5625 * (e10 -= 2.25 / 2.75) * e10 + 0.9375 : 7.5625 * (e10 -= 2.625 / 2.75) * e10 + 0.984375, j6 = {
  linear: (e10) => e10,
  easeInQuad: (e10) => e10 * e10,
  easeOutQuad: (e10) => 1 - (1 - e10) * (1 - e10),
  easeInOutQuad: (e10) => e10 < 0.5 ? 2 * e10 * e10 : 1 - Math.pow(-2 * e10 + 2, 2) / 2,
  easeInCubic: (e10) => e10 * e10 * e10,
  easeOutCubic: (e10) => 1 - Math.pow(1 - e10, 3),
  easeInOutCubic: (e10) => e10 < 0.5 ? 4 * e10 * e10 * e10 : 1 - Math.pow(-2 * e10 + 2, 3) / 2,
  easeInQuart: (e10) => e10 * e10 * e10 * e10,
  easeOutQuart: (e10) => 1 - Math.pow(1 - e10, 4),
  easeInOutQuart: (e10) => e10 < 0.5 ? 8 * e10 * e10 * e10 * e10 : 1 - Math.pow(-2 * e10 + 2, 4) / 2,
  easeInQuint: (e10) => e10 * e10 * e10 * e10 * e10,
  easeOutQuint: (e10) => 1 - Math.pow(1 - e10, 5),
  easeInOutQuint: (e10) => e10 < 0.5 ? 16 * e10 * e10 * e10 * e10 * e10 : 1 - Math.pow(-2 * e10 + 2, 5) / 2,
  easeInSine: (e10) => 1 - Math.cos(e10 * Math.PI / 2),
  easeOutSine: (e10) => Math.sin(e10 * Math.PI / 2),
  easeInOutSine: (e10) => -(Math.cos(Math.PI * e10) - 1) / 2,
  easeInExpo: (e10) => e10 === 0 ? 0 : Math.pow(2, 10 * e10 - 10),
  easeOutExpo: (e10) => e10 === 1 ? 1 : 1 - Math.pow(2, -10 * e10),
  easeInOutExpo: (e10) => e10 === 0 ? 0 : e10 === 1 ? 1 : e10 < 0.5 ? Math.pow(2, 20 * e10 - 10) / 2 : (2 - Math.pow(2, -20 * e10 + 10)) / 2,
  easeInCirc: (e10) => 1 - Math.sqrt(1 - Math.pow(e10, 2)),
  easeOutCirc: (e10) => Math.sqrt(1 - Math.pow(e10 - 1, 2)),
  easeInOutCirc: (e10) => e10 < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * e10, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e10 + 2, 2)) + 1) / 2,
  easeInBack: (e10) => Qc * e10 * e10 * e10 - wa * e10 * e10,
  easeOutBack: (e10) => 1 + Qc * Math.pow(e10 - 1, 3) + wa * Math.pow(e10 - 1, 2),
  easeInOutBack: (e10) => e10 < 0.5 ? Math.pow(2 * e10, 2) * ((Ui + 1) * 2 * e10 - Ui) / 2 : (Math.pow(2 * e10 - 2, 2) * ((Ui + 1) * (e10 * 2 - 2) + Ui) + 2) / 2,
  easeInElastic: (e10) => e10 === 0 ? 0 : e10 === 1 ? 1 : -Math.pow(2, 10 * e10 - 10) * Math.sin((e10 * 10 - 10.75) * Jc),
  easeOutElastic: (e10) => e10 === 0 ? 0 : e10 === 1 ? 1 : Math.pow(2, -10 * e10) * Math.sin((e10 * 10 - 0.75) * Jc) + 1,
  easeInOutElastic: (e10) => e10 === 0 ? 0 : e10 === 1 ? 1 : e10 < 0.5 ? -(Math.pow(2, 20 * e10 - 10) * Math.sin((20 * e10 - 11.125) * eu)) / 2 : Math.pow(2, -20 * e10 + 10) * Math.sin((20 * e10 - 11.125) * eu) / 2 + 1,
  easeInBounce: (e10) => 1 - qi(1 - e10),
  easeOutBounce: qi,
  easeInOutBounce: (e10) => e10 < 0.5 ? (1 - qi(1 - 2 * e10)) / 2 : (1 + qi(2 * e10 - 1)) / 2,
  steps: V6
};
function ds() {
  return ds = Object.assign ? Object.assign.bind() : function(e10) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e10[r] = n[r]);
    }
    return e10;
  }, ds.apply(this, arguments);
}
var nr = Symbol.for("FluidValue.get"), Sn = Symbol.for("FluidValue.observers"), rt = (e10) => Boolean(e10 && e10[nr]), He = (e10) => e10 && e10[nr] ? e10[nr]() : e10, tu = (e10) => e10[Sn] || null;
function B6(e10, t) {
  e10.eventObserved ? e10.eventObserved(t) : e10(t);
}
function Jr(e10, t) {
  let n = e10[Sn];
  n && n.forEach((r) => {
    B6(r, t);
  });
}
var Sd = class {
  constructor(t) {
    if (this[nr] = void 0, this[Sn] = void 0, !t && !(t = this.get))
      throw Error("Unknown getter");
    W6(this, t);
  }
}, W6 = (e10, t) => Fd(e10, nr, t);
function pr(e10, t) {
  if (e10[nr]) {
    let n = e10[Sn];
    n || Fd(e10, Sn, n = /* @__PURE__ */ new Set()), n.has(t) || (n.add(t), e10.observerAdded && e10.observerAdded(n.size, t));
  }
  return t;
}
function ei(e10, t) {
  let n = e10[Sn];
  if (n && n.has(t)) {
    let r = n.size - 1;
    r ? n.delete(t) : e10[Sn] = null, e10.observerRemoved && e10.observerRemoved(r, t);
  }
}
var Fd = (e10, t, n) => Object.defineProperty(e10, t, {
  value: n,
  writable: !0,
  configurable: !0
}), la = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, Z6 = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi, nu = new RegExp(`(${la.source})(%|[a-z]+)`, "i"), H6 = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, Ya = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/, Pd = (e10) => {
  let [t, n] = z6(e10);
  if (!t || ml())
    return e10;
  let r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
  return r ? r.trim() : n && n.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(n) || e10 : n && Ya.test(n) ? Pd(n) : n || e10;
}, z6 = (e10) => {
  let t = Ya.exec(e10);
  if (!t)
    return [,];
  let [, n, r] = t;
  return [n, r];
}, Po, U6 = (e10, t, n, r, i) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`, Nd = (e10) => {
  Po || (Po = Jt ? new RegExp(`(${Object.keys(Jt).join("|")})(?!\\w)`, "g") : /^\b$/);
  let t = e10.output.map((a) => He(a).replace(Ya, Pd).replace(Z6, Xc).replace(Po, Xc)), n = t.map((a) => a.match(la).map(Number)), i = n[0].map((a, o) => n.map((s) => {
    if (!(o in s))
      throw Error('The arity of each "output" value must be equal');
    return s[o];
  })).map((a) => Qr(ds({}, e10, {
    output: a
  })));
  return (a) => {
    var o;
    let s = !nu.test(t[0]) && ((o = t.find((u) => nu.test(u))) == null ? void 0 : o.replace(la, "")), c = 0;
    return t[0].replace(la, () => `${i[c++](a)}${s || ""}`).replace(H6, U6);
  };
}, vl = "react-spring: ", Ad = (e10) => {
  let t = e10, n = !1;
  if (typeof t != "function")
    throw new TypeError(`${vl}once requires a function parameter`);
  return (...r) => {
    n || (t(...r), n = !0);
  };
}, q6 = Ad(console.warn);
function K6() {
  q6(`${vl}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var G6 = Ad(console.warn);
function Y6() {
  G6(`${vl}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function Xa(e10) {
  return B.str(e10) && (e10[0] == "#" || /\d/.test(e10) || !ml() && Ya.test(e10) || e10 in (Jt || {}));
}
var gl = ml() ? import_react2.useEffect : import_react2.useLayoutEffect, X6 = () => {
  let e10 = (0, import_react2.useRef)(!1);
  return gl(() => (e10.current = !0, () => {
    e10.current = !1;
  }), []), e10;
};
function Td() {
  let e10 = (0, import_react2.useState)()[1], t = X6();
  return () => {
    t.current && e10(Math.random());
  };
}
function Q6(e10, t) {
  let [n] = (0, import_react2.useState)(() => ({
    inputs: t,
    result: e10()
  })), r = (0, import_react2.useRef)(), i = r.current, a = i;
  return a ? Boolean(t && a.inputs && J6(t, a.inputs)) || (a = {
    inputs: t,
    result: e10()
  }) : a = n, (0, import_react2.useEffect)(() => {
    r.current = a, i == n && (n.inputs = n.result = void 0);
  }, [a]), a.result;
}
function J6(e10, t) {
  if (e10.length !== t.length)
    return !1;
  for (let n = 0; n < e10.length; n++)
    if (e10[n] !== t[n])
      return !1;
  return !0;
}
var Rd = (e10) => (0, import_react2.useEffect)(e10, e7), e7 = [];
function ru(e10) {
  let t = (0, import_react2.useRef)();
  return (0, import_react2.useEffect)(() => {
    t.current = e10;
  }), t.current;
}
var ti = Symbol.for("Animated:node"), t7 = (e10) => !!e10 && e10[ti] === e10, Et = (e10) => e10 && e10[ti], yl = (e10, t) => C6(e10, ti, t), Qa = (e10) => e10 && e10[ti] && e10[ti].getPayload(), Md = class {
  constructor() {
    this.payload = void 0, yl(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
}, vr = class extends Md {
  constructor(t) {
    super(), this.done = !0, this.elapsedTime = void 0, this.lastPosition = void 0, this.lastVelocity = void 0, this.v0 = void 0, this.durationProgress = 0, this._value = t, B.num(this._value) && (this.lastPosition = this._value);
  }
  static create(t) {
    return new vr(t);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(t, n) {
    return B.num(t) && (this.lastPosition = t, n && (t = Math.round(t / n) * n, this.done && (this.lastPosition = t))), this._value === t ? !1 : (this._value = t, !0);
  }
  reset() {
    let {
      done: t
    } = this;
    this.done = !1, B.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, t && (this.lastVelocity = null), this.v0 = null);
  }
}, rr = class extends vr {
  constructor(t) {
    super(0), this._string = null, this._toString = void 0, this._toString = Qr({
      output: [t, t]
    });
  }
  static create(t) {
    return new rr(t);
  }
  getValue() {
    let t = this._string;
    return t ?? (this._string = this._toString(this._value));
  }
  setValue(t) {
    if (B.str(t)) {
      if (t == this._string)
        return !1;
      this._string = t, this._value = 1;
    } else if (super.setValue(t))
      this._string = null;
    else
      return !1;
    return !0;
  }
  reset(t) {
    t && (this._toString = Qr({
      output: [this.getValue(), t]
    })), this._value = 0, super.reset();
  }
}, Ea = {
  dependencies: null
}, Ja = class extends Md {
  constructor(t) {
    super(), this.source = t, this.setValue(t);
  }
  getValue(t) {
    let n = {};
    return xt(this.source, (r, i) => {
      t7(r) ? n[i] = r.getValue(t) : rt(r) ? n[i] = He(r) : t || (n[i] = r);
    }), n;
  }
  setValue(t) {
    this.source = t, this.payload = this._makePayload(t);
  }
  reset() {
    this.payload && J(this.payload, (t) => t.reset());
  }
  _makePayload(t) {
    if (t) {
      let n = /* @__PURE__ */ new Set();
      return xt(t, this._addToPayload, n), Array.from(n);
    }
  }
  _addToPayload(t) {
    Ea.dependencies && rt(t) && Ea.dependencies.add(t);
    let n = Qa(t);
    n && J(n, (r) => this.add(r));
  }
}, bl = class extends Ja {
  constructor(t) {
    super(t);
  }
  static create(t) {
    return new bl(t);
  }
  getValue() {
    return this.source.map((t) => t.getValue());
  }
  setValue(t) {
    let n = this.getPayload();
    return t.length == n.length ? n.map((r, i) => r.setValue(t[i])).some(Boolean) : (super.setValue(t.map(n7)), !0);
  }
};
function n7(e10) {
  return (Xa(e10) ? rr : vr).create(e10);
}
function ms(e10) {
  let t = Et(e10);
  return t ? t.constructor : B.arr(e10) ? bl : Xa(e10) ? rr : vr;
}
function Ca() {
  return Ca = Object.assign ? Object.assign.bind() : function(e10) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e10[r] = n[r]);
    }
    return e10;
  }, Ca.apply(this, arguments);
}
var iu = (e10, t) => {
  let n = !B.fun(e10) || e10.prototype && e10.prototype.isReactComponent;
  return (0, import_react2.forwardRef)((r, i) => {
    let a = (0, import_react2.useRef)(null), o = n && (0, import_react2.useCallback)((p) => {
      a.current = a7(i, p);
    }, [i]), [s, c] = i7(r, t), u = Td(), d = () => {
      let p = a.current;
      n && !p || (p ? t.applyAnimatedValues(p, s.getValue(!0)) : !1) === !1 && u();
    }, f = new r7(d, c), m = (0, import_react2.useRef)();
    gl(() => (m.current = f, J(c, (p) => pr(p, f)), () => {
      m.current && (J(m.current.deps, (p) => ei(p, m.current)), Y.cancel(m.current.update));
    })), (0, import_react2.useEffect)(d, []), Rd(() => () => {
      let p = m.current;
      J(p.deps, (h) => ei(h, p));
    });
    let g = t.getComponentProps(s.getValue());
    return L.createElement(e10, Ca({}, g, {
      ref: o
    }));
  });
}, r7 = class {
  constructor(t, n) {
    this.update = t, this.deps = n;
  }
  eventObserved(t) {
    t.type == "change" && Y.write(this.update);
  }
};
function i7(e10, t) {
  let n = /* @__PURE__ */ new Set();
  return Ea.dependencies = n, e10.style && (e10 = Ca({}, e10, {
    style: t.createAnimatedStyle(e10.style)
  })), e10 = new Ja(e10), Ea.dependencies = null, [e10, n];
}
function a7(e10, t) {
  return e10 && (B.fun(e10) ? e10(t) : e10.current = t), t;
}
var au = Symbol.for("AnimatedComponent"), o7 = (e10, {
  applyAnimatedValues: t = () => !1,
  createAnimatedStyle: n = (i) => new Ja(i),
  getComponentProps: r = (i) => i
} = {}) => {
  let i = {
    applyAnimatedValues: t,
    createAnimatedStyle: n,
    getComponentProps: r
  }, a = (o) => {
    let s = ou(o) || "Anonymous";
    return B.str(o) ? o = a[o] || (a[o] = iu(o, i)) : o = o[au] || (o[au] = iu(o, i)), o.displayName = `Animated(${s})`, o;
  };
  return xt(e10, (o, s) => {
    B.arr(e10) && (s = ou(o)), a[s] = a(o);
  }), {
    animated: a
  };
}, ou = (e10) => B.str(e10) ? e10 : e10 && B.str(e10.displayName) ? e10.displayName : B.fun(e10) && e10.name || null;
function Pe() {
  return Pe = Object.assign ? Object.assign.bind() : function(e10) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e10[r] = n[r]);
    }
    return e10;
  }, Pe.apply(this, arguments);
}
function $n(e10, ...t) {
  return B.fun(e10) ? e10(...t) : e10;
}
var Hr = (e10, t) => e10 === !0 || !!(t && e10 && (B.fun(e10) ? e10(t) : Ke(e10).includes(t))), Id = (e10, t) => B.obj(e10) ? t && e10[t] : e10, Ld = (e10, t) => e10.default === !0 ? e10[t] : e10.default ? e10.default[t] : void 0, s7 = (e10) => e10, wl = (e10, t = s7) => {
  let n = l7;
  e10.default && e10.default !== !0 && (e10 = e10.default, n = Object.keys(e10));
  let r = {};
  for (let i of n) {
    let a = t(e10[i], i);
    B.und(a) || (r[i] = a);
  }
  return r;
}, l7 = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"], c7 = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  keys: 1,
  callId: 1,
  parentId: 1
};
function u7(e10) {
  let t = {}, n = 0;
  if (xt(e10, (r, i) => {
    c7[i] || (t[i] = r, n++);
  }), n)
    return t;
}
function Dd(e10) {
  let t = u7(e10);
  if (t) {
    let n = {
      to: t
    };
    return xt(e10, (r, i) => i in t || (n[i] = r)), n;
  }
  return Pe({}, e10);
}
function ni(e10) {
  return e10 = He(e10), B.arr(e10) ? e10.map(ni) : Xa(e10) ? lt.createStringInterpolator({
    range: [0, 1],
    output: [e10, e10]
  })(1) : e10;
}
function f7(e10) {
  for (let t in e10)
    return !0;
  return !1;
}
function hs(e10) {
  return B.fun(e10) || B.arr(e10) && B.obj(e10[0]);
}
function d7(e10, t) {
  var n;
  (n = e10.ref) == null || n.delete(e10), t == null || t.delete(e10);
}
function m7(e10, t) {
  if (t && e10.ref !== t) {
    var n;
    (n = e10.ref) == null || n.delete(e10), t.add(e10), e10.ref = t;
  }
}
var h7 = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
}, ps = Pe({}, h7.default, {
  mass: 1,
  damping: 1,
  easing: j6.linear,
  clamp: !1
}), p7 = class {
  constructor() {
    this.tension = void 0, this.friction = void 0, this.frequency = void 0, this.damping = void 0, this.mass = void 0, this.velocity = 0, this.restVelocity = void 0, this.precision = void 0, this.progress = void 0, this.duration = void 0, this.easing = void 0, this.clamp = void 0, this.bounce = void 0, this.decay = void 0, this.round = void 0, Object.assign(this, ps);
  }
};
function v7(e10, t, n) {
  n && (n = Pe({}, n), su(n, t), t = Pe({}, n, t)), su(e10, t), Object.assign(e10, t);
  for (let o in ps)
    e10[o] == null && (e10[o] = ps[o]);
  let {
    mass: r,
    frequency: i,
    damping: a
  } = e10;
  return B.und(i) || (i < 0.01 && (i = 0.01), a < 0 && (a = 0), e10.tension = Math.pow(2 * Math.PI / i, 2) * r, e10.friction = 4 * Math.PI * a * r / i), e10;
}
function su(e10, t) {
  if (!B.und(t.decay))
    e10.duration = void 0;
  else {
    let n = !B.und(t.tension) || !B.und(t.friction);
    (n || !B.und(t.frequency) || !B.und(t.damping) || !B.und(t.mass)) && (e10.duration = void 0, e10.decay = void 0), n && (e10.frequency = void 0);
  }
}
var lu = [], g7 = class {
  constructor() {
    this.changed = !1, this.values = lu, this.toValues = null, this.fromValues = lu, this.to = void 0, this.from = void 0, this.config = new p7(), this.immediate = !1;
  }
};
function Vd(e10, {
  key: t,
  props: n,
  defaultProps: r,
  state: i,
  actions: a
}) {
  return new Promise((o, s) => {
    var c;
    let u, d, f = Hr((c = n.cancel) != null ? c : r == null ? void 0 : r.cancel, t);
    if (f)
      p();
    else {
      B.und(n.pause) || (i.paused = Hr(n.pause, t));
      let h = r == null ? void 0 : r.pause;
      h !== !0 && (h = i.paused || Hr(h, t)), u = $n(n.delay || 0, t), h ? (i.resumeQueue.add(g), a.pause()) : (a.resume(), g());
    }
    function m() {
      i.resumeQueue.add(g), i.timeouts.delete(d), d.cancel(), u = d.time - Y.now();
    }
    function g() {
      u > 0 && !lt.skipAnimation ? (i.delayed = !0, d = Y.setTimeout(p, u), i.pauseQueue.add(m), i.timeouts.add(d)) : p();
    }
    function p() {
      i.delayed && (i.delayed = !1), i.pauseQueue.delete(m), i.timeouts.delete(d), e10 <= (i.cancelId || 0) && (f = !0);
      try {
        a.start(Pe({}, n, {
          callId: e10,
          cancel: f
        }), o);
      } catch (h) {
        s(h);
      }
    }
  });
}
var El = (e10, t) => t.length == 1 ? t[0] : t.some((n) => n.cancelled) ? Qn(e10.get()) : t.every((n) => n.noop) ? jd(e10.get()) : ft(e10.get(), t.every((n) => n.finished)), jd = (e10) => ({
  value: e10,
  noop: !0,
  finished: !0,
  cancelled: !1
}), ft = (e10, t, n = !1) => ({
  value: e10,
  finished: t,
  cancelled: n
}), Qn = (e10) => ({
  value: e10,
  cancelled: !0,
  finished: !1
});
function Bd(e10, t, n, r) {
  let {
    callId: i,
    parentId: a,
    onRest: o
  } = t, {
    asyncTo: s,
    promise: c
  } = n;
  return !a && e10 === s && !t.reset ? c : n.promise = (async () => {
    n.asyncId = i, n.asyncTo = e10;
    let u = wl(t, (b, w) => w === "onRest" ? void 0 : b), d, f, m = new Promise((b, w) => (d = b, f = w)), g = (b) => {
      let w = i <= (n.cancelId || 0) && Qn(r) || i !== n.asyncId && ft(r, !1);
      if (w)
        throw b.result = w, f(b), b;
    }, p = (b, w) => {
      let C = new cu(), v = new uu();
      return (async () => {
        if (lt.skipAnimation)
          throw ri(n), v.result = ft(r, !1), f(v), v;
        g(C);
        let y = B.obj(b) ? Pe({}, b) : Pe({}, w, {
          to: b
        });
        y.parentId = i, xt(u, ($, k) => {
          B.und(y[k]) && (y[k] = $);
        });
        let E = await r.start(y);
        return g(C), n.paused && await new Promise(($) => {
          n.resumeQueue.add($);
        }), E;
      })();
    }, h;
    if (lt.skipAnimation)
      return ri(n), ft(r, !1);
    try {
      let b;
      B.arr(e10) ? b = (async (w) => {
        for (let C of w)
          await p(C);
      })(e10) : b = Promise.resolve(e10(p, r.stop.bind(r))), await Promise.all([b.then(d), m]), h = ft(r.get(), !0, !1);
    } catch (b) {
      if (b instanceof cu)
        h = b.result;
      else if (b instanceof uu)
        h = b.result;
      else
        throw b;
    } finally {
      i == n.asyncId && (n.asyncId = a, n.asyncTo = a ? s : void 0, n.promise = a ? c : void 0);
    }
    return B.fun(o) && Y.batchedUpdates(() => {
      o(h, r, r.item);
    }), h;
  })();
}
function ri(e10, t) {
  Wr(e10.timeouts, (n) => n.cancel()), e10.pauseQueue.clear(), e10.resumeQueue.clear(), e10.asyncId = e10.asyncTo = e10.promise = void 0, t && (e10.cancelId = t);
}
var cu = class extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."), this.result = void 0;
  }
}, uu = class extends Error {
  constructor() {
    super("SkipAnimationSignal"), this.result = void 0;
  }
}, vs = (e10) => e10 instanceof Cl, y7 = 1, Cl = class extends Sd {
  constructor(...t) {
    super(...t), this.id = y7++, this.key = void 0, this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(t) {
    this._priority != t && (this._priority = t, this._onPriorityChange(t));
  }
  get() {
    let t = Et(this);
    return t && t.getValue();
  }
  to(...t) {
    return lt.to(this, t);
  }
  interpolate(...t) {
    return K6(), lt.to(this, t);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(t) {
    t == 1 && this._attach();
  }
  observerRemoved(t) {
    t == 0 && this._detach();
  }
  _attach() {
  }
  _detach() {
  }
  _onChange(t, n = !1) {
    Jr(this, {
      type: "change",
      parent: this,
      value: t,
      idle: n
    });
  }
  _onPriorityChange(t) {
    this.idle || Ka.sort(this), Jr(this, {
      type: "priority",
      parent: this,
      priority: t
    });
  }
}, Fn = Symbol.for("SpringPhase"), Wd = 1, gs = 2, ys = 4, No = (e10) => (e10[Fn] & Wd) > 0, Bt = (e10) => (e10[Fn] & gs) > 0, Or = (e10) => (e10[Fn] & ys) > 0, fu = (e10, t) => t ? e10[Fn] |= gs | Wd : e10[Fn] &= ~gs, du = (e10, t) => t ? e10[Fn] |= ys : e10[Fn] &= ~ys, b7 = class extends Cl {
  constructor(t, n) {
    if (super(), this.key = void 0, this.animation = new g7(), this.queue = void 0, this.defaultProps = {}, this._state = {
      paused: !1,
      delayed: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._pendingCalls = /* @__PURE__ */ new Set(), this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !B.und(t) || !B.und(n)) {
      let r = B.obj(t) ? Pe({}, t) : Pe({}, n, {
        from: t
      });
      B.und(r.default) && (r.default = !0), this.start(r);
    }
  }
  get idle() {
    return !(Bt(this) || this._state.asyncTo) || Or(this);
  }
  get goal() {
    return He(this.animation.to);
  }
  get velocity() {
    let t = Et(this);
    return t instanceof vr ? t.lastVelocity || 0 : t.getPayload().map((n) => n.lastVelocity || 0);
  }
  get hasAnimated() {
    return No(this);
  }
  get isAnimating() {
    return Bt(this);
  }
  get isPaused() {
    return Or(this);
  }
  get isDelayed() {
    return this._state.delayed;
  }
  advance(t) {
    let n = !0, r = !1, i = this.animation, {
      config: a,
      toValues: o
    } = i, s = Qa(i.to);
    !s && rt(i.to) && (o = Ke(He(i.to))), i.values.forEach((d, f) => {
      if (d.done)
        return;
      let m = d.constructor == rr ? 1 : s ? s[f].lastPosition : o[f], g = i.immediate, p = m;
      if (!g) {
        if (p = d.lastPosition, a.tension <= 0) {
          d.done = !0;
          return;
        }
        let h = d.elapsedTime += t, b = i.fromValues[f], w = d.v0 != null ? d.v0 : d.v0 = B.arr(a.velocity) ? a.velocity[f] : a.velocity, C, v = a.precision || (b == m ? 5e-3 : Math.min(1, Math.abs(m - b) * 1e-3));
        if (B.und(a.duration))
          if (a.decay) {
            let y = a.decay === !0 ? 0.998 : a.decay, E = Math.exp(-(1 - y) * h);
            p = b + w / (1 - y) * (1 - E), g = Math.abs(d.lastPosition - p) <= v, C = w * E;
          } else {
            C = d.lastVelocity == null ? w : d.lastVelocity;
            let y = a.restVelocity || v / 10, E = a.clamp ? 0 : a.bounce, $ = !B.und(E), k = b == m ? d.v0 > 0 : b < m, A, P = !1, N = 1, T = Math.ceil(t / N);
            for (let O = 0; O < T && (A = Math.abs(C) > y, !(!A && (g = Math.abs(m - p) <= v, g))); ++O) {
              $ && (P = p == m || p > m == k, P && (C = -C * E, p = m));
              let _ = -a.tension * 1e-6 * (p - m), x = -a.friction * 1e-3 * C, S = (_ + x) / a.mass;
              C = C + S * N, p = p + C * N;
            }
          }
        else {
          let y = 1;
          a.duration > 0 && (this._memoizedDuration !== a.duration && (this._memoizedDuration = a.duration, d.durationProgress > 0 && (d.elapsedTime = a.duration * d.durationProgress, h = d.elapsedTime += t)), y = (a.progress || 0) + h / this._memoizedDuration, y = y > 1 ? 1 : y < 0 ? 0 : y, d.durationProgress = y), p = b + a.easing(y) * (m - b), C = (p - d.lastPosition) / t, g = y == 1;
        }
        d.lastVelocity = C, Number.isNaN(p) && (console.warn("Got NaN while animating:", this), g = !0);
      }
      s && !s[f].done && (g = !1), g ? d.done = !0 : n = !1, d.setValue(p, a.round) && (r = !0);
    });
    let c = Et(this), u = c.getValue();
    if (n) {
      let d = He(i.to);
      (u !== d || r) && !a.decay ? (c.setValue(d), this._onChange(d)) : r && a.decay && this._onChange(u), this._stop();
    } else
      r && this._onChange(u);
  }
  set(t) {
    return Y.batchedUpdates(() => {
      this._stop(), this._focus(t), this._set(t);
    }), this;
  }
  pause() {
    this._update({
      pause: !0
    });
  }
  resume() {
    this._update({
      pause: !1
    });
  }
  finish() {
    if (Bt(this)) {
      let {
        to: t,
        config: n
      } = this.animation;
      Y.batchedUpdates(() => {
        this._onStart(), n.decay || this._set(t, !1), this._stop();
      });
    }
    return this;
  }
  update(t) {
    return (this.queue || (this.queue = [])).push(t), this;
  }
  start(t, n) {
    let r;
    return B.und(t) ? (r = this.queue || [], this.queue = []) : r = [B.obj(t) ? t : Pe({}, n, {
      to: t
    })], Promise.all(r.map((i) => this._update(i))).then((i) => El(this, i));
  }
  stop(t) {
    let {
      to: n
    } = this.animation;
    return this._focus(this.get()), ri(this._state, t && this._lastCallId), Y.batchedUpdates(() => this._stop(n, t)), this;
  }
  reset() {
    this._update({
      reset: !0
    });
  }
  eventObserved(t) {
    t.type == "change" ? this._start() : t.type == "priority" && (this.priority = t.priority + 1);
  }
  _prepareNode(t) {
    let n = this.key || "", {
      to: r,
      from: i
    } = t;
    r = B.obj(r) ? r[n] : r, (r == null || hs(r)) && (r = void 0), i = B.obj(i) ? i[n] : i, i == null && (i = void 0);
    let a = {
      to: r,
      from: i
    };
    return No(this) || (t.reverse && ([r, i] = [i, r]), i = He(i), B.und(i) ? Et(this) || this._set(r) : this._set(i)), a;
  }
  _update(t, n) {
    let r = Pe({}, t), {
      key: i,
      defaultProps: a
    } = this;
    r.default && Object.assign(a, wl(r, (c, u) => /^on/.test(u) ? Id(c, i) : c)), hu(this, r, "onProps"), Fr(this, "onProps", r, this);
    let o = this._prepareNode(r);
    if (Object.isFrozen(this))
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    let s = this._state;
    return Vd(++this._lastCallId, {
      key: i,
      props: r,
      defaultProps: a,
      state: s,
      actions: {
        pause: () => {
          Or(this) || (du(this, !0), jr(s.pauseQueue), Fr(this, "onPause", ft(this, Sr(this, this.animation.to)), this));
        },
        resume: () => {
          Or(this) && (du(this, !1), Bt(this) && this._resume(), jr(s.resumeQueue), Fr(this, "onResume", ft(this, Sr(this, this.animation.to)), this));
        },
        start: this._merge.bind(this, o)
      }
    }).then((c) => {
      if (r.loop && c.finished && !(n && c.noop)) {
        let u = Zd(r);
        if (u)
          return this._update(u, !0);
      }
      return c;
    });
  }
  _merge(t, n, r) {
    if (n.cancel)
      return this.stop(!0), r(Qn(this));
    let i = !B.und(t.to), a = !B.und(t.from);
    if (i || a)
      if (n.callId > this._lastToId)
        this._lastToId = n.callId;
      else
        return r(Qn(this));
    let {
      key: o,
      defaultProps: s,
      animation: c
    } = this, {
      to: u,
      from: d
    } = c, {
      to: f = u,
      from: m = d
    } = t;
    a && !i && (!n.default || B.und(f)) && (f = m), n.reverse && ([f, m] = [m, f]);
    let g = !Rt(m, d);
    g && (c.from = m), m = He(m);
    let p = !Rt(f, u);
    p && this._focus(f);
    let h = hs(n.to), {
      config: b
    } = c, {
      decay: w,
      velocity: C
    } = b;
    (i || a) && (b.velocity = 0), n.config && !h && v7(b, $n(n.config, o), n.config !== s.config ? $n(s.config, o) : void 0);
    let v = Et(this);
    if (!v || B.und(f))
      return r(ft(this, !0));
    let y = B.und(n.reset) ? a && !n.default : !B.und(m) && Hr(n.reset, o), E = y ? m : this.get(), $ = ni(f), k = B.num($) || B.arr($) || Xa($), A = !h && (!k || Hr(s.immediate || n.immediate, o));
    if (p) {
      let O = ms(f);
      if (O !== v.constructor)
        if (A)
          v = this._set($);
        else
          throw Error(`Cannot animate between ${v.constructor.name} and ${O.name}, as the "to" prop suggests`);
    }
    let P = v.constructor, N = rt(f), T = !1;
    if (!N) {
      let O = y || !No(this) && g;
      (p || O) && (T = Rt(ni(E), $), N = !T), (!Rt(c.immediate, A) && !A || !Rt(b.decay, w) || !Rt(b.velocity, C)) && (N = !0);
    }
    if (T && Bt(this) && (c.changed && !y ? N = !0 : N || this._stop(u)), !h && ((N || rt(u)) && (c.values = v.getPayload(), c.toValues = rt(f) ? null : P == rr ? [1] : Ke($)), c.immediate != A && (c.immediate = A, !A && !y && this._set(u)), N)) {
      let {
        onRest: O
      } = c;
      J(E7, (x) => hu(this, n, x));
      let _ = ft(this, Sr(this, u));
      jr(this._pendingCalls, _), this._pendingCalls.add(r), c.changed && Y.batchedUpdates(() => {
        c.changed = !y, O == null || O(_, this), y ? $n(s.onRest, _) : c.onStart == null || c.onStart(_, this);
      });
    }
    y && this._set(E), h ? r(Bd(n.to, n, this._state, this)) : N ? this._start() : Bt(this) && !p ? this._pendingCalls.add(r) : r(jd(E));
  }
  _focus(t) {
    let n = this.animation;
    t !== n.to && (tu(this) && this._detach(), n.to = t, tu(this) && this._attach());
  }
  _attach() {
    let t = 0, {
      to: n
    } = this.animation;
    rt(n) && (pr(n, this), vs(n) && (t = n.priority + 1)), this.priority = t;
  }
  _detach() {
    let {
      to: t
    } = this.animation;
    rt(t) && ei(t, this);
  }
  _set(t, n = !0) {
    let r = He(t);
    if (!B.und(r)) {
      let i = Et(this);
      if (!i || !Rt(r, i.getValue())) {
        let a = ms(r);
        !i || i.constructor != a ? yl(this, a.create(r)) : i.setValue(r), i && Y.batchedUpdates(() => {
          this._onChange(r, n);
        });
      }
    }
    return Et(this);
  }
  _onStart() {
    let t = this.animation;
    t.changed || (t.changed = !0, Fr(this, "onStart", ft(this, Sr(this, t.to)), this));
  }
  _onChange(t, n) {
    n || (this._onStart(), $n(this.animation.onChange, t, this)), $n(this.defaultProps.onChange, t, this), super._onChange(t, n);
  }
  _start() {
    let t = this.animation;
    Et(this).reset(He(t.to)), t.immediate || (t.fromValues = t.values.map((n) => n.lastPosition)), Bt(this) || (fu(this, !0), Or(this) || this._resume());
  }
  _resume() {
    lt.skipAnimation ? this.finish() : Ka.start(this);
  }
  _stop(t, n) {
    if (Bt(this)) {
      fu(this, !1);
      let r = this.animation;
      J(r.values, (a) => {
        a.done = !0;
      }), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Jr(this, {
        type: "idle",
        parent: this
      });
      let i = n ? Qn(this.get()) : ft(this.get(), Sr(this, t ?? r.to));
      jr(this._pendingCalls, i), r.changed && (r.changed = !1, Fr(this, "onRest", i, this));
    }
  }
};
function Sr(e10, t) {
  let n = ni(t), r = ni(e10.get());
  return Rt(r, n);
}
function Zd(e10, t = e10.loop, n = e10.to) {
  let r = $n(t);
  if (r) {
    let i = r !== !0 && Dd(r), a = (i || e10).reverse, o = !i || i.reset;
    return ii(Pe({}, e10, {
      loop: t,
      default: !1,
      pause: void 0,
      to: !a || hs(n) ? n : void 0,
      from: o ? e10.from : void 0,
      reset: o
    }, i));
  }
}
function ii(e10) {
  let {
    to: t,
    from: n
  } = e10 = Dd(e10), r = /* @__PURE__ */ new Set();
  return B.obj(t) && mu(t, r), B.obj(n) && mu(n, r), e10.keys = r.size ? Array.from(r) : null, e10;
}
function w7(e10) {
  let t = ii(e10);
  return B.und(t.default) && (t.default = wl(t)), t;
}
function mu(e10, t) {
  xt(e10, (n, r) => n != null && t.add(r));
}
var E7 = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function hu(e10, t, n) {
  e10.animation[n] = t[n] !== Ld(t, n) ? Id(t[n], e10.key) : void 0;
}
function Fr(e10, t, ...n) {
  var r, i, a, o;
  (r = (i = e10.animation)[t]) == null || r.call(i, ...n), (a = (o = e10.defaultProps)[t]) == null || a.call(o, ...n);
}
var C7 = ["onStart", "onChange", "onRest"], $7 = 1, x7 = class {
  constructor(t, n) {
    this.id = $7++, this.springs = {}, this.queue = [], this.ref = void 0, this._flush = void 0, this._initialProps = void 0, this._lastAsyncId = 0, this._active = /* @__PURE__ */ new Set(), this._changed = /* @__PURE__ */ new Set(), this._started = !1, this._item = void 0, this._state = {
      paused: !1,
      pauseQueue: /* @__PURE__ */ new Set(),
      resumeQueue: /* @__PURE__ */ new Set(),
      timeouts: /* @__PURE__ */ new Set()
    }, this._events = {
      onStart: /* @__PURE__ */ new Map(),
      onChange: /* @__PURE__ */ new Map(),
      onRest: /* @__PURE__ */ new Map()
    }, this._onFrame = this._onFrame.bind(this), n && (this._flush = n), t && this.start(Pe({
      default: !0
    }, t));
  }
  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every((t) => t.idle && !t.isDelayed && !t.isPaused);
  }
  get item() {
    return this._item;
  }
  set item(t) {
    this._item = t;
  }
  get() {
    let t = {};
    return this.each((n, r) => t[r] = n.get()), t;
  }
  set(t) {
    for (let n in t) {
      let r = t[n];
      B.und(r) || this.springs[n].set(r);
    }
  }
  update(t) {
    return t && this.queue.push(ii(t)), this;
  }
  start(t) {
    let {
      queue: n
    } = this;
    return t ? n = Ke(t).map(ii) : this.queue = [], this._flush ? this._flush(this, n) : (Kd(this, n), bs(this, n));
  }
  stop(t, n) {
    if (t !== !!t && (n = t), n) {
      let r = this.springs;
      J(Ke(n), (i) => r[i].stop(!!t));
    } else
      ri(this._state, this._lastAsyncId), this.each((r) => r.stop(!!t));
    return this;
  }
  pause(t) {
    if (B.und(t))
      this.start({
        pause: !0
      });
    else {
      let n = this.springs;
      J(Ke(t), (r) => n[r].pause());
    }
    return this;
  }
  resume(t) {
    if (B.und(t))
      this.start({
        pause: !1
      });
    else {
      let n = this.springs;
      J(Ke(t), (r) => n[r].resume());
    }
    return this;
  }
  each(t) {
    xt(this.springs, t);
  }
  _onFrame() {
    let {
      onStart: t,
      onChange: n,
      onRest: r
    } = this._events, i = this._active.size > 0, a = this._changed.size > 0;
    (i && !this._started || a && !this._started) && (this._started = !0, Wr(t, ([c, u]) => {
      u.value = this.get(), c(u, this, this._item);
    }));
    let o = !i && this._started, s = a || o && r.size ? this.get() : null;
    a && n.size && Wr(n, ([c, u]) => {
      u.value = s, c(u, this, this._item);
    }), o && (this._started = !1, Wr(r, ([c, u]) => {
      u.value = s, c(u, this, this._item);
    }));
  }
  eventObserved(t) {
    if (t.type == "change")
      this._changed.add(t.parent), t.idle || this._active.add(t.parent);
    else if (t.type == "idle")
      this._active.delete(t.parent);
    else
      return;
    Y.onFrame(this._onFrame);
  }
};
function bs(e10, t) {
  return Promise.all(t.map((n) => Hd(e10, n))).then((n) => El(e10, n));
}
async function Hd(e10, t, n) {
  let {
    keys: r,
    to: i,
    from: a,
    loop: o,
    onRest: s,
    onResolve: c
  } = t, u = B.obj(t.default) && t.default;
  o && (t.loop = !1), i === !1 && (t.to = null), a === !1 && (t.from = null);
  let d = B.arr(i) || B.fun(i) ? i : void 0;
  d ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : J(C7, (h) => {
    let b = t[h];
    if (B.fun(b)) {
      let w = e10._events[h];
      t[h] = ({
        finished: C,
        cancelled: v
      }) => {
        let y = w.get(b);
        y ? (C || (y.finished = !1), v && (y.cancelled = !0)) : w.set(b, {
          value: null,
          finished: C || !1,
          cancelled: v || !1
        });
      }, u && (u[h] = t[h]);
    }
  });
  let f = e10._state;
  t.pause === !f.paused ? (f.paused = t.pause, jr(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
  let m = (r || Object.keys(e10.springs)).map((h) => e10.springs[h].start(t)), g = t.cancel === !0 || Ld(t, "cancel") === !0;
  (d || g && f.asyncId) && m.push(Vd(++e10._lastAsyncId, {
    props: t,
    state: f,
    actions: {
      pause: us,
      resume: us,
      start(h, b) {
        g ? (ri(f, e10._lastAsyncId), b(Qn(e10))) : (h.onRest = s, b(Bd(d, h, f, e10)));
      }
    }
  })), f.paused && await new Promise((h) => {
    f.resumeQueue.add(h);
  });
  let p = El(e10, await Promise.all(m));
  if (o && p.finished && !(n && p.noop)) {
    let h = Zd(t, o, i);
    if (h)
      return Kd(e10, [h]), Hd(e10, h, !0);
  }
  return c && Y.batchedUpdates(() => c(p, e10, e10.item)), p;
}
function pu(e10, t) {
  let n = Pe({}, e10.springs);
  return t && J(Ke(t), (r) => {
    B.und(r.keys) && (r = ii(r)), B.obj(r.to) || (r = Pe({}, r, {
      to: void 0
    })), qd(n, r, (i) => Ud(i));
  }), zd(e10, n), n;
}
function zd(e10, t) {
  xt(t, (n, r) => {
    e10.springs[r] || (e10.springs[r] = n, pr(n, e10));
  });
}
function Ud(e10, t) {
  let n = new b7();
  return n.key = e10, t && pr(n, t), n;
}
function qd(e10, t, n) {
  t.keys && J(t.keys, (r) => {
    (e10[r] || (e10[r] = n(r)))._prepareNode(t);
  });
}
function Kd(e10, t) {
  J(t, (n) => {
    qd(e10.springs, n, (r) => Ud(r, e10));
  });
}
function _7(e10, t) {
  if (e10 == null)
    return {};
  var n = {}, r = Object.keys(e10), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e10[i]);
  return n;
}
var k7 = ["children"], eo = (e10) => {
  let {
    children: t
  } = e10, n = _7(e10, k7), r = (0, import_react2.useContext)($a), i = n.pause || !!r.pause, a = n.immediate || !!r.immediate;
  n = Q6(() => ({
    pause: i,
    immediate: a
  }), [i, a]);
  let {
    Provider: o
  } = $a;
  return L.createElement(o, {
    value: n
  }, t);
}, $a = O7(eo, {});
eo.Provider = $a.Provider;
eo.Consumer = $a.Consumer;
function O7(e10, t) {
  return Object.assign(e10, L.createContext(t)), e10.Provider._context = e10, e10.Consumer._context = e10, e10;
}
var S7 = () => {
  let e10 = [], t = function(i) {
    Y6();
    let a = [];
    return J(e10, (o, s) => {
      if (B.und(i))
        a.push(o.start());
      else {
        let c = n(i, o, s);
        c && a.push(o.start(c));
      }
    }), a;
  };
  t.current = e10, t.add = function(r) {
    e10.includes(r) || e10.push(r);
  }, t.delete = function(r) {
    let i = e10.indexOf(r);
    ~i && e10.splice(i, 1);
  }, t.pause = function() {
    return J(e10, (r) => r.pause(...arguments)), this;
  }, t.resume = function() {
    return J(e10, (r) => r.resume(...arguments)), this;
  }, t.set = function(r) {
    J(e10, (i) => i.set(r));
  }, t.start = function(r) {
    let i = [];
    return J(e10, (a, o) => {
      if (B.und(r))
        i.push(a.start());
      else {
        let s = this._getProps(r, a, o);
        s && i.push(a.start(s));
      }
    }), i;
  }, t.stop = function() {
    return J(e10, (r) => r.stop(...arguments)), this;
  }, t.update = function(r) {
    return J(e10, (i, a) => i.update(this._getProps(r, i, a))), this;
  };
  let n = function(i, a, o) {
    return B.fun(i) ? i(o, a) : i;
  };
  return t._getProps = n, t;
};
function F7(e10, t, n) {
  let r = B.fun(t) && t;
  r && !n && (n = []);
  let i = (0, import_react2.useMemo)(() => r || arguments.length == 3 ? S7() : void 0, []), a = (0, import_react2.useRef)(0), o = Td(), s = (0, import_react2.useMemo)(() => ({
    ctrls: [],
    queue: [],
    flush(w, C) {
      let v = pu(w, C);
      return a.current > 0 && !s.queue.length && !Object.keys(v).some((E) => !w.springs[E]) ? bs(w, C) : new Promise((E) => {
        zd(w, v), s.queue.push(() => {
          E(bs(w, C));
        }), o();
      });
    }
  }), []), c = (0, import_react2.useRef)([...s.ctrls]), u = [], d = ru(e10) || 0;
  (0, import_react2.useMemo)(() => {
    J(c.current.slice(e10, d), (w) => {
      d7(w, i), w.stop(!0);
    }), c.current.length = e10, f(d, e10);
  }, [e10]), (0, import_react2.useMemo)(() => {
    f(0, Math.min(d, e10));
  }, n);
  function f(w, C) {
    for (let v = w; v < C; v++) {
      let y = c.current[v] || (c.current[v] = new x7(null, s.flush)), E = r ? r(v, y) : t[v];
      E && (u[v] = w7(E));
    }
  }
  let m = c.current.map((w, C) => pu(w, u[C])), g = (0, import_react2.useContext)(eo), p = ru(g), h = g !== p && f7(g);
  gl(() => {
    a.current++, s.ctrls = c.current;
    let {
      queue: w
    } = s;
    w.length && (s.queue = [], J(w, (C) => C())), J(c.current, (C, v) => {
      i == null || i.add(C), h && C.start({
        default: g
      });
      let y = u[v];
      y && (m7(C, y.ref), C.ref ? C.queue.push(y) : C.start(y));
    });
  }), Rd(() => () => {
    J(s.ctrls, (w) => w.stop(!0));
  });
  let b = m.map((w) => Pe({}, w));
  return i ? [b, i] : b;
}
function Ne(e10, t) {
  let n = B.fun(e10), [[r], i] = F7(1, n ? e10 : [e10], n ? t || [] : t);
  return n || arguments.length == 2 ? [r, i] : r;
}
var vu;
(function(e10) {
  e10.MOUNT = "mount", e10.ENTER = "enter", e10.UPDATE = "update", e10.LEAVE = "leave";
})(vu || (vu = {}));
var Gd = class extends Cl {
  constructor(t, n) {
    super(), this.key = void 0, this.idle = !0, this.calc = void 0, this._active = /* @__PURE__ */ new Set(), this.source = t, this.calc = Qr(...n);
    let r = this._get(), i = ms(r);
    yl(this, i.create(r));
  }
  advance(t) {
    let n = this._get(), r = this.get();
    Rt(n, r) || (Et(this).setValue(n), this._onChange(n, this.idle)), !this.idle && gu(this._active) && Ao(this);
  }
  _get() {
    let t = B.arr(this.source) ? this.source.map(He) : Ke(He(this.source));
    return this.calc(...t);
  }
  _start() {
    this.idle && !gu(this._active) && (this.idle = !1, J(Qa(this), (t) => {
      t.done = !1;
    }), lt.skipAnimation ? (Y.batchedUpdates(() => this.advance()), Ao(this)) : Ka.start(this));
  }
  _attach() {
    let t = 1;
    J(Ke(this.source), (n) => {
      rt(n) && pr(n, this), vs(n) && (n.idle || this._active.add(n), t = Math.max(t, n.priority + 1));
    }), this.priority = t, this._start();
  }
  _detach() {
    J(Ke(this.source), (t) => {
      rt(t) && ei(t, this);
    }), this._active.clear(), Ao(this);
  }
  eventObserved(t) {
    t.type == "change" ? t.idle ? this.advance() : (this._active.add(t.parent), this._start()) : t.type == "idle" ? this._active.delete(t.parent) : t.type == "priority" && (this.priority = Ke(this.source).reduce((n, r) => Math.max(n, (vs(r) ? r.priority : 0) + 1), 0));
  }
};
function P7(e10) {
  return e10.idle !== !1;
}
function gu(e10) {
  return !e10.size || Array.from(e10).every(P7);
}
function Ao(e10) {
  e10.idle || (e10.idle = !0, J(Qa(e10), (t) => {
    t.done = !0;
  }), Jr(e10, {
    type: "idle",
    parent: e10
  }));
}
var N7 = (e10, ...t) => new Gd(e10, t);
lt.assign({
  createStringInterpolator: Nd,
  to: (e10, t) => new Gd(e10, t)
});
function $l(e10, t) {
  if (e10 == null)
    return {};
  var n = {}, r = Object.keys(e10), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e10[i]);
  return n;
}
var A7 = ["style", "children", "scrollTop", "scrollLeft", "viewBox"], Yd = /^--/;
function T7(e10, t) {
  return t == null || typeof t == "boolean" || t === "" ? "" : typeof t == "number" && t !== 0 && !Yd.test(e10) && !(zr.hasOwnProperty(e10) && zr[e10]) ? t + "px" : ("" + t).trim();
}
var yu = {};
function R7(e10, t) {
  if (!e10.nodeType || !e10.setAttribute)
    return !1;
  let n = e10.nodeName === "filter" || e10.parentNode && e10.parentNode.nodeName === "filter", r = t, {
    style: i,
    children: a,
    scrollTop: o,
    scrollLeft: s,
    viewBox: c
  } = r, u = $l(r, A7), d = Object.values(u), f = Object.keys(u).map((m) => n || e10.hasAttribute(m) ? m : yu[m] || (yu[m] = m.replace(/([A-Z])/g, (g) => "-" + g.toLowerCase())));
  a !== void 0 && (e10.textContent = a);
  for (let m in i)
    if (i.hasOwnProperty(m)) {
      let g = T7(m, i[m]);
      Yd.test(m) ? e10.style.setProperty(m, g) : e10.style[m] = g;
    }
  f.forEach((m, g) => {
    e10.setAttribute(m, d[g]);
  }), o !== void 0 && (e10.scrollTop = o), s !== void 0 && (e10.scrollLeft = s), c !== void 0 && e10.setAttribute("viewBox", c);
}
var zr = {
  animationIterationCount: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, M7 = (e10, t) => e10 + t.charAt(0).toUpperCase() + t.substring(1), I7 = ["Webkit", "Ms", "Moz", "O"];
zr = Object.keys(zr).reduce((e10, t) => (I7.forEach((n) => e10[M7(n, t)] = e10[t]), e10), zr);
var L7 = ["x", "y", "z"], D7 = /^(matrix|translate|scale|rotate|skew)/, V7 = /^(translate)/, j7 = /^(rotate|skew)/, To = (e10, t) => B.num(e10) && e10 !== 0 ? e10 + t : e10, ca = (e10, t) => B.arr(e10) ? e10.every((n) => ca(n, t)) : B.num(e10) ? e10 === t : parseFloat(e10) === t, B7 = class extends Ja {
  constructor(t) {
    let {
      x: n,
      y: r,
      z: i
    } = t, a = $l(t, L7), o = [], s = [];
    (n || r || i) && (o.push([n || 0, r || 0, i || 0]), s.push((c) => [`translate3d(${c.map((u) => To(u, "px")).join(",")})`, ca(c, 0)])), xt(a, (c, u) => {
      if (u === "transform")
        o.push([c || ""]), s.push((d) => [d, d === ""]);
      else if (D7.test(u)) {
        if (delete a[u], B.und(c))
          return;
        let d = V7.test(u) ? "px" : j7.test(u) ? "deg" : "";
        o.push(Ke(c)), s.push(u === "rotate3d" ? ([f, m, g, p]) => [`rotate3d(${f},${m},${g},${To(p, d)})`, ca(p, 0)] : (f) => [`${u}(${f.map((m) => To(m, d)).join(",")})`, ca(f, u.startsWith("scale") ? 1 : 0)]);
      }
    }), o.length && (a.transform = new W7(o, s)), super(a);
  }
}, W7 = class extends Sd {
  constructor(t, n) {
    super(), this._value = null, this.inputs = t, this.transforms = n;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let t = "", n = !0;
    return J(this.inputs, (r, i) => {
      let a = He(r[0]), [o, s] = this.transforms[i](B.arr(a) ? a : r.map(He));
      t += " " + o, n = n && s;
    }), n ? "none" : t;
  }
  observerAdded(t) {
    t == 1 && J(this.inputs, (n) => J(n, (r) => rt(r) && pr(r, this)));
  }
  observerRemoved(t) {
    t == 0 && J(this.inputs, (n) => J(n, (r) => rt(r) && ei(r, this)));
  }
  eventObserved(t) {
    t.type == "change" && (this._value = null), Jr(this, t);
  }
}, Z7 = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], H7 = ["scrollTop", "scrollLeft"];
lt.assign({
  batchedUpdates: import_react_dom.unstable_batchedUpdates,
  createStringInterpolator: Nd,
  colors: O6
});
var z7 = o7(Z7, {
  applyAnimatedValues: R7,
  createAnimatedStyle: (e10) => new B7(e10),
  getComponentProps: (e10) => $l(e10, H7)
}), ue = z7.animated;
function U7(e10) {
  return (typeof e10 == "function" ? e10() : e10) || document.body;
}
function gr(e10, t) {
  if (sr && e10) {
    let n = U7(e10);
    return (0, import_react_dom.createPortal)(t, n);
  }
  return t;
}
function q7(e10) {
  let t = (0, import_react2.useRef)(e10);
  return e10 && (t.current = !0), !!t.current;
}
var yr = (e10) => to(e10.active, e10.forceRender, e10.destroyOnClose) ? e10.children : null;
function to(e10, t, n) {
  let r = q7(e10);
  return t || e10 ? !0 : r ? !n : !1;
}
var K7 = {
  click: "onClick"
};
function tn(e10, t) {
  let n = Object.assign({}, t.props);
  for (let r of e10) {
    let i = K7[r];
    n[i] = function(a) {
      var o, s;
      a.stopPropagation(), (s = (o = t.props)[i]) === null || s === void 0 || s.call(o, a);
    };
  }
  return import_react2.default.cloneElement(t, n);
}
var Ro = "adm-mask", G7 = {
  default: 0.55,
  thin: 0.35,
  thick: 0.75
}, Y7 = {
  black: "0, 0, 0",
  white: "255, 255, 255"
}, X7 = {
  visible: !0,
  destroyOnClose: !1,
  forceRender: !1,
  color: "black",
  opacity: "default",
  disableBodyScroll: !0,
  getContainer: null,
  stopPropagation: ["click"]
}, Q7 = (e10) => {
  let t = Z(X7, e10), {
    locale: n
  } = $e(), r = (0, import_react2.useRef)(null);
  Ua(r, t.visible && t.disableBodyScroll);
  let i = (0, import_react2.useMemo)(() => {
    var d;
    let f = (d = G7[t.opacity]) !== null && d !== void 0 ? d : t.opacity, m = Y7[t.color];
    return m ? `rgba(${m}, ${f})` : t.color;
  }, [t.color, t.opacity]), [a, o] = (0, import_react2.useState)(t.visible), s = sl(), {
    opacity: c
  } = Ne({
    opacity: t.visible ? 1 : 0,
    config: {
      precision: 0.01,
      mass: 1,
      tension: 250,
      friction: 30,
      clamp: !0
    },
    onStart: () => {
      o(!0);
    },
    onRest: () => {
      var d, f;
      s.current || (o(t.visible), t.visible ? (d = t.afterShow) === null || d === void 0 || d.call(t) : (f = t.afterClose) === null || f === void 0 || f.call(t));
    }
  }), u = tn(t.stopPropagation, j(t, import_react2.default.createElement(ue.div, {
    className: Ro,
    ref: r,
    style: Object.assign(Object.assign({}, t.style), {
      background: i,
      opacity: c,
      display: a ? void 0 : "none"
    }),
    onClick: (d) => {
      var f;
      d.target === d.currentTarget && ((f = t.onMaskClick) === null || f === void 0 || f.call(t, d));
    }
  }, t.onMaskClick && import_react2.default.createElement("div", {
    className: `${Ro}-aria-button`,
    role: "button",
    "aria-label": n.Mask.name,
    onClick: t.onMaskClick
  }), import_react2.default.createElement("div", {
    className: `${Ro}-content`
  }, t.children))));
  return import_react2.default.createElement(yr, {
    active: a,
    forceRender: t.forceRender,
    destroyOnClose: t.destroyOnClose
  }, gr(t.getContainer, u));
}, Ei = Q7;
function Qd(e10) {
  return /* @__PURE__ */ L.createElement("svg", Object.assign({
    width: "1em",
    height: "1em",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, e10, {
    style: Object.assign({
      verticalAlign: "-0.125em"
    }, e10.style),
    className: ["antd-mobile-icon", e10.className].filter(Boolean).join(" ")
  }), /* @__PURE__ */ L.createElement("g", {
    id: "CheckCircleFill-CheckCircleFill",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ L.createElement("g", {
    id: "CheckCircleFill-\u7F16\u7EC4"
  }, /* @__PURE__ */ L.createElement("rect", {
    id: "CheckCircleFill-\u77E9\u5F62",
    fill: "#FFFFFF",
    opacity: 0,
    x: 0,
    y: 0,
    width: 48,
    height: 48
  }), /* @__PURE__ */ L.createElement("path", {
    d: "M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M35.8202936,17 L32.7086692,17 C32.6025922,17 32.500859,17.0421352 32.4258461,17.1171378 L32.4258461,17.1171378 L21.3922352,28.1492247 L16.3591562,23.1163755 C16.2841422,23.0413649 16.1824034,22.9992247 16.0763199,22.9992247 L16.0763199,22.9992247 L12.9653996,22.9992247 C12.859342,22.9992247 12.7576259,23.0413445 12.6826161,23.1163228 C12.5263737,23.2724998 12.5263207,23.5257658 12.6824977,23.6820082 C12.8583452,23.8579294 13.0341927,24.0338505 13.2100402,24.2097716 C13.2577488,24.2575002 13.3065097,24.3063074 13.3562592,24.3561283 L13.6661084,24.6666997 C14.3074913,25.3100963 15.0728595,26.0807873 15.8520136,26.8666654 L16.4372421,27.4571699 C18.2552812,29.2922548 19.9983838,31.0574343 20.2666114,31.3285298 L20.301004,31.3632341 C20.8867904,31.9490205 21.8365379,31.9490205 22.4223243,31.3632341 L22.4223243,31.3632341 L36.1031319,17.6828471 C36.1781492,17.6078322 36.2202936,17.5060887 36.2202936,17.4 C36.2202936,17.1790861 36.0412075,17 35.8202936,17 L35.8202936,17 Z",
    id: "CheckCircleFill-\u5F62\u72B6\u7ED3\u5408",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}
function Jd(e10) {
  return /* @__PURE__ */ L.createElement("svg", Object.assign({
    width: "1em",
    height: "1em",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, e10, {
    style: Object.assign({
      verticalAlign: "-0.125em"
    }, e10.style),
    className: ["antd-mobile-icon", e10.className].filter(Boolean).join(" ")
  }), /* @__PURE__ */ L.createElement("g", {
    id: "CheckOutline-CheckOutline",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ L.createElement("g", {
    id: "CheckOutline-\u7F16\u7EC4"
  }, /* @__PURE__ */ L.createElement("rect", {
    id: "CheckOutline-\u77E9\u5F62",
    fill: "#FFFFFF",
    opacity: 0,
    x: 0,
    y: 0,
    width: 48,
    height: 48
  }), /* @__PURE__ */ L.createElement("path", {
    d: "M44.309608,12.6841286 L21.2180499,35.5661955 L21.2180499,35.5661955 C20.6343343,36.1446015 19.6879443,36.1446015 19.1042286,35.5661955 C19.0538201,35.5162456 19.0077648,35.4636155 18.9660627,35.4087682 C18.9113105,35.368106 18.8584669,35.3226694 18.808302,35.2729607 L3.6903839,20.2920499 C3.53346476,20.1365529 3.53231192,19.8832895 3.68780898,19.7263704 C3.7629255,19.6505669 3.86521855,19.6079227 3.97193622,19.6079227 L7.06238923,19.6079227 C7.16784214,19.6079227 7.26902895,19.6495648 7.34393561,19.7237896 L20.160443,32.4236157 L20.160443,32.4236157 L40.656066,12.115858 C40.7309719,12.0416387 40.8321549,12 40.9376034,12 L44.0280571,12 C44.248971,12 44.4280571,12.1790861 44.4280571,12.4 C44.4280571,12.5067183 44.3854124,12.609012 44.309608,12.6841286 Z",
    id: "CheckOutline-\u8DEF\u5F84",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}
function e1(e10) {
  return /* @__PURE__ */ L.createElement("svg", Object.assign({
    width: "1em",
    height: "1em",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, e10, {
    style: Object.assign({
      verticalAlign: "-0.125em"
    }, e10.style),
    className: ["antd-mobile-icon", e10.className].filter(Boolean).join(" ")
  }), /* @__PURE__ */ L.createElement("g", {
    id: "ClockCircleFill-ClockCircleFill",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ L.createElement("g", {
    id: "ClockCircleFill-\u7F16\u7EC4"
  }, /* @__PURE__ */ L.createElement("rect", {
    id: "ClockCircleFill-\u77E9\u5F62",
    fill: "#FFFFFF",
    opacity: 0,
    x: 0,
    y: 0,
    width: 48,
    height: 48
  }), /* @__PURE__ */ L.createElement("path", {
    d: "M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M24.6,14 L22.4,14 C22.1790861,14 22,14.1790861 22,14.4 L22,14.4 L22,23.1715729 L22.0065089,23.3850222 C22.0584325,24.2354066 22.4192395,25.0405598 23.0251263,25.6464466 L23.0251263,25.6464466 L31.1564971,33.7778175 C31.3127068,33.9340272 31.5659728,33.9340272 31.7221825,33.7778175 L31.7221825,33.7778175 L33.2778175,32.2221825 C33.4340272,32.0659728 33.4340272,31.8127068 33.2778175,31.6564971 L33.2778175,31.6564971 L25.1464466,23.5251263 L25.0952092,23.4650801 C25.0337142,23.38027 25,23.2776595 25,23.1715729 L25,23.1715729 L25,14.4 C25,14.1790861 24.8209139,14 24.6,14 L24.6,14 Z",
    id: "ClockCircleFill-\u5F62\u72B6\u7ED3\u5408",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}
function no(e10) {
  return /* @__PURE__ */ L.createElement("svg", Object.assign({
    width: "1em",
    height: "1em",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, e10, {
    style: Object.assign({
      verticalAlign: "-0.125em"
    }, e10.style),
    className: ["antd-mobile-icon", e10.className].filter(Boolean).join(" ")
  }), /* @__PURE__ */ L.createElement("g", {
    id: "CloseCircleFill-CloseCircleFill",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ L.createElement("g", {
    id: "CloseCircleFill-\u7F16\u7EC4"
  }, /* @__PURE__ */ L.createElement("rect", {
    id: "CloseCircleFill-\u77E9\u5F62",
    fill: "#FFFFFF",
    opacity: 0,
    x: 0,
    y: 0,
    width: 48,
    height: 48
  }), /* @__PURE__ */ L.createElement("path", {
    d: "M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M18.6753876,16 L15.5637812,16 C15.4576916,16 15.3559474,16.0421451 15.2809323,16.1171635 C15.124726,16.2733766 15.1247316,16.5266426 15.2809447,16.6828489 L15.2809447,16.6828489 L22.299066,23.7006641 L14.6828159,31.3171619 C14.6078042,31.3921761 14.5656632,31.4939157 14.5656632,31.6 C14.5656632,31.8209139 14.7447493,32 14.9656632,32 L14.9656632,32 L18.0753284,32 C18.1814068,32 18.2831412,31.9578638 18.3581544,31.8828594 L18.3581544,31.8828594 L24.420066,25.8216641 L30.4818451,31.8828564 C30.5568585,31.9578626 30.6585942,32 30.7646741,32 L30.7646741,32 L33.8763476,32 C33.9824309,32 34.0841695,31.9578599 34.1591835,31.8828496 C34.315397,31.7266436 34.3154031,31.4733776 34.1591972,31.3171641 L34.1591972,31.3171641 L26.542066,23.6996641 L33.5591874,16.6828489 C33.6342057,16.6078338 33.6763508,16.5060896 33.6763508,16.4 C33.6763508,16.1790861 33.4972647,16 33.2763508,16 L33.2763508,16 L30.1637654,16 C30.0576705,16 29.9559218,16.0421493 29.8809058,16.1171741 L29.8809058,16.1171741 L24.420066,21.5786641 L18.9582218,16.1171488 C18.883208,16.0421394 18.7814701,16 18.6753876,16 L18.6753876,16 Z",
    id: "CloseCircleFill-\u5F62\u72B6\u7ED3\u5408",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}
function Ci(e10) {
  return /* @__PURE__ */ L.createElement("svg", Object.assign({
    width: "1em",
    height: "1em",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, e10, {
    style: Object.assign({
      verticalAlign: "-0.125em"
    }, e10.style),
    className: ["antd-mobile-icon", e10.className].filter(Boolean).join(" ")
  }), /* @__PURE__ */ L.createElement("g", {
    id: "CloseOutline-CloseOutline",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ L.createElement("g", {
    id: "CloseOutline-\u7F16\u7EC4"
  }, /* @__PURE__ */ L.createElement("rect", {
    id: "CloseOutline-\u77E9\u5F62",
    fill: "#FFFFFF",
    opacity: 0,
    x: 0,
    y: 0,
    width: 48,
    height: 48
  }), /* @__PURE__ */ L.createElement("path", {
    d: "M10.6085104,8.11754663 L24.1768397,21.8195031 L24.1768397,21.8195031 L37.7443031,8.1175556 C37.8194278,8.04168616 37.9217669,7.999 38.0285372,7.999 L41.1040268,7.999 C41.3249407,7.999 41.5040268,8.1780861 41.5040268,8.399 C41.5040268,8.50440471 41.4624226,8.60554929 41.3882578,8.68044752 L26.2773302,23.9408235 L26.2773302,23.9408235 L41.5021975,39.3175645 C41.65763,39.4745475 41.6563731,39.7278104 41.4993901,39.8832429 C41.4244929,39.9574004 41.3233534,39.999 41.2179546,39.999 L38.1434012,39.999 C38.0366291,39.999 37.9342885,39.9563124 37.8591634,39.8804408 L24.1768397,26.0621438 L24.1768397,26.0621438 L10.4936501,39.8804497 C10.4185257,39.9563159 10.3161889,39.999 10.2094212,39.999 L7.13584526,39.999 C6.91493136,39.999 6.73584526,39.8199139 6.73584526,39.599 C6.73584526,39.4936017 6.77744443,39.3924627 6.85160121,39.3175656 L22.0763492,23.9408235 L22.0763492,23.9408235 L6.96554081,8.68044639 C6.81010226,8.52346929 6.81134951,8.27020637 6.9683266,8.11476782 C7.04322474,8.04060377 7.14436883,7.999 7.24977299,7.999 L10.3242852,7.999 C10.4310511,7.999 10.5333863,8.04168267 10.6085104,8.11754663 Z",
    id: "CloseOutline-\u8DEF\u5F84",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}
function J7(e10) {
  return /* @__PURE__ */ L.createElement("svg", Object.assign({
    width: "1em",
    height: "1em",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, e10, {
    style: Object.assign({
      verticalAlign: "-0.125em"
    }, e10.style),
    className: ["antd-mobile-icon", e10.className].filter(Boolean).join(" ")
  }), /* @__PURE__ */ L.createElement("g", {
    id: "DownFill-DownFill",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ L.createElement("g", {
    id: "DownFill-\u7F16\u7EC4"
  }, /* @__PURE__ */ L.createElement("rect", {
    id: "DownFill-\u77E9\u5F62",
    fill: "#FFFFFF",
    opacity: 0,
    x: 0,
    y: 0,
    width: 48,
    height: 48
  }), /* @__PURE__ */ L.createElement("path", {
    d: "M40.6640052,13 L7.34128264,13 C6.57572302,13 5.83336217,13.2619065 5.23947349,13.7351762 C3.80578911,14.8838891 3.58308085,16.9699517 4.74301968,18.3897608 L21.404381,38.7725222 C21.5528531,38.9517214 21.7152446,39.1171361 21.9008348,39.2641713 C23.3345192,40.4128842 25.4363283,40.1923313 26.6009069,38.7725222 L43.2576284,18.3897608 C43.740163,17.8016198 44,17.0664436 44,16.3082931 C44.004629,14.4795422 42.505988,13 40.6640052,13 Z",
    id: "DownFill-\u8DEF\u5F84",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}
function t1(e10) {
  return /* @__PURE__ */ L.createElement("svg", Object.assign({
    width: "1em",
    height: "1em",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, e10, {
    style: Object.assign({
      verticalAlign: "-0.125em"
    }, e10.style),
    className: ["antd-mobile-icon", e10.className].filter(Boolean).join(" ")
  }), /* @__PURE__ */ L.createElement("g", {
    id: "DownOutline-DownOutline",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ L.createElement("g", null, /* @__PURE__ */ L.createElement("rect", {
    id: "DownOutline-\u77E9\u5F62",
    fill: "#FFFFFF",
    opacity: 0,
    x: 0,
    y: 0,
    width: 48,
    height: 48
  }), /* @__PURE__ */ L.createElement("path", {
    d: "M5.11219264,16.3947957 L22.6612572,34.5767382 L22.6612572,34.5767382 C23.2125856,35.1304785 24.0863155,35.1630514 24.6755735,34.6744571 L24.7825775,34.5767382 L42.8834676,16.3956061 C42.9580998,16.320643 43,16.2191697 43,16.1133896 L43,12.9866673 C43,12.7657534 42.8209139,12.5866673 42.6,12.5866673 C42.4936115,12.5866673 42.391606,12.6290496 42.316542,12.7044413 L23.7816937,31.3201933 L23.7816937,31.3201933 L5.6866816,12.7237117 C5.53262122,12.5653818 5.27937888,12.5619207 5.121049,12.7159811 C5.04365775,12.7912854 5,12.8946805 5,13.0026627 L5,16.1170064 C5,16.2206403 5.04022164,16.3202292 5.11219264,16.3947957 Z",
    id: "DownOutline-down",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}
function n1(e10) {
  return /* @__PURE__ */ L.createElement("svg", Object.assign({
    width: "1em",
    height: "1em",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, e10, {
    style: Object.assign({
      verticalAlign: "-0.125em"
    }, e10.style),
    className: ["antd-mobile-icon", e10.className].filter(Boolean).join(" ")
  }), /* @__PURE__ */ L.createElement("g", {
    id: "ExclamationCircleFill-ExclamationCircleFill",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ L.createElement("g", null, /* @__PURE__ */ L.createElement("rect", {
    id: "ExclamationCircleFill-\u77E9\u5F62",
    fill: "#D76060",
    opacity: 0,
    x: 0,
    y: 0,
    width: 48,
    height: 48
  }), /* @__PURE__ */ L.createElement("path", {
    d: "M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M25.1,31 L22.9,31 C22.6790861,31 22.5,31.1790861 22.5,31.4 L22.5,31.4 L22.5,33.6 C22.5,33.8209139 22.6790861,34 22.9,34 L22.9,34 L25.1,34 C25.3209139,34 25.5,33.8209139 25.5,33.6 L25.5,33.6 L25.5,31.4 C25.5,31.1790861 25.3209139,31 25.1,31 L25.1,31 Z M25.1,14 L22.9,14 C22.6790861,14 22.5,14.1790861 22.5,14.4 L22.5,14.4 L22.5,27.6 C22.5,27.8209139 22.6790861,28 22.9,28 L22.9,28 L25.1,28 C25.3209139,28 25.5,27.8209139 25.5,27.6 L25.5,27.6 L25.5,14.4 C25.5,14.1790861 25.3209139,14 25.1,14 L25.1,14 Z",
    id: "ExclamationCircleFill-\u5F62\u72B6\u7ED3\u5408",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}
function r1(e10) {
  return /* @__PURE__ */ L.createElement("svg", Object.assign({
    width: "1em",
    height: "1em",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, e10, {
    style: Object.assign({
      verticalAlign: "-0.125em"
    }, e10.style),
    className: ["antd-mobile-icon", e10.className].filter(Boolean).join(" ")
  }), /* @__PURE__ */ L.createElement("g", {
    id: "InformationCircleFill-InformationCircleFill",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ L.createElement("g", {
    id: "InformationCircleFill-\u7F16\u7EC4"
  }, /* @__PURE__ */ L.createElement("rect", {
    id: "InformationCircleFill-\u77E9\u5F62",
    fill: "#FFFFFF",
    opacity: 0,
    x: 0,
    y: 0,
    width: 48,
    height: 48
  }), /* @__PURE__ */ L.createElement("path", {
    d: "M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M25.6,20 L21.4,20 C21.1790861,20 21,20.1790861 21,20.4 L21,20.4 L21,22.6 C21,22.8209139 21.1790861,23 21.4,23 L21.4,23 L22.6,23 C22.8209139,23 23,23.1790861 23,23.4 L23,23.4 L23,34.6 C23,34.8209139 23.1790861,35 23.4,35 L23.4,35 L25.6,35 C25.8209139,35 26,34.8209139 26,34.6 L26,34.6 L26,20.4 C26,20.1790861 25.8209139,20 25.6,20 L25.6,20 Z M25.6,14 L23.4,14 C23.1790861,14 23,14.1790861 23,14.4 L23,14.4 L23,16.6 C23,16.8209139 23.1790861,17 23.4,17 L23.4,17 L25.6,17 C25.8209139,17 26,16.8209139 26,16.6 L26,16.6 L26,14.4 C26,14.1790861 25.8209139,14 25.6,14 L25.6,14 Z",
    id: "InformationCircleFill-\u5F62\u72B6\u7ED3\u5408",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}
function e8(e10) {
  return /* @__PURE__ */ L.createElement("svg", Object.assign({
    width: "1em",
    height: "1em",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, e10, {
    style: Object.assign({
      verticalAlign: "-0.125em"
    }, e10.style),
    className: ["antd-mobile-icon", e10.className].filter(Boolean).join(" ")
  }), /* @__PURE__ */ L.createElement("g", {
    id: "LeftOutline-LeftOutline",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ L.createElement("g", {
    id: "LeftOutline-\u7F16\u7EC4"
  }, /* @__PURE__ */ L.createElement("rect", {
    id: "LeftOutline-\u77E9\u5F62",
    fill: "#FFFFFF",
    opacity: 0,
    x: 0,
    y: 0,
    width: 48,
    height: 48
  }), /* @__PURE__ */ L.createElement("path", {
    d: "M31.7053818,5.11219264 L13.5234393,22.6612572 L13.5234393,22.6612572 C12.969699,23.2125856 12.9371261,24.0863155 13.4257204,24.6755735 L13.5234393,24.7825775 L31.7045714,42.8834676 C31.7795345,42.9580998 31.8810078,43 31.9867879,43 L35.1135102,43 C35.3344241,43 35.5135102,42.8209139 35.5135102,42.6 C35.5135102,42.4936115 35.4711279,42.391606 35.3957362,42.316542 L16.7799842,23.7816937 L16.7799842,23.7816937 L35.3764658,5.6866816 C35.5347957,5.53262122 35.5382568,5.27937888 35.3841964,5.121049 C35.3088921,5.04365775 35.205497,5 35.0975148,5 L31.9831711,5 C31.8795372,5 31.7799483,5.04022164 31.7053818,5.11219264 Z",
    id: "LeftOutline-\u8DEF\u5F84",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}
function n8(e10) {
  return /* @__PURE__ */ L.createElement("svg", Object.assign({
    width: "1em",
    height: "1em",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, e10, {
    style: Object.assign({
      verticalAlign: "-0.125em"
    }, e10.style),
    className: ["antd-mobile-icon", e10.className].filter(Boolean).join(" ")
  }), /* @__PURE__ */ L.createElement("g", {
    id: "QuestionCircleOutline-QuestionCircleOutline",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ L.createElement("g", {
    id: "QuestionCircleOutline-\u7F16\u7EC4"
  }, /* @__PURE__ */ L.createElement("rect", {
    id: "QuestionCircleOutline-\u77E9\u5F62",
    fill: "#FFFFFF",
    opacity: 0,
    x: 0,
    y: 0,
    width: 48,
    height: 48
  }), /* @__PURE__ */ L.createElement("path", {
    d: "M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M24,5 C13.5065898,5 5,13.5065898 5,24 C5,34.4934102 13.5065898,43 24,43 C34.4934102,43 43,34.4934102 43,24 C43,13.5065898 34.4934102,5 24,5 Z M26,32.4 L26,34.6 C26,34.8209139 25.8209139,35 25.6,35 L23.4,35 C23.1790861,35 23,34.8209139 23,34.6 L23,32.4 C23,32.1790861 23.1790861,32 23.4,32 L25.6,32 C25.8209139,32 26,32.1790861 26,32.4 Z M24,12 C27.8659932,12 31,15.1340068 31,19 C31,22.1706393 28.8919961,24.8489278 26.0010432,25.7098107 L26.0001268,28.6 C25.9999299,28.8208643 25.8208644,28.9998731 25.6,29 L23.4,29 C23.1790861,29 23,28.8209139 23,28.6 L23,23.4 C23,23.1790861 23.1790861,23 23.4,23 L24,23 L24,23 C26.209139,23 28,21.209139 28,19 C28,16.790861 26.209139,15 24,15 C21.790861,15 20,16.790861 20,19 L17,19 C17,15.1340068 20.1340068,12 24,12 Z",
    id: "QuestionCircleOutline-\u5F62\u72B6",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}
function r8(e10) {
  return /* @__PURE__ */ L.createElement("svg", Object.assign({
    width: "1em",
    height: "1em",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, e10, {
    style: Object.assign({
      verticalAlign: "-0.125em"
    }, e10.style),
    className: ["antd-mobile-icon", e10.className].filter(Boolean).join(" ")
  }), /* @__PURE__ */ L.createElement("g", {
    id: "RightOutline-RightOutline",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ L.createElement("g", {
    id: "RightOutline-RightOutlined"
  }, /* @__PURE__ */ L.createElement("rect", {
    id: "RightOutline-\u77E9\u5F62",
    fill: "#FFFFFF",
    opacity: 0,
    x: 0,
    y: 0,
    width: 48,
    height: 48
  }), /* @__PURE__ */ L.createElement("path", {
    d: "M17.3947957,5.11219264 L35.5767382,22.6612572 L35.5767382,22.6612572 C36.1304785,23.2125856 36.1630514,24.0863155 35.6744571,24.6755735 L35.5767382,24.7825775 L17.3956061,42.8834676 C17.320643,42.9580998 17.2191697,43 17.1133896,43 L13.9866673,43 C13.7657534,43 13.5866673,42.8209139 13.5866673,42.6 C13.5866673,42.4936115 13.6290496,42.391606 13.7044413,42.316542 L32.3201933,23.7816937 L32.3201933,23.7816937 L13.7237117,5.6866816 C13.5653818,5.53262122 13.5619207,5.27937888 13.7159811,5.121049 C13.7912854,5.04365775 13.8946805,5 14.0026627,5 L17.1170064,5 C17.2206403,5 17.3202292,5.04022164 17.3947957,5.11219264 Z",
    id: "RightOutline-right",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}
function i8(e10) {
  return /* @__PURE__ */ L.createElement("svg", Object.assign({
    width: "1em",
    height: "1em",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, e10, {
    style: Object.assign({
      verticalAlign: "-0.125em"
    }, e10.style),
    className: ["antd-mobile-icon", e10.className].filter(Boolean).join(" ")
  }), /* @__PURE__ */ L.createElement("g", {
    id: "SearchOutline-SearchOutline",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ L.createElement("g", {
    id: "SearchOutline-\u7F16\u7EC4"
  }, /* @__PURE__ */ L.createElement("rect", {
    id: "SearchOutline-\u77E9\u5F62",
    fill: "#FFFFFF",
    opacity: 0,
    x: 0,
    y: 0,
    width: 48,
    height: 48
  }), /* @__PURE__ */ L.createElement("path", {
    d: "M10.2434135,10.1505371 C17.2346315,3.28315429 28.5696354,3.28315429 35.5608534,10.1505371 C42.3159331,16.7859644 42.5440954,27.4048667 36.2453405,34.3093889 L43.7095294,41.6422249 C43.8671196,41.7970419 43.8693677,42.0502979 43.7145508,42.2078881 C43.7128864,42.2095822 43.7112069,42.2112616 43.7095126,42.2129259 L42.1705322,43.7246464 C42.014915,43.8775072 41.7655181,43.8775006 41.6099089,43.7246316 L34.0775268,36.3248916 L34.0775268,36.3248916 C27.0485579,41.8551751 16.7593545,41.4200547 10.2434135,35.0195303 C3.25219551,28.1521474 3.25219551,17.0179199 10.2434135,10.1505371 Z M12.3532001,12.2229532 C6.52718516,17.9457722 6.52718516,27.2242951 12.3532001,32.9471142 C18.1792151,38.6699332 27.6250517,38.6699332 33.4510667,32.9471142 C39.2770817,27.2242951 39.2770817,17.9457722 33.4510667,12.2229532 C27.6250517,6.50013419 18.1792151,6.50013419 12.3532001,12.2229532 Z",
    id: "SearchOutline-\u5F62\u72B6",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}
function a8(e10) {
  return /* @__PURE__ */ L.createElement("svg", Object.assign({
    width: "1em",
    height: "1em",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, e10, {
    style: Object.assign({
      verticalAlign: "-0.125em"
    }, e10.style),
    className: ["antd-mobile-icon", e10.className].filter(Boolean).join(" ")
  }), /* @__PURE__ */ L.createElement("g", {
    id: "SoundOutline-SoundOutline",
    stroke: "none",
    strokeWidth: 1,
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ L.createElement("g", {
    id: "SoundOutline-\u7F16\u7EC4"
  }, /* @__PURE__ */ L.createElement("rect", {
    id: "SoundOutline-\u77E9\u5F62",
    fill: "#FFFFFF",
    opacity: 0,
    x: 0,
    y: 0,
    width: 48,
    height: 48
  }), /* @__PURE__ */ L.createElement("path", {
    d: "M28.267333,7.42364522 C28.6217345,7.94869119 28.8108515,8.56559899 28.8108515,9.19662571 L28.8108515,38.803714 C28.8108515,40.568974 27.3619563,42 25.5746535,42 C24.9357472,42 24.311136,41.8132153 23.7795338,41.4631847 L13.5176584,34.7058449 L8.3149307,34.706256 C5.93186028,34.706256 4,32.7982213 4,30.4445413 L4,17.6593971 C4,15.3057171 5.93186028,13.3976824 8.3149307,13.3976824 L13.3601634,13.3972713 L23.7795338,6.53715498 C25.2666597,5.55796489 27.2759158,5.95486009 28.267333,7.42364522 Z M40.4649231,8.99868666 C40.5511218,9.17742383 40.619996,9.32223121 40.6715457,9.43310881 C42.8085201,14.0295034 44,19.1437027 44,24.532755 C44,29.7837404 42.8687892,34.7737758 40.8339269,39.2781083 C40.7469512,39.4706362 40.6237802,39.7330988 40.4644141,40.0654961 C40.3689469,40.2647533 40.1300031,40.3488277 39.9307715,40.2533072 C39.9306414,40.2532448 39.9305113,40.2531824 39.9303812,40.2531198 C39.6706542,40.1282492 39.4751102,40.0342363 39.3437492,39.9710811 C38.9410401,39.777468 38.6130663,39.619786 38.3598279,39.498035 C38.2070716,39.4245934 38.0007263,39.3253875 37.740792,39.2004172 C37.5419104,39.104853 37.4580092,38.8662856 37.5532468,38.6672473 C37.7034937,38.3532445 37.8197479,38.104744 37.9020095,37.9217457 C39.7416376,33.8293278 40.763802,29.2989389 40.763802,24.532755 C40.763802,19.6931433 39.7099001,15.0966478 37.8164042,10.9549334 C37.7526807,10.8155487 37.6652043,10.6300308 37.5539748,10.3983796 C37.4585265,10.1993116 37.5423279,9.96050973 37.7412949,9.8648511 C37.9298799,9.7741839 38.0818373,9.70112639 38.1971671,9.64567856 C38.5403397,9.48068928 39.0100918,9.2548436 39.6064234,8.9681415 C39.6867211,8.9295363 39.7949893,8.87748349 39.9312282,8.81198307 C40.1301627,8.71623553 40.3690201,8.79982709 40.4649231,8.99868666 Z M24.954689,9.60481048 L14.4401642,16.5275765 C14.3748695,16.5705665 14.2984086,16.5934809 14.2202323,16.5934873 L8.3149307,16.5939685 L8.3149307,16.5939685 C7.76171792,16.5939685 7.30576856,17.0052668 7.24345545,17.5351457 L7.23619803,17.6593971 L7.23619803,30.4445413 C7.23619803,30.9909313 7.65263219,31.4412574 8.18892037,31.502802 L8.31467178,31.50997 L14.3775506,31.5094909 C14.4557573,31.5094847 14.5322502,31.5324045 14.5975676,31.5754153 L24.9546682,38.39546 C25.139173,38.5169545 25.3872345,38.4658746 25.508729,38.2813698 C25.5517339,38.2160614 25.5746535,38.1395804 25.5746535,38.0613845 L25.5746535,9.93889975 C25.5746535,9.71798585 25.3955674,9.53889975 25.1746535,9.53889975 C25.0964661,9.53889975 25.019993,9.56181436 24.954689,9.60481048 Z M34.6436115,11.798648 C34.7547335,12.030794 34.8419854,12.2167889 34.9053671,12.3566328 C36.590502,16.0746763 37.5276039,20.1956294 37.5276039,24.532755 C37.5276039,28.7641394 36.635639,32.7897635 35.0272837,36.4362183 C34.9380427,36.6385449 34.8101552,36.9146706 34.6436211,37.2645952 C34.5486602,37.4640326 34.3100191,37.5487723 34.1105639,37.4538487 C34.1101091,37.4536323 34.1096547,37.453415 34.1092007,37.4531968 C33.9190573,37.3618222 33.7721424,37.2912213 33.6684561,37.2413942 C33.186467,37.0097713 32.80073,36.824403 32.5112451,36.6852892 C32.3647538,36.6148919 32.1675294,36.5201144 31.9195719,36.4009569 C31.7210538,36.3055358 31.6370188,36.067582 31.7316042,35.8686644 C31.8690322,35.5796464 31.9753727,35.3500122 32.0506255,35.1797617 C33.4919206,31.9190071 34.2914059,28.3180945 34.2914059,24.532755 C34.2914059,20.6930477 33.46879,17.0431031 31.9881259,13.7454591 C31.9261905,13.6075203 31.840749,13.424362 31.7318014,13.1959842 C31.636885,12.9969991 31.7208632,12.7587263 31.919573,12.6632348 C32.0929373,12.5799233 32.2332164,12.5125112 32.3404102,12.4609985 C32.6888449,12.2935556 33.1655706,12.0644616 33.7705875,11.7737163 C33.8540198,11.7336223 33.9670458,11.6793068 34.1096655,11.6107699 C34.3087736,11.5152168 34.5476881,11.5990382 34.6433466,11.7980956 C34.643435,11.7982797 34.6435233,11.7984638 34.6436115,11.798648 Z",
    id: "SoundOutline-\u5F62\u72B6",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
}
var i1 = {
  closeOnMaskClick: !1,
  destroyOnClose: !1,
  disableBodyScroll: !0,
  forceRender: !1,
  getContainer: () => document.body,
  mask: !0,
  showCloseButton: !1,
  stopPropagation: ["click"],
  visible: !1
};
function a1(e10) {
  let [t, n] = (0, import_react2.useState)(e10);
  return Ce(() => {
    n(e10);
  }, [e10]), t;
}
var Ki = "adm-popup", o8 = Object.assign(Object.assign({}, i1), {
  position: "bottom"
}), s8 = (e10) => {
  let t = Z(o8, e10), n = V(`${Ki}-body`, t.bodyClassName, `${Ki}-body-position-${t.position}`), [r, i] = (0, import_react2.useState)(t.visible);
  Ce(() => {
    t.visible && i(!0);
  }, [t.visible]);
  let a = (0, import_react2.useRef)(null);
  Ua(a, t.disableBodyScroll && r ? "strict" : !1);
  let o = sl(), {
    percent: s
  } = Ne({
    percent: t.visible ? 0 : 100,
    config: {
      precision: 0.1,
      mass: 0.4,
      tension: 300,
      friction: 30
    },
    onRest: () => {
      var d, f;
      o.current || (i(t.visible), t.visible ? (d = t.afterShow) === null || d === void 0 || d.call(t) : (f = t.afterClose) === null || f === void 0 || f.call(t));
    }
  }), c = a1(r && t.visible), u = tn(t.stopPropagation, j(t, import_react2.default.createElement("div", {
    className: Ki,
    onClick: t.onClick,
    style: {
      display: r ? void 0 : "none"
    }
  }, t.mask && import_react2.default.createElement(Ei, {
    visible: c,
    forceRender: t.forceRender,
    destroyOnClose: t.destroyOnClose,
    onMaskClick: (d) => {
      var f, m;
      (f = t.onMaskClick) === null || f === void 0 || f.call(t, d), t.closeOnMaskClick && ((m = t.onClose) === null || m === void 0 || m.call(t));
    },
    className: t.maskClassName,
    style: t.maskStyle,
    disableBodyScroll: !1,
    stopPropagation: t.stopPropagation
  }), import_react2.default.createElement(ue.div, {
    className: n,
    style: Object.assign(Object.assign({}, t.bodyStyle), {
      transform: s.to((d) => t.position === "bottom" ? `translate(0, ${d}%)` : t.position === "top" ? `translate(0, -${d}%)` : t.position === "left" ? `translate(-${d}%, 0)` : t.position === "right" ? `translate(${d}%, 0)` : "none")
    }),
    ref: a
  }, t.showCloseButton && import_react2.default.createElement("a", {
    className: V(`${Ki}-close-icon`, "adm-plain-anchor"),
    onClick: () => {
      var d;
      (d = t.onClose) === null || d === void 0 || d.call(t);
    }
  }, import_react2.default.createElement(Ci, null)), t.children))));
  return import_react2.default.createElement(yr, {
    active: r,
    forceRender: t.forceRender,
    destroyOnClose: t.destroyOnClose
  }, gr(t.getContainer, u));
}, $i = s8, wu = "adm-safe-area", l8 = (e10) => j(e10, import_react2.default.createElement("div", {
  className: V(wu, `${wu}-position-${e10.position}`)
})), br = l8, xa = Object.assign({}, $m), {
  version: c8,
  render: u8,
  unmountComponentAtNode: f8
} = xa, ro;
try {
  Number((c8 || "").split(".")[0]) >= 18 && xa.createRoot && (ro = xa.createRoot);
} catch {
}
function Eu(e10) {
  let {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: t
  } = xa;
  t && typeof t == "object" && (t.usingClientEntryPoint = e10);
}
var _a = "__antd_mobile_root__";
function d8(e10, t) {
  u8(e10, t);
}
function m8(e10, t) {
  Eu(!0);
  let n = t[_a] || ro(t);
  Eu(!1), n.render(e10), t[_a] = n;
}
function h8(e10, t) {
  if (ro) {
    m8(e10, t);
    return;
  }
  d8(e10, t);
}
function p8(e10) {
  return f8(e10);
}
function v8(e10) {
  return ye(this, void 0, void 0, function* () {
    return Promise.resolve().then(() => {
      var t;
      (t = e10[_a]) === null || t === void 0 || t.unmount(), delete e10[_a];
    });
  });
}
function g8(e10) {
  return ro ? v8(e10) : p8(e10);
}
function xi(e10) {
  let t = document.createElement("div");
  document.body.appendChild(t);
  function n() {
    g8(t) && t.parentNode && t.parentNode.removeChild(t);
  }
  return h8(e10, t), n;
}
function wr(e10) {
  let t = import_react2.default.forwardRef((i, a) => {
    let [o, s] = (0, import_react2.useState)(!1), c = (0, import_react2.useRef)(!1), [u, d] = (0, import_react2.useState)(e10), f = (0, import_react2.useRef)(0);
    (0, import_react2.useEffect)(() => {
      c.current ? g() : s(!0);
    }, []);
    function m() {
      var p, h;
      c.current = !0, s(!1), (h = (p = u.props).onClose) === null || h === void 0 || h.call(p);
    }
    function g() {
      var p, h;
      r(), (h = (p = u.props).afterClose) === null || h === void 0 || h.call(p);
    }
    return (0, import_react2.useImperativeHandle)(a, () => ({
      close: m,
      replace: (p) => {
        var h, b;
        f.current++, (b = (h = u.props).afterClose) === null || b === void 0 || b.call(h), d(p);
      }
    })), import_react2.default.cloneElement(u, Object.assign(Object.assign({}, u.props), {
      key: f.current,
      visible: o,
      onClose: m,
      afterClose: g
    }));
  }), n = import_react2.default.createRef(), r = xi(import_react2.default.createElement(t, {
    ref: n
  }));
  return {
    close: () => {
      var i;
      (i = n.current) === null || i === void 0 || i.close();
    },
    replace: (i) => {
      var a;
      (a = n.current) === null || a === void 0 || a.replace(i);
    }
  };
}
var De = "adm-action-sheet", y8 = {
  visible: !1,
  actions: [],
  cancelText: "",
  closeOnAction: !1,
  closeOnMaskClick: !0,
  safeArea: !0,
  destroyOnClose: !1,
  forceRender: !1
}, o1 = (e10) => {
  let t = Z(y8, e10);
  return import_react2.default.createElement($i, {
    visible: t.visible,
    onMaskClick: () => {
      var n, r;
      (n = t.onMaskClick) === null || n === void 0 || n.call(t), t.closeOnMaskClick && ((r = t.onClose) === null || r === void 0 || r.call(t));
    },
    afterClose: t.afterClose,
    className: V(`${De}-popup`, t.popupClassName),
    style: t.popupStyle,
    getContainer: t.getContainer,
    destroyOnClose: t.destroyOnClose,
    forceRender: t.forceRender
  }, j(t, import_react2.default.createElement("div", {
    className: De
  }, t.extra && import_react2.default.createElement("div", {
    className: `${De}-extra`
  }, t.extra), import_react2.default.createElement("div", {
    className: `${De}-button-list`
  }, t.actions.map((n, r) => import_react2.default.createElement("div", {
    key: n.key,
    className: `${De}-button-item-wrapper`
  }, import_react2.default.createElement("a", {
    className: V("adm-plain-anchor", `${De}-button-item`, {
      [`${De}-button-item-danger`]: n.danger,
      [`${De}-button-item-disabled`]: n.disabled,
      [`${De}-button-item-bold`]: n.bold
    }),
    onClick: () => {
      var i, a, o;
      (i = n.onClick) === null || i === void 0 || i.call(n), (a = t.onAction) === null || a === void 0 || a.call(t, n, r), t.closeOnAction && ((o = t.onClose) === null || o === void 0 || o.call(t));
    }
  }, import_react2.default.createElement("div", {
    className: `${De}-button-item-name`
  }, n.text), n.description && import_react2.default.createElement("div", {
    className: `${De}-button-item-description`
  }, n.description))))), t.cancelText && import_react2.default.createElement("div", {
    className: `${De}-cancel`
  }, import_react2.default.createElement("div", {
    className: `${De}-button-item-wrapper`
  }, import_react2.default.createElement("a", {
    className: V("adm-plain-anchor", `${De}-button-item`),
    onClick: () => {
      var n;
      (n = t.onClose) === null || n === void 0 || n.call(t);
    }
  }, import_react2.default.createElement("div", {
    className: `${De}-button-item-name`
  }, t.cancelText)))), t.safeArea && import_react2.default.createElement(br, {
    position: "bottom"
  }))));
};
function b8(e10) {
  return wr(import_react2.default.createElement(o1, Object.assign({}, e10)));
}
var kk = ie(o1, {
  show: b8
}), Cu = "adm-auto-center", w8 = (e10) => j(e10, import_react2.default.createElement("div", {
  className: Cu
}, import_react2.default.createElement("div", {
  className: `${Cu}-content`
}, e10.children))), ai = w8, xl = {}, E8 = Ct && Ct.__importDefault || function(e10) {
  return e10 && e10.__esModule ? e10 : { default: e10 };
};
Object.defineProperty(xl, "__esModule", { value: !0 });
var _l = xl.staged = void 0, C8 = E8(import_react2.default);
function s1(e10) {
  return typeof e10 == "function" ? C8.default.createElement($8, { stage: e10 }) : e10;
}
function $8(e10) {
  let t = e10.stage();
  return s1(t);
}
function x8(e10) {
  return function(n, r) {
    let i = e10(n, r);
    return s1(i);
  };
}
_l = xl.staged = x8;
function xn(e10) {
  return typeof e10 == "number" ? `${e10}px` : e10;
}
var _8 = (e10) => {
  let t = (0, import_react2.useRef)(null), [n] = B5(t);
  return (0, import_react2.useEffect)(() => {
    n && e10.onActive();
  }, [n]), import_react2.default.createElement("div", {
    ref: t
  });
}, _i = rd(Ce), k8 = () => import_react2.default.createElement("svg", {
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg"
}, import_react2.default.createElement("path", {
  d: "M41.396 6.234c1.923 0 3.487 1.574 3.487 3.505v29.14c0 1.937-1.568 3.51-3.491 3.51H6.604c-1.923 0-3.487-1.573-3.487-3.51V9.745c0-1.936 1.564-3.51 3.487-3.51Zm0 2.847H6.604c-.355 0-.654.3-.654.658V34.9l5.989-8.707a2.373 2.373 0 0 1 1.801-1.005 2.405 2.405 0 0 1 1.933.752l4.182 4.525 7.58-11.005a2.374 2.374 0 0 1 1.96-1.01c.79 0 1.532.38 1.966 1.01L42.05 34.89V9.74a.664.664 0 0 0-.654-.658Zm-28.305 2.763a3.119 3.119 0 0 1 3.117 3.117 3.119 3.119 0 0 1-3.117 3.117 3.122 3.122 0 0 1-3.117-3.117 3.119 3.119 0 0 1 3.117-3.117Z",
  fill: "#DBDBDB",
  fillRule: "nonzero"
})), O8 = () => import_react2.default.createElement("svg", {
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg"
}, import_react2.default.createElement("path", {
  d: "M19.233 6.233 17.42 9.08l-10.817.001a.665.665 0 0 0-.647.562l-.007.096V34.9l5.989-8.707a2.373 2.373 0 0 1 1.801-1.005 2.415 2.415 0 0 1 1.807.625l.126.127 4.182 4.525 2.267-3.292 5.461 7.841-4.065 7.375H6.604c-1.86 0-3.382-1.47-3.482-3.317l-.005-.192V9.744c0-1.872 1.461-3.405 3.296-3.505l.19-.005h12.63Zm22.163 0c1.86 0 3.382 1.472 3.482 3.314l.005.192v29.14a3.507 3.507 0 0 1-3.3 3.505l-.191.006H27.789l3.63-6.587.06-.119a1.87 1.87 0 0 0-.163-1.853l-6.928-9.949 3.047-4.422a2.374 2.374 0 0 1 1.96-1.01 2.4 2.4 0 0 1 1.86.87l.106.14L42.05 34.89V9.74a.664.664 0 0 0-.654-.658H21.855l1.812-2.848h17.73Zm-28.305 5.611c.794 0 1.52.298 2.07.788l-.843 1.325-.067.114a1.87 1.87 0 0 0 .11 1.959l.848 1.217c-.556.515-1.3.83-2.118.83a3.122 3.122 0 0 1-3.117-3.116 3.119 3.119 0 0 1 3.117-3.117Z",
  fill: "#DBDBDB",
  fillRule: "nonzero"
})), ka = "adm-image", S8 = {
  fit: "fill",
  placeholder: import_react2.default.createElement("div", {
    className: `${ka}-tip`
  }, import_react2.default.createElement(k8, null)),
  fallback: import_react2.default.createElement("div", {
    className: `${ka}-tip`
  }, import_react2.default.createElement(O8, null)),
  lazy: !1,
  draggable: !1
}, F8 = _l((e10) => {
  let t = Z(S8, e10), [n, r] = (0, import_react2.useState)(!1), [i, a] = (0, import_react2.useState)(!1), o = (0, import_react2.useRef)(null), s = t.src, c = t.srcSet, [u, d] = (0, import_react2.useState)(!t.lazy);
  s = u ? t.src : void 0, c = u ? t.srcSet : void 0, _i(() => {
    r(!1), a(!1);
  }, [s]);
  function f() {
    if (i)
      return import_react2.default.createElement(import_react2.default.Fragment, null, t.fallback);
    let g = import_react2.default.createElement("img", {
      className: `${ka}-img`,
      src: s,
      alt: t.alt,
      onClick: t.onClick,
      onLoad: (p) => {
        var h;
        r(!0), (h = t.onLoad) === null || h === void 0 || h.call(t, p);
      },
      onError: (p) => {
        var h;
        a(!0), (h = t.onError) === null || h === void 0 || h.call(t, p);
      },
      style: {
        objectFit: t.fit,
        display: n ? "block" : "none"
      },
      crossOrigin: t.crossOrigin,
      decoding: t.decoding,
      loading: t.loading,
      referrerPolicy: t.referrerPolicy,
      sizes: t.sizes,
      srcSet: c,
      useMap: t.useMap,
      draggable: t.draggable
    });
    return import_react2.default.createElement(import_react2.default.Fragment, null, !n && t.placeholder, g);
  }
  let m = {};
  return t.width && (m["--width"] = xn(t.width), m.width = xn(t.width)), t.height && (m["--height"] = xn(t.height), m.height = xn(t.height)), j(t, import_react2.default.createElement("div", {
    ref: o,
    className: ka,
    style: m,
    onClick: t.onContainerClick
  }, t.lazy && !u && import_react2.default.createElement(_8, {
    onActive: () => {
      d(!0);
    }
  }), f()));
}), io = F8, P8 = (0, import_react2.memo)(() => import_react2.default.createElement("svg", {
  className: "adm-avatar-fallback",
  width: "88px",
  height: "88px",
  viewBox: "0 0 88 88",
  version: "1.1"
}, import_react2.default.createElement("title", null, "\u7F16\u7EC4 3"), import_react2.default.createElement("defs", null, import_react2.default.createElement("polygon", {
  id: "path-1",
  points: "0 0 88 0 88 88 0 88"
})), import_react2.default.createElement("g", {
  id: "\u9875\u9762-1",
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, import_react2.default.createElement("g", {
  id: "\u8BED\u96C0",
  transform: "translate(-495.000000, -71.000000)"
}, import_react2.default.createElement("g", {
  id: "\u7F16\u7EC4-3",
  transform: "translate(495.000000, 71.000000)"
}, import_react2.default.createElement("mask", {
  id: "mask-2",
  fill: "white"
}, import_react2.default.createElement("use", {
  xlinkHref: "#path-1"
})), import_react2.default.createElement("use", {
  id: "Mask",
  fill: "#EEEEEE",
  fillRule: "nonzero",
  xlinkHref: "#path-1"
}), import_react2.default.createElement("path", {
  d: "M44.5707528,16 L43.4292117,16 L42.9575197,16.0086403 L42.9575195,16.0086403 C36.5215787,16.2615464 31.4341803,21.5678078 31.4344832,28.0273864 L31.4344832,34.7776551 L31.4495601,35.3716788 L31.4495593,35.3716628 C31.599687,38.5368723 32.9422041,41.5269327 35.2058513,43.7376716 L38.2147759,46.6775505 L38.4086219,46.8913989 C38.7747759,47.3385365 38.9750835,47.9001589 38.9750835,48.4833848 L38.9750835,48.8938006 L38.9556989,49.1897326 L38.9556989,49.1897325 C38.8577746,49.9812662 38.3754713,50.67284 37.667703,51.036605 L18.7375269,60.7440265 L18.4101421,60.9276334 L18.4101423,60.9276333 C16.9141658,61.8418636 16.0009389,63.4714674 16,65.2283758 L16,66.070809 L16.0129231,66.3948217 C16.1766149,68.4123376 17.860922,70 19.91569,70 L68.0843101,70 L68.08431,70 C70.2460467,70 71.9988087,68.243122 72,66.0751224 L72,65.2326893 C72,63.3382982 70.9446194,61.6037466 69.2624598,60.7440295 L50.3322837,51.036608 L50.3322835,51.0366079 C49.5291218,50.6249082 49.0240448,49.7962466 49.024903,48.8916436 L49.024903,48.4812278 C49.024903,47.8029608 49.3005955,47.1527756 49.7852106,46.6775603 L52.7941352,43.7376813 L52.7941354,43.7376811 C55.204308,41.3832325 56.5636029,38.151975 56.5633606,34.7776456 L56.5633606,28.0273769 L56.5633606,28.0273774 C56.5633606,21.3848531 51.1940878,16 44.5707524,16 L44.5707528,16 Z",
  id: "\u5F62\u72B6",
  fill: "#CCCCCC",
  fillRule: "nonzero",
  mask: "url(#mask-2)"
}))))));
var A8 = {
  fallback: import_react2.default.createElement(P8, null),
  fit: "cover"
};
var In = "adm-badge", l1 = import_react2.default.createElement(import_react2.default.Fragment, null), R8 = (e10) => {
  let {
    content: t,
    color: n,
    children: r
  } = e10, i = t === l1, a = V(In, !!r && `${In}-fixed`, i && `${In}-dot`, e10.bordered && `${In}-bordered`), o = t || t === 0 ? j(e10, import_react2.default.createElement("div", {
    className: a,
    style: {
      "--color": n
    }
  }, !i && import_react2.default.createElement("div", {
    className: `${In}-content`
  }, t))) : null;
  return r ? import_react2.default.createElement("div", {
    className: V(`${In}-wrapper`, e10.wrapperClassName),
    style: e10.wrapperStyle
  }, r, o) : o;
}, ws = ie(R8, {
  dot: l1
}), M8 = "adm-dot-loading", I8 = {
  default: "var(--adm-color-weak)",
  primary: "var(--adm-color-primary)",
  white: "var(--adm-color-white)"
}, L8 = {
  color: "default"
}, c1 = (0, import_react2.memo)((e10) => {
  var t;
  let n = Z(L8, e10);
  return j(n, import_react2.default.createElement("div", {
    style: {
      color: (t = I8[n.color]) !== null && t !== void 0 ? t : n.color
    },
    className: V("adm-loading", M8)
  }, import_react2.default.createElement("svg", {
    height: "1em",
    viewBox: "0 0 100 40",
    style: {
      verticalAlign: "-0.125em"
    }
  }, import_react2.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, import_react2.default.createElement("g", {
    transform: "translate(-100.000000, -71.000000)"
  }, import_react2.default.createElement("g", {
    transform: "translate(95.000000, 71.000000)"
  }, import_react2.default.createElement("g", {
    transform: "translate(5.000000, 0.000000)"
  }, [0, 1, 2].map((r) => import_react2.default.createElement("rect", {
    key: r,
    fill: "currentColor",
    x: 20 + r * 26,
    y: "16",
    width: "8",
    height: "8",
    rx: "2"
  }, import_react2.default.createElement("animate", {
    attributeName: "y",
    from: "16",
    to: "16",
    dur: "2s",
    begin: `${r * 0.2}s`,
    repeatCount: "indefinite",
    values: "16; 6; 26; 16; 16",
    keyTimes: "0; 0.1; 0.3; 0.4; 1"
  }))))))))));
}), u1 = c1;
function f1(e10) {
  return !!e10 && typeof e10 == "object" && typeof e10.then == "function";
}
function D8() {
  return sr ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1;
}
var Je = "adm-button", V8 = {
  color: "default",
  fill: "solid",
  block: !1,
  loading: !1,
  loadingIcon: import_react2.default.createElement(u1, {
    color: "currentColor"
  }),
  type: "button",
  shape: "default",
  size: "middle"
}, j8 = (0, import_react2.forwardRef)((e10, t) => {
  let n = Z(V8, e10), [r, i] = (0, import_react2.useState)(!1), a = (0, import_react2.useRef)(null), o = n.loading === "auto" ? r : n.loading, s = n.disabled || o;
  (0, import_react2.useImperativeHandle)(t, () => ({
    get nativeElement() {
      return a.current;
    }
  }));
  let c = (u) => ye(void 0, void 0, void 0, function* () {
    if (!n.onClick)
      return;
    let d = n.onClick(u);
    if (f1(d))
      try {
        i(!0), yield d, i(!1);
      } catch (f) {
        throw i(!1), f;
      }
  });
  return j(n, import_react2.default.createElement("button", {
    ref: a,
    type: n.type,
    onClick: c,
    className: V(Je, n.color ? `${Je}-${n.color}` : null, {
      [`${Je}-block`]: n.block,
      [`${Je}-disabled`]: s,
      [`${Je}-fill-outline`]: n.fill === "outline",
      [`${Je}-fill-none`]: n.fill === "none",
      [`${Je}-mini`]: n.size === "mini",
      [`${Je}-small`]: n.size === "small",
      [`${Je}-large`]: n.size === "large",
      [`${Je}-loading`]: o
    }, `${Je}-shape-${n.shape}`),
    disabled: s,
    onMouseDown: n.onMouseDown,
    onMouseUp: n.onMouseUp,
    onTouchStart: n.onTouchStart,
    onTouchEnd: n.onTouchEnd
  }, o ? import_react2.default.createElement("div", {
    className: `${Je}-loading-wrapper`
  }, n.loadingIcon, n.loadingText) : import_react2.default.createElement("span", null, n.children)));
}), nn = j8, $u = () => import_react2.default.createElement("svg", {
  height: "1em",
  viewBox: "0 0 44 44"
}, import_react2.default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, import_react2.default.createElement("g", {
  transform: "translate(-100.000000, -22.000000)"
}, import_react2.default.createElement("g", {
  transform: "translate(100.000000, 22.000000)"
}, import_react2.default.createElement("rect", {
  x: "0",
  y: "0",
  width: "44",
  height: "44"
}), import_react2.default.createElement("g", {
  transform: "translate(12.000000, 4.000000)",
  fill: "currentColor",
  fillRule: "nonzero"
}, import_react2.default.createElement("path", {
  d: "M19.4833058,2.71985611 L3.53051139,17.0699744 C3.0173831,17.5315665 2.97522952,18.3220903 3.43630803,18.8357433 L3.43630796,18.8357432 C3.46601289,18.8688164 3.49745845,18.9002801 3.53051133,18.9300007 L19.4833057,33.2801611 C20.1234001,33.8559077 20.1759552,34.8420707 19.6007967,35.4827774 C19.0256382,36.1235263 18.0404824,36.1761351 17.400388,35.6003885 L1.44759367,21.2502703 L1.4475933,21.25027 C1.33208743,21.1463692 1.22220259,21.036372 1.11840792,20.920748 C-0.49302969,19.1256817 -0.345639536,16.3628317 1.4475933,14.7497465 L17.4003877,0.399628282 C18.0404821,-0.176160428 19.0256378,-0.123509422 19.6007963,0.517239417 C20.1759548,1.1579461 20.1233997,2.14410915 19.4833053,2.7198557 L19.4833058,2.71985611 Z"
})))))), xu = () => import_react2.default.createElement("svg", {
  height: "1em",
  viewBox: "0 0 44 44"
}, import_react2.default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, import_react2.default.createElement("g", {
  transform: "translate(-24.000000, -22.000000)"
}, import_react2.default.createElement("g", {
  transform: "translate(24.000000, 22.000000)"
}, import_react2.default.createElement("rect", {
  x: "0",
  y: "0",
  width: "44",
  height: "44"
}), import_react2.default.createElement("g", {
  transform: "translate(7.000000, 4.000000)",
  fill: "currentColor",
  fillRule: "nonzero"
}, import_react2.default.createElement("path", {
  d: "M19.4833058,2.71985611 L3.53051139,17.0699744 C3.0173831,17.5315665 2.97522952,18.3220903 3.43630803,18.8357433 L3.43630796,18.8357432 C3.46601289,18.8688164 3.49745845,18.9002801 3.53051133,18.9300007 L19.4833057,33.2801611 C20.1234001,33.8559077 20.1759552,34.8420707 19.6007967,35.4827774 C19.0256382,36.1235263 18.0404824,36.1761351 17.400388,35.6003885 L1.44759367,21.2502703 L1.4475933,21.25027 C1.33208743,21.1463692 1.22220259,21.036372 1.11840792,20.920748 C-0.49302969,19.1256817 -0.345639536,16.3628317 1.4475933,14.7497465 L17.4003877,0.399628282 C18.0404821,-0.176160428 19.0256378,-0.123509422 19.6007963,0.517239417 C20.1759548,1.1579461 20.1233997,2.14410915 19.4833053,2.7198557 L19.4833058,2.71985611 Z"
}), import_react2.default.createElement("path", {
  d: "M19.5305114,17.0699744 C19.0173831,17.5315665 18.9752295,18.3220903 19.436308,18.8357433 C19.4660129,18.8688164 19.4974585,18.9002801 19.5305113,18.9300007 L29.4833057,27.2801611 C30.1234001,27.8559077 30.1759552,28.8420707 29.6007967,29.4827774 C29.0256382,30.1235263 28.0404824,30.1761351 27.400388,29.6003885 L17.4475937,21.2502703 C17.3320874,21.1463692 17.2222026,21.036372 17.1184079,20.920748 C15.5069703,19.1256817 15.6543605,16.3628317 17.4475933,14.7497465 L27.4003877,6.39962828 C28.0404821,5.82383957 29.0256378,5.87649058 29.6007963,6.51723942 C30.1759548,7.1579461 30.1233997,8.14410915 29.4833053,8.7198557 L19.5305114,17.0699744 Z"
})))))), d1 = { exports: {} };
(function(e10, t) {
  (function(n, r) {
    e10.exports = r();
  })(Ct, function() {
    var n = "day";
    return function(r, i, a) {
      var o = function(u) {
        return u.add(4 - u.isoWeekday(), n);
      }, s = i.prototype;
      s.isoWeekYear = function() {
        return o(this).year();
      }, s.isoWeek = function(u) {
        if (!this.$utils().u(u))
          return this.add(7 * (u - this.isoWeek()), n);
        var d, f, m, g, p = o(this), h = (d = this.isoWeekYear(), f = this.$u, m = (f ? a.utc : a)().year(d).startOf("year"), g = 4 - m.isoWeekday(), m.isoWeekday() > 4 && (g += 7), m.add(g, n));
        return p.diff(h, "week") + 1;
      }, s.isoWeekday = function(u) {
        return this.$utils().u(u) ? this.day() || 7 : this.day(this.day() % 7 ? u : u - 7);
      };
      var c = s.startOf;
      s.startOf = function(u, d) {
        var f = this.$utils(), m = !!f.u(d) || d;
        return f.p(u) === "isoweek" ? m ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : c.bind(this)(u, d);
      };
    };
  });
})(d1);
var kl = d1.exports;
function te(e10) {
  let {
    value: t,
    defaultValue: n,
    onChange: r
  } = e10, i = ad(), a = (0, import_react2.useRef)(t !== void 0 ? t : n);
  t !== void 0 && (a.current = t);
  let o = on((s, c = !1) => {
    let u = typeof s == "function" ? s(a.current) : s;
    if (!(!c && u === a.current))
      return a.current = u, i(), r == null ? void 0 : r(u);
  });
  return [a.current, o];
}
function _u(e10, t) {
  return e10 === void 0 || t === null ? null : Array.isArray(t) ? t : [t, t];
}
function Mo(e10) {
  return xe().year(e10.year).month(e10.month - 1).date(1);
}
xe.extend(kl);
var ce = "adm-calendar", B8 = {
  weekStartsOn: "Sunday",
  defaultValue: null,
  allowClear: !0,
  prevMonthButton: import_react2.default.createElement($u, null),
  prevYearButton: import_react2.default.createElement(xu, null),
  nextMonthButton: import_react2.default.createElement($u, null),
  nextYearButton: import_react2.default.createElement(xu, null)
}, W8 = (0, import_react2.forwardRef)((e10, t) => {
  let n = xe(), r = Z(B8, e10), {
    locale: i
  } = $e(), a = [...i.Calendar.markItems];
  if (r.weekStartsOn === "Sunday") {
    let v = a.pop();
    v && a.unshift(v);
  }
  let [o, s] = te({
    value: r.value === void 0 ? void 0 : _u(r.selectionMode, r.value),
    defaultValue: _u(r.selectionMode, r.defaultValue),
    onChange: (v) => {
      var y, E;
      r.selectionMode === "single" ? (y = r.onChange) === null || y === void 0 || y.call(r, v ? v[0] : null) : r.selectionMode === "range" && ((E = r.onChange) === null || E === void 0 || E.call(r, v));
    }
  }), [c, u] = (0, import_react2.useState)(!1), [d, f] = (0, import_react2.useState)(() => xe(o ? o[0] : n).date(1));
  Va(() => {
    var v;
    (v = r.onPageChange) === null || v === void 0 || v.call(r, d.year(), d.month() + 1);
  }, [d]), (0, import_react2.useImperativeHandle)(t, () => ({
    jumpTo: (v) => {
      let y;
      typeof v == "function" ? y = v({
        year: d.year(),
        month: d.month() + 1
      }) : y = v, f(Mo(y));
    },
    jumpToToday: () => {
      f(xe().date(1));
    }
  }));
  let m = (v, y, E) => {
    let $ = d[v](y, E);
    if (v === "subtract" && r.minPage) {
      let k = Mo(r.minPage);
      if ($.isBefore(k, E))
        return;
    }
    if (v === "add" && r.maxPage) {
      let k = Mo(r.maxPage);
      if ($.isAfter(k, E))
        return;
    }
    f(d[v](y, E));
  }, g = import_react2.default.createElement("div", {
    className: `${ce}-header`
  }, import_react2.default.createElement("a", {
    className: `${ce}-arrow-button ${ce}-arrow-button-year`,
    onClick: () => {
      m("subtract", 1, "year");
    }
  }, r.prevYearButton), import_react2.default.createElement("a", {
    className: `${ce}-arrow-button ${ce}-arrow-button-month`,
    onClick: () => {
      m("subtract", 1, "month");
    }
  }, r.prevMonthButton), import_react2.default.createElement("div", {
    className: `${ce}-title`
  }, i.Calendar.renderYearAndMonth(d.year(), d.month() + 1)), import_react2.default.createElement("a", {
    className: V(`${ce}-arrow-button`, `${ce}-arrow-button-right`, `${ce}-arrow-button-right-month`),
    onClick: () => {
      m("add", 1, "month");
    }
  }, r.nextMonthButton), import_react2.default.createElement("a", {
    className: V(`${ce}-arrow-button`, `${ce}-arrow-button-right`, `${ce}-arrow-button-right-year`),
    onClick: () => {
      m("add", 1, "year");
    }
  }, r.nextYearButton)), p = (0, import_react2.useMemo)(() => r.max && xe(r.max), [r.max]), h = (0, import_react2.useMemo)(() => r.min && xe(r.min), [r.min]);
  function b() {
    var v;
    let y = [], E = d.subtract(d.isoWeekday(), "day");
    for (r.weekStartsOn === "Monday" && (E = E.add(1, "day")); y.length < 6 * 7; ) {
      let $ = E, k = !1, A = !1, P = !1, N = !1, T = !1;
      if (o) {
        let [x, S] = o;
        A = $.isSame(x, "day"), P = $.isSame(S, "day"), k = A || P || $.isAfter(x, "day") && $.isBefore(S, "day"), k && (N = (y.length % 7 === 0 || $.isSame($.startOf("month"), "day")) && !A, T = (y.length % 7 === 6 || $.isSame($.endOf("month"), "day")) && !P);
      }
      let O = $.month() === d.month(), _ = r.shouldDisableDate ? r.shouldDisableDate($.toDate()) : p && $.isAfter(p, "day") || h && $.isBefore(h, "day");
      y.push(import_react2.default.createElement("div", {
        key: $.valueOf(),
        className: V(`${ce}-cell`, (_ || !O) && `${ce}-cell-disabled`, O && {
          [`${ce}-cell-today`]: $.isSame(n, "day"),
          [`${ce}-cell-selected`]: k,
          [`${ce}-cell-selected-begin`]: A,
          [`${ce}-cell-selected-end`]: P,
          [`${ce}-cell-selected-row-begin`]: N,
          [`${ce}-cell-selected-row-end`]: T
        }),
        onClick: () => {
          if (!r.selectionMode || _)
            return;
          let x = $.toDate();
          O || f($.clone().date(1));
          function S() {
            if (!r.allowClear || !o)
              return !1;
            let [M, F] = o;
            return $.isSame(M, "date") && $.isSame(F, "day");
          }
          if (r.selectionMode === "single") {
            if (r.allowClear && S()) {
              s(null);
              return;
            }
            s([x, x]);
          } else if (r.selectionMode === "range") {
            if (!o) {
              s([x, x]), u(!0);
              return;
            }
            if (S()) {
              s(null), u(!1);
              return;
            }
            if (c) {
              let M = o[0];
              s(M > x ? [x, M] : [M, x]), u(!1);
            } else
              s([x, x]), u(!0);
          }
        }
      }, import_react2.default.createElement("div", {
        className: `${ce}-cell-top`
      }, r.renderDate ? r.renderDate($.toDate()) : $.date()), import_react2.default.createElement("div", {
        className: `${ce}-cell-bottom`
      }, (v = r.renderLabel) === null || v === void 0 ? void 0 : v.call(r, $.toDate())))), E = E.add(1, "day");
    }
    return y;
  }
  let w = import_react2.default.createElement("div", {
    className: `${ce}-cells`
  }, b()), C = import_react2.default.createElement("div", {
    className: `${ce}-mark`
  }, a.map((v, y) => import_react2.default.createElement("div", {
    key: y,
    className: `${ce}-mark-cell`
  }, v)));
  return j(r, import_react2.default.createElement("div", {
    className: ce
  }, g, C, w));
});
function ki(e10, t) {
  let n = on(e10);
  Ce(() => {
    let r = t.current;
    if (r)
      if (window.ResizeObserver) {
        let i, a = new ResizeObserver(() => {
          i = window.requestAnimationFrame(() => n(r));
        });
        return a.observe(r), () => {
          window.cancelAnimationFrame(i), a.disconnect();
        };
      } else
        n(r);
  }, [t]);
}
function Ol(e10, t, n) {
  let r = on(e10);
  (0, import_react2.useEffect)(() => {
    let i = new MutationObserver(() => {
      r();
    });
    if (t.current)
      return i.observe(t.current, n), () => {
        i.disconnect();
      };
  }, [t]);
}
function _e(e10, t, n) {
  let r = e10;
  return t !== void 0 && (r = Math.max(e10, t)), n !== void 0 && (r = Math.min(r, n)), r;
}
var m1 = (e10, t) => {
  let [{
    scrollLeft: n
  }, r] = Ne(() => ({
    scrollLeft: 0,
    config: {
      tension: 300,
      clamp: !0
    }
  }));
  function i(a = !1) {
    let o = e10.current;
    if (!o || t === void 0)
      return;
    let c = o.children.item(t).children.item(0), u = c.offsetLeft, d = c.offsetWidth, f = o.offsetWidth, m = o.scrollWidth, g = o.scrollLeft;
    if (m - f <= 0)
      return;
    let h = _e(u - (f - d) / 2, 0, m - f);
    r.start({
      scrollLeft: h,
      from: {
        scrollLeft: g
      },
      immediate: a && !n.isAnimating
    });
  }
  return Ce(() => {
    i(!0);
  }, []), _i(() => {
    i();
  }, [t]), Ol(() => {
    i(!0);
  }, e10, {
    subtree: !0,
    childList: !0,
    characterData: !0
  }), {
    scrollLeft: n,
    animate: i
  };
}, Gi = "adm-scroll-mask", Z8 = (e10) => {
  let t = (0, import_react2.useRef)(null), [{
    leftMaskOpacity: n,
    rightMaskOpacity: r
  }, i] = Ne(() => ({
    leftMaskOpacity: 0,
    rightMaskOpacity: 0,
    config: {
      clamp: !0
    }
  })), {
    run: a
  } = za((o = !1) => {
    if (!t.current)
      return;
    let c = e10.scrollTrackRef.current;
    if (!c)
      return;
    let u = c.scrollLeft, d = u > 0, f = u + c.offsetWidth < c.scrollWidth;
    i.start({
      leftMaskOpacity: d ? 1 : 0,
      rightMaskOpacity: f ? 1 : 0,
      immediate: o
    });
  }, {
    wait: 100,
    trailing: !0,
    leading: !0
  });
  return (0, import_react2.useEffect)(() => {
    a(!0);
  }, []), (0, import_react2.useEffect)(() => {
    let o = e10.scrollTrackRef.current;
    if (o)
      return o.addEventListener("scroll", a), () => o.removeEventListener("scroll", a);
  }, []), import_react2.default.createElement(import_react2.default.Fragment, null, import_react2.default.createElement(ue.div, {
    ref: t,
    className: V(Gi, `${Gi}-left`),
    style: {
      opacity: n
    }
  }), import_react2.default.createElement(ue.div, {
    className: V(Gi, `${Gi}-right`),
    style: {
      opacity: r
    }
  }));
}, h1 = Z8, Oa = { exports: {} }, le = {};
var ao = 60103, oo = 60106, Oi = 60107, Si = 60108, Fi = 60114, Pi = 60109, Ni = 60110, Ai = 60112, Ti = 60113, Sl = 60120, Ri = 60115, Mi = 60116, p1 = 60121, v1 = 60122, g1 = 60117, y1 = 60129, b1 = 60131;
typeof Symbol == "function" && Symbol.for && (Te = Symbol.for, ao = Te("react.element"), oo = Te("react.portal"), Oi = Te("react.fragment"), Si = Te("react.strict_mode"), Fi = Te("react.profiler"), Pi = Te("react.provider"), Ni = Te("react.context"), Ai = Te("react.forward_ref"), Ti = Te("react.suspense"), Sl = Te("react.suspense_list"), Ri = Te("react.memo"), Mi = Te("react.lazy"), p1 = Te("react.block"), v1 = Te("react.server.block"), g1 = Te("react.fundamental"), y1 = Te("react.debug_trace_mode"), b1 = Te("react.legacy_hidden"));
var Te;
function pt(e10) {
  if (typeof e10 == "object" && e10 !== null) {
    var t = e10.$$typeof;
    switch (t) {
      case ao:
        switch (e10 = e10.type, e10) {
          case Oi:
          case Fi:
          case Si:
          case Ti:
          case Sl:
            return e10;
          default:
            switch (e10 = e10 && e10.$$typeof, e10) {
              case Ni:
              case Ai:
              case Mi:
              case Ri:
              case Pi:
                return e10;
              default:
                return t;
            }
        }
      case oo:
        return t;
    }
  }
}
var H8 = Pi, z8 = ao, U8 = Ai, q8 = Oi, K8 = Mi, G8 = Ri, Y8 = oo, X8 = Fi, Q8 = Si, J8 = Ti;
le.ContextConsumer = Ni;
le.ContextProvider = H8;
le.Element = z8;
le.ForwardRef = U8;
le.Fragment = q8;
le.Lazy = K8;
le.Memo = G8;
le.Portal = Y8;
le.Profiler = X8;
le.StrictMode = Q8;
le.Suspense = J8;
le.isAsyncMode = function() {
  return !1;
};
le.isConcurrentMode = function() {
  return !1;
};
le.isContextConsumer = function(e10) {
  return pt(e10) === Ni;
};
le.isContextProvider = function(e10) {
  return pt(e10) === Pi;
};
le.isElement = function(e10) {
  return typeof e10 == "object" && e10 !== null && e10.$$typeof === ao;
};
le.isForwardRef = function(e10) {
  return pt(e10) === Ai;
};
le.isFragment = function(e10) {
  return pt(e10) === Oi;
};
le.isLazy = function(e10) {
  return pt(e10) === Mi;
};
le.isMemo = function(e10) {
  return pt(e10) === Ri;
};
le.isPortal = function(e10) {
  return pt(e10) === oo;
};
le.isProfiler = function(e10) {
  return pt(e10) === Fi;
};
le.isStrictMode = function(e10) {
  return pt(e10) === Si;
};
le.isSuspense = function(e10) {
  return pt(e10) === Ti;
};
le.isValidElementType = function(e10) {
  return typeof e10 == "string" || typeof e10 == "function" || e10 === Oi || e10 === Fi || e10 === y1 || e10 === Si || e10 === Ti || e10 === Sl || e10 === b1 || typeof e10 == "object" && e10 !== null && (e10.$$typeof === Mi || e10.$$typeof === Ri || e10.$$typeof === Pi || e10.$$typeof === Ni || e10.$$typeof === Ai || e10.$$typeof === g1 || e10.$$typeof === p1 || e10[0] === v1);
};
le.typeOf = pt;
(function(e10) {
  e10.exports = le;
})(Oa);
function sn(e10, t) {
  let n = 0;
  function r(i) {
    import_react2.default.Children.forEach(i, (a) => {
      Oa.exports.isFragment(a) ? r(a.props.children) : (t(a, n), n += 1);
    });
  }
  r(e10);
}
var Wt = "adm-capsule-tabs", ey = () => null, ty = (e10) => {
  var t;
  let n = (0, import_react2.useRef)(null), r = (0, import_react2.useRef)(null), i = {}, a = null, o = [];
  sn(e10.children, (f, m) => {
    if (!import_react2.default.isValidElement(f))
      return;
    let g = f.key;
    if (typeof g != "string")
      return;
    m === 0 && (a = g);
    let p = o.push(f);
    i[g] = p - 1;
  });
  let [s, c] = te({
    value: e10.activeKey,
    defaultValue: (t = e10.defaultActiveKey) !== null && t !== void 0 ? t : a,
    onChange: (f) => {
      var m;
      f !== null && ((m = e10.onChange) === null || m === void 0 || m.call(e10, f));
    }
  }), {
    scrollLeft: u,
    animate: d
  } = m1(n, i[s]);
  return ki(() => {
    d(!0);
  }, r), j(e10, import_react2.default.createElement("div", {
    className: Wt,
    ref: r
  }, import_react2.default.createElement("div", {
    className: `${Wt}-header`
  }, import_react2.default.createElement(h1, {
    scrollTrackRef: n
  }), import_react2.default.createElement(ue.div, {
    className: `${Wt}-tab-list`,
    ref: n,
    scrollLeft: u
  }, o.map((f) => j(f.props, import_react2.default.createElement("div", {
    key: f.key,
    className: `${Wt}-tab-wrapper`
  }, import_react2.default.createElement("div", {
    onClick: () => {
      let {
        key: m
      } = f;
      f.props.disabled || m != null && c(m.toString());
    },
    className: V(`${Wt}-tab`, {
      [`${Wt}-tab-active`]: f.key === s,
      [`${Wt}-tab-disabled`]: f.props.disabled
    })
  }, f.props.title)))))), o.map((f) => {
    if (f.props.children === void 0)
      return null;
    let m = f.key === s;
    return import_react2.default.createElement(yr, {
      key: f.key,
      active: m,
      forceRender: f.props.forceRender,
      destroyOnClose: f.props.destroyOnClose
    }, import_react2.default.createElement("div", {
      className: `${Wt}-content`,
      style: {
        display: m ? "block" : "none"
      }
    }, f.props.children));
  })));
}, Fk = ie(ty, {
  Tab: ey
});
function ry(e10, t, n) {
  return Math.max(t, Math.min(e10, n));
}
var Ee = {
  toVector(e10, t) {
    return e10 === void 0 && (e10 = t), Array.isArray(e10) ? e10 : [e10, e10];
  },
  add(e10, t) {
    return [e10[0] + t[0], e10[1] + t[1]];
  },
  sub(e10, t) {
    return [e10[0] - t[0], e10[1] - t[1]];
  },
  addTo(e10, t) {
    e10[0] += t[0], e10[1] += t[1];
  },
  subTo(e10, t) {
    e10[0] -= t[0], e10[1] -= t[1];
  }
};
function ku(e10, t, n) {
  return t === 0 || Math.abs(t) === 1 / 0 ? Math.pow(e10, n * 5) : e10 * t * n / (t + n * e10);
}
function Ou(e10, t, n, r = 0.15) {
  return r === 0 ? ry(e10, t, n) : e10 < t ? -ku(t - e10, n - t, r) + t : e10 > n ? +ku(e10 - n, n - t, r) + n : e10;
}
function iy(e10, [t, n], [r, i]) {
  let [[a, o], [s, c]] = e10;
  return [Ou(t, a, o, r), Ou(n, s, c, i)];
}
function Me(e10, t, n) {
  return t in e10 ? Object.defineProperty(e10, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e10[t] = n, e10;
}
function Su(e10, t) {
  var n = Object.keys(e10);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e10);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e10, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function me(e10) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Su(Object(n), !0).forEach(function(r) {
      Me(e10, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e10, Object.getOwnPropertyDescriptors(n)) : Su(Object(n)).forEach(function(r) {
      Object.defineProperty(e10, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e10;
}
var w1 = {
  pointer: {
    start: "down",
    change: "move",
    end: "up"
  },
  mouse: {
    start: "down",
    change: "move",
    end: "up"
  },
  touch: {
    start: "start",
    change: "move",
    end: "end"
  },
  gesture: {
    start: "start",
    change: "change",
    end: "end"
  }
};
function Fu(e10) {
  return e10 ? e10[0].toUpperCase() + e10.slice(1) : "";
}
var ay = ["enter", "leave"];
function oy(e10 = !1, t) {
  return e10 && !ay.includes(t);
}
function sy(e10, t = "", n = !1) {
  let r = w1[e10], i = r && r[t] || t;
  return "on" + Fu(e10) + Fu(i) + (oy(n, i) ? "Capture" : "");
}
var ly = ["gotpointercapture", "lostpointercapture"];
function cy(e10) {
  let t = e10.substring(2).toLowerCase(), n = !!~t.indexOf("passive");
  n && (t = t.replace("passive", ""));
  let r = ly.includes(t) ? "capturecapture" : "capture", i = !!~t.indexOf(r);
  return i && (t = t.replace("capture", "")), {
    device: t,
    capture: i,
    passive: n
  };
}
function uy(e10, t = "") {
  let n = w1[e10], r = n && n[t] || t;
  return e10 + r;
}
function so(e10) {
  return "touches" in e10;
}
function E1(e10) {
  return so(e10) ? "touch" : "pointerType" in e10 ? e10.pointerType : "mouse";
}
function fy(e10) {
  return Array.from(e10.touches).filter((t) => {
    var n, r;
    return t.target === e10.currentTarget || ((n = e10.currentTarget) === null || n === void 0 || (r = n.contains) === null || r === void 0 ? void 0 : r.call(n, t.target));
  });
}
function dy(e10) {
  return e10.type === "touchend" || e10.type === "touchcancel" ? e10.changedTouches : e10.targetTouches;
}
function C1(e10) {
  return so(e10) ? dy(e10)[0] : e10;
}
function Es(e10, t) {
  let n = t.clientX - e10.clientX, r = t.clientY - e10.clientY, i = (t.clientX + e10.clientX) / 2, a = (t.clientY + e10.clientY) / 2, o = Math.hypot(n, r);
  return {
    angle: -(Math.atan2(n, r) * 180) / Math.PI,
    distance: o,
    origin: [i, a]
  };
}
function my(e10) {
  return fy(e10).map((t) => t.identifier);
}
function Pu(e10, t) {
  let [n, r] = Array.from(e10.touches).filter((i) => t.includes(i.identifier));
  return Es(n, r);
}
function Io(e10) {
  let t = C1(e10);
  return so(e10) ? t.identifier : t.pointerId;
}
function Nu(e10) {
  let t = C1(e10);
  return [t.clientX, t.clientY];
}
var Au = 40, Tu = 800;
function $1(e10) {
  let {
    deltaX: t,
    deltaY: n,
    deltaMode: r
  } = e10;
  return r === 1 ? (t *= Au, n *= Au) : r === 2 && (t *= Tu, n *= Tu), [t, n];
}
function hy(e10) {
  let t = {};
  if ("buttons" in e10 && (t.buttons = e10.buttons), "shiftKey" in e10) {
    let {
      shiftKey: n,
      altKey: r,
      metaKey: i,
      ctrlKey: a
    } = e10;
    Object.assign(t, {
      shiftKey: n,
      altKey: r,
      metaKey: i,
      ctrlKey: a
    });
  }
  return t;
}
function Sa(e10, ...t) {
  return typeof e10 == "function" ? e10(...t) : e10;
}
function py() {
}
function vy(...e10) {
  return e10.length === 0 ? py : e10.length === 1 ? e10[0] : function() {
    let t;
    for (let n of e10)
      t = n.apply(this, arguments) || t;
    return t;
  };
}
function Ru(e10, t) {
  return Object.assign({}, t, e10 || {});
}
var gy = 32, x1 = class {
  constructor(t, n, r) {
    this.ctrl = t, this.args = n, this.key = r, this.state || (this.state = {}, this.computeValues([0, 0]), this.computeInitial(), this.init && this.init(), this.reset());
  }
  get state() {
    return this.ctrl.state[this.key];
  }
  set state(t) {
    this.ctrl.state[this.key] = t;
  }
  get shared() {
    return this.ctrl.state.shared;
  }
  get eventStore() {
    return this.ctrl.gestureEventStores[this.key];
  }
  get timeoutStore() {
    return this.ctrl.gestureTimeoutStores[this.key];
  }
  get config() {
    return this.ctrl.config[this.key];
  }
  get sharedConfig() {
    return this.ctrl.config.shared;
  }
  get handler() {
    return this.ctrl.handlers[this.key];
  }
  reset() {
    let {
      state: t,
      shared: n,
      ingKey: r,
      args: i
    } = this;
    n[r] = t._active = t.active = t._blocked = t._force = !1, t._step = [!1, !1], t.intentional = !1, t._movement = [0, 0], t._distance = [0, 0], t._direction = [0, 0], t._delta = [0, 0], t._bounds = [[-1 / 0, 1 / 0], [-1 / 0, 1 / 0]], t.args = i, t.axis = void 0, t.memo = void 0, t.elapsedTime = 0, t.direction = [0, 0], t.distance = [0, 0], t.overflow = [0, 0], t._movementBound = [!1, !1], t.velocity = [0, 0], t.movement = [0, 0], t.delta = [0, 0], t.timeStamp = 0;
  }
  start(t) {
    let n = this.state, r = this.config;
    n._active || (this.reset(), this.computeInitial(), n._active = !0, n.target = t.target, n.currentTarget = t.currentTarget, n.lastOffset = r.from ? Sa(r.from, n) : n.offset, n.offset = n.lastOffset), n.startTime = n.timeStamp = t.timeStamp;
  }
  computeValues(t) {
    let n = this.state;
    n._values = t, n.values = this.config.transform(t);
  }
  computeInitial() {
    let t = this.state;
    t._initial = t._values, t.initial = t.values;
  }
  compute(t) {
    let {
      state: n,
      config: r,
      shared: i
    } = this;
    n.args = this.args;
    let a = 0;
    if (t && (n.event = t, r.preventDefault && t.cancelable && n.event.preventDefault(), n.type = t.type, i.touches = this.ctrl.pointerIds.size || this.ctrl.touchIds.size, i.locked = !!document.pointerLockElement, Object.assign(i, hy(t)), i.down = i.pressed = i.buttons % 2 === 1 || i.touches > 0, a = t.timeStamp - n.timeStamp, n.timeStamp = t.timeStamp, n.elapsedTime = n.timeStamp - n.startTime), n._active) {
      let $ = n._delta.map(Math.abs);
      Ee.addTo(n._distance, $);
    }
    this.axisIntent && this.axisIntent(t);
    let [o, s] = n._movement, [c, u] = r.threshold, {
      _step: d,
      values: f
    } = n;
    if (r.hasCustomTransform ? (d[0] === !1 && (d[0] = Math.abs(o) >= c && f[0]), d[1] === !1 && (d[1] = Math.abs(s) >= u && f[1])) : (d[0] === !1 && (d[0] = Math.abs(o) >= c && Math.sign(o) * c), d[1] === !1 && (d[1] = Math.abs(s) >= u && Math.sign(s) * u)), n.intentional = d[0] !== !1 || d[1] !== !1, !n.intentional)
      return;
    let m = [0, 0];
    if (r.hasCustomTransform) {
      let [$, k] = f;
      m[0] = d[0] !== !1 ? $ - d[0] : 0, m[1] = d[1] !== !1 ? k - d[1] : 0;
    } else
      m[0] = d[0] !== !1 ? o - d[0] : 0, m[1] = d[1] !== !1 ? s - d[1] : 0;
    this.restrictToAxis && !n._blocked && this.restrictToAxis(m);
    let g = n.offset, p = n._active && !n._blocked || n.active;
    p && (n.first = n._active && !n.active, n.last = !n._active && n.active, n.active = i[this.ingKey] = n._active, t && (n.first && ("bounds" in r && (n._bounds = Sa(r.bounds, n)), this.setup && this.setup()), n.movement = m, this.computeOffset()));
    let [h, b] = n.offset, [[w, C], [v, y]] = n._bounds;
    n.overflow = [h < w ? -1 : h > C ? 1 : 0, b < v ? -1 : b > y ? 1 : 0], n._movementBound[0] = n.overflow[0] ? n._movementBound[0] === !1 ? n._movement[0] : n._movementBound[0] : !1, n._movementBound[1] = n.overflow[1] ? n._movementBound[1] === !1 ? n._movement[1] : n._movementBound[1] : !1;
    let E = n._active ? r.rubberband || [0, 0] : [0, 0];
    if (n.offset = iy(n._bounds, n.offset, E), n.delta = Ee.sub(n.offset, g), this.computeMovement(), p && (!n.last || a > gy)) {
      n.delta = Ee.sub(n.offset, g);
      let $ = n.delta.map(Math.abs);
      Ee.addTo(n.distance, $), n.direction = n.delta.map(Math.sign), n._direction = n._delta.map(Math.sign), !n.first && a > 0 && (n.velocity = [$[0] / a, $[1] / a]);
    }
  }
  emit() {
    let t = this.state, n = this.shared, r = this.config;
    if (t._active || this.clean(), (t._blocked || !t.intentional) && !t._force && !r.triggerAllEvents)
      return;
    let i = this.handler(me(me(me({}, n), t), {}, {
      [this.aliasKey]: t.values
    }));
    i !== void 0 && (t.memo = i);
  }
  clean() {
    this.eventStore.clean(), this.timeoutStore.clean();
  }
};
function yy([e10, t], n) {
  let r = Math.abs(e10), i = Math.abs(t);
  if (r > i && r > n)
    return "x";
  if (i > r && i > n)
    return "y";
}
var _1 = class extends x1 {
  constructor(...t) {
    super(...t), Me(this, "aliasKey", "xy");
  }
  reset() {
    super.reset(), this.state.axis = void 0;
  }
  init() {
    this.state.offset = [0, 0], this.state.lastOffset = [0, 0];
  }
  computeOffset() {
    this.state.offset = Ee.add(this.state.lastOffset, this.state.movement);
  }
  computeMovement() {
    this.state.movement = Ee.sub(this.state.offset, this.state.lastOffset);
  }
  axisIntent(t) {
    let n = this.state, r = this.config;
    if (!n.axis && t) {
      let i = typeof r.axisThreshold == "object" ? r.axisThreshold[E1(t)] : r.axisThreshold;
      n.axis = yy(n._movement, i);
    }
    n._blocked = (r.lockDirection || !!r.axis) && !n.axis || !!r.axis && r.axis !== n.axis;
  }
  restrictToAxis(t) {
    if (this.config.axis || this.config.lockDirection)
      switch (this.state.axis) {
        case "x":
          t[1] = 0;
          break;
        case "y":
          t[0] = 0;
          break;
      }
  }
}, by = (e10) => e10, Mu = 0.15, k1 = {
  enabled(e10 = !0) {
    return e10;
  },
  eventOptions(e10, t, n) {
    return me(me({}, n.shared.eventOptions), e10);
  },
  preventDefault(e10 = !1) {
    return e10;
  },
  triggerAllEvents(e10 = !1) {
    return e10;
  },
  rubberband(e10 = 0) {
    switch (e10) {
      case !0:
        return [Mu, Mu];
      case !1:
        return [0, 0];
      default:
        return Ee.toVector(e10);
    }
  },
  from(e10) {
    if (typeof e10 == "function")
      return e10;
    if (e10 != null)
      return Ee.toVector(e10);
  },
  transform(e10, t, n) {
    let r = e10 || n.shared.transform;
    return this.hasCustomTransform = !!r, r || by;
  },
  threshold(e10) {
    return Ee.toVector(e10, 0);
  }
}, wy = 0, Er = me(me({}, k1), {}, {
  axis(e10, t, {
    axis: n
  }) {
    if (this.lockDirection = n === "lock", !this.lockDirection)
      return n;
  },
  axisThreshold(e10 = wy) {
    return e10;
  },
  bounds(e10 = {}) {
    if (typeof e10 == "function")
      return (a) => Er.bounds(e10(a));
    if ("current" in e10)
      return () => e10.current;
    if (typeof HTMLElement == "function" && e10 instanceof HTMLElement)
      return e10;
    let {
      left: t = -1 / 0,
      right: n = 1 / 0,
      top: r = -1 / 0,
      bottom: i = 1 / 0
    } = e10;
    return [[t, n], [r, i]];
  }
}), Xi = 10, Iu = {
  ArrowRight: (e10 = 1) => [Xi * e10, 0],
  ArrowLeft: (e10 = 1) => [-Xi * e10, 0],
  ArrowUp: (e10 = 1) => [0, -Xi * e10],
  ArrowDown: (e10 = 1) => [0, Xi * e10]
}, Ey = class extends _1 {
  constructor(...t) {
    super(...t), Me(this, "ingKey", "dragging");
  }
  reset() {
    super.reset();
    let t = this.state;
    t._pointerId = void 0, t._pointerActive = !1, t._keyboardActive = !1, t._preventScroll = !1, t._delayed = !1, t.swipe = [0, 0], t.tap = !1, t.canceled = !1, t.cancel = this.cancel.bind(this);
  }
  setup() {
    let t = this.state;
    if (t._bounds instanceof HTMLElement) {
      let n = t._bounds.getBoundingClientRect(), r = t.currentTarget.getBoundingClientRect(), i = {
        left: n.left - r.left + t.offset[0],
        right: n.right - r.right + t.offset[0],
        top: n.top - r.top + t.offset[1],
        bottom: n.bottom - r.bottom + t.offset[1]
      };
      t._bounds = Er.bounds(i);
    }
  }
  cancel() {
    let t = this.state;
    t.canceled || (t.canceled = !0, t._active = !1, setTimeout(() => {
      this.compute(), this.emit();
    }, 0));
  }
  setActive() {
    this.state._active = this.state._pointerActive || this.state._keyboardActive;
  }
  clean() {
    this.pointerClean(), this.state._pointerActive = !1, this.state._keyboardActive = !1, super.clean();
  }
  pointerDown(t) {
    let n = this.config, r = this.state;
    if (t.buttons != null && (Array.isArray(n.pointerButtons) ? !n.pointerButtons.includes(t.buttons) : n.pointerButtons !== -1 && n.pointerButtons !== t.buttons))
      return;
    let i = this.ctrl.setEventIds(t);
    n.pointerCapture && t.target.setPointerCapture(t.pointerId), !(i && i.size > 1 && r._pointerActive) && (this.start(t), this.setupPointer(t), r._pointerId = Io(t), r._pointerActive = !0, this.computeValues(Nu(t)), this.computeInitial(), n.preventScrollAxis && E1(t) !== "mouse" ? (r._active = !1, this.setupScrollPrevention(t)) : n.delay > 0 ? (this.setupDelayTrigger(t), n.triggerAllEvents && (this.compute(t), this.emit())) : this.startPointerDrag(t));
  }
  startPointerDrag(t) {
    let n = this.state;
    n._active = !0, n._preventScroll = !0, n._delayed = !1, this.compute(t), this.emit();
  }
  pointerMove(t) {
    let n = this.state, r = this.config;
    if (!n._pointerActive || n.type === t.type && t.timeStamp === n.timeStamp)
      return;
    let i = Io(t);
    if (n._pointerId !== void 0 && i !== n._pointerId)
      return;
    let a = Nu(t);
    if (document.pointerLockElement === t.target ? n._delta = [t.movementX, t.movementY] : (n._delta = Ee.sub(a, n._values), this.computeValues(a)), Ee.addTo(n._movement, n._delta), this.compute(t), n._delayed && n.intentional) {
      this.timeoutStore.remove("dragDelay"), n.active = !1, this.startPointerDrag(t);
      return;
    }
    if (r.preventScrollAxis && !n._preventScroll)
      if (n.axis)
        if (n.axis === r.preventScrollAxis || r.preventScrollAxis === "xy") {
          n._active = !1, this.clean();
          return;
        } else {
          this.timeoutStore.remove("startPointerDrag"), this.startPointerDrag(t);
          return;
        }
      else
        return;
    this.emit();
  }
  pointerUp(t) {
    this.ctrl.setEventIds(t);
    try {
      this.config.pointerCapture && t.target.hasPointerCapture(t.pointerId) && t.target.releasePointerCapture(t.pointerId);
    } catch {
    }
    let n = this.state, r = this.config;
    if (!n._active || !n._pointerActive)
      return;
    let i = Io(t);
    if (n._pointerId !== void 0 && i !== n._pointerId)
      return;
    this.state._pointerActive = !1, this.setActive(), this.compute(t);
    let [a, o] = n._distance;
    if (n.tap = a <= r.tapsThreshold && o <= r.tapsThreshold, n.tap && r.filterTaps)
      n._force = !0;
    else {
      let [s, c] = n.direction, [u, d] = n.velocity, [f, m] = n.movement, [g, p] = r.swipe.velocity, [h, b] = r.swipe.distance, w = r.swipe.duration;
      n.elapsedTime < w && (Math.abs(u) > g && Math.abs(f) > h && (n.swipe[0] = s), Math.abs(d) > p && Math.abs(m) > b && (n.swipe[1] = c));
    }
    this.emit();
  }
  pointerClick(t) {
    !this.state.tap && t.detail > 0 && (t.preventDefault(), t.stopPropagation());
  }
  setupPointer(t) {
    let n = this.config, r = n.device;
    n.pointerLock && t.currentTarget.requestPointerLock(), n.pointerCapture || (this.eventStore.add(this.sharedConfig.window, r, "change", this.pointerMove.bind(this)), this.eventStore.add(this.sharedConfig.window, r, "end", this.pointerUp.bind(this)), this.eventStore.add(this.sharedConfig.window, r, "cancel", this.pointerUp.bind(this)));
  }
  pointerClean() {
    this.config.pointerLock && document.pointerLockElement === this.state.currentTarget && document.exitPointerLock();
  }
  preventScroll(t) {
    this.state._preventScroll && t.cancelable && t.preventDefault();
  }
  setupScrollPrevention(t) {
    this.state._preventScroll = !1, Cy(t);
    let n = this.eventStore.add(this.sharedConfig.window, "touch", "change", this.preventScroll.bind(this), {
      passive: !1
    });
    this.eventStore.add(this.sharedConfig.window, "touch", "end", n), this.eventStore.add(this.sharedConfig.window, "touch", "cancel", n), this.timeoutStore.add("startPointerDrag", this.startPointerDrag.bind(this), this.config.preventScrollDelay, t);
  }
  setupDelayTrigger(t) {
    this.state._delayed = !0, this.timeoutStore.add("dragDelay", () => {
      this.state._step = [0, 0], this.startPointerDrag(t);
    }, this.config.delay);
  }
  keyDown(t) {
    let n = Iu[t.key];
    if (n) {
      let r = this.state, i = t.shiftKey ? 10 : t.altKey ? 0.1 : 1;
      this.start(t), r._delta = n(i), r._keyboardActive = !0, Ee.addTo(r._movement, r._delta), this.compute(t), this.emit();
    }
  }
  keyUp(t) {
    t.key in Iu && (this.state._keyboardActive = !1, this.setActive(), this.compute(t), this.emit());
  }
  bind(t) {
    let n = this.config.device;
    t(n, "start", this.pointerDown.bind(this)), this.config.pointerCapture && (t(n, "change", this.pointerMove.bind(this)), t(n, "end", this.pointerUp.bind(this)), t(n, "cancel", this.pointerUp.bind(this)), t("lostPointerCapture", "", this.pointerUp.bind(this))), this.config.keys && (t("key", "down", this.keyDown.bind(this)), t("key", "up", this.keyUp.bind(this))), this.config.filterTaps && t("click", "", this.pointerClick.bind(this), {
      capture: !0,
      passive: !1
    });
  }
};
function Cy(e10) {
  "persist" in e10 && typeof e10.persist == "function" && e10.persist();
}
var Ii = typeof window < "u" && window.document && window.document.createElement;
function $y() {
  return Ii && "ontouchstart" in window;
}
function Lu() {
  return $y() || Ii && window.navigator.maxTouchPoints > 1;
}
function xy() {
  return Ii && "onpointerdown" in window;
}
function _y() {
  return Ii && "exitPointerLock" in window.document;
}
function ky() {
  try {
    return "constructor" in GestureEvent;
  } catch {
    return !1;
  }
}
var it = {
  isBrowser: Ii,
  gesture: ky(),
  touch: Lu(),
  touchscreen: Lu(),
  pointer: xy(),
  pointerLock: _y()
}, Oy = 250, Sy = 180, Fy = 0.5, Py = 50, Ny = 250, Du = {
  mouse: 0,
  touch: 0,
  pen: 8
}, Ay = me(me({}, Er), {}, {
  device(e10, t, {
    pointer: {
      touch: n = !1,
      lock: r = !1,
      mouse: i = !1
    } = {}
  }) {
    return this.pointerLock = r && it.pointerLock, it.touch && n ? "touch" : this.pointerLock ? "mouse" : it.pointer && !i ? "pointer" : it.touch ? "touch" : "mouse";
  },
  preventScrollAxis(e10, t, {
    preventScroll: n
  }) {
    if (this.preventScrollDelay = typeof n == "number" ? n : n || n === void 0 && e10 ? Oy : void 0, !(!it.touchscreen || n === !1))
      return e10 || (n !== void 0 ? "y" : void 0);
  },
  pointerCapture(e10, t, {
    pointer: {
      capture: n = !0,
      buttons: r = 1
    } = {}
  }) {
    return this.pointerButtons = r, !this.pointerLock && this.device === "pointer" && n;
  },
  keys(e10 = !0) {
    return e10;
  },
  threshold(e10, t, {
    filterTaps: n = !1,
    tapsThreshold: r = 3,
    axis: i = void 0
  }) {
    let a = Ee.toVector(e10, n ? r : i ? 1 : 0);
    return this.filterTaps = n, this.tapsThreshold = r, a;
  },
  swipe({
    velocity: e10 = Fy,
    distance: t = Py,
    duration: n = Ny
  } = {}) {
    return {
      velocity: this.transform(Ee.toVector(e10)),
      distance: this.transform(Ee.toVector(t)),
      duration: n
    };
  },
  delay(e10 = 0) {
    switch (e10) {
      case !0:
        return Sy;
      case !1:
        return 0;
      default:
        return e10;
    }
  },
  axisThreshold(e10) {
    return e10 ? me(me({}, Du), e10) : Du;
  }
}), Ty = 30, Ry = 100, My = class extends x1 {
  constructor(...t) {
    super(...t), Me(this, "ingKey", "pinching"), Me(this, "aliasKey", "da");
  }
  init() {
    this.state.offset = [1, 0], this.state.lastOffset = [1, 0], this.state._pointerEvents = /* @__PURE__ */ new Map();
  }
  reset() {
    super.reset();
    let t = this.state;
    t._touchIds = [], t.canceled = !1, t.cancel = this.cancel.bind(this), t.turns = 0;
  }
  computeOffset() {
    let {
      type: t,
      movement: n,
      lastOffset: r
    } = this.state;
    t === "wheel" ? this.state.offset = Ee.add(n, r) : this.state.offset = [(1 + n[0]) * r[0], n[1] + r[1]];
  }
  computeMovement() {
    let {
      offset: t,
      lastOffset: n
    } = this.state;
    this.state.movement = [t[0] / n[0], t[1] - n[1]];
  }
  axisIntent() {
    let t = this.state, [n, r] = t._movement;
    if (!t.axis) {
      let i = Math.abs(n) * Ty - Math.abs(r);
      i < 0 ? t.axis = "angle" : i > 0 && (t.axis = "scale");
    }
  }
  restrictToAxis(t) {
    this.config.lockDirection && (this.state.axis === "scale" ? t[1] = 0 : this.state.axis === "angle" && (t[0] = 0));
  }
  cancel() {
    let t = this.state;
    t.canceled || setTimeout(() => {
      t.canceled = !0, t._active = !1, this.compute(), this.emit();
    }, 0);
  }
  touchStart(t) {
    this.ctrl.setEventIds(t);
    let n = this.state, r = this.ctrl.touchIds;
    if (n._active && n._touchIds.every((a) => r.has(a)) || r.size < 2)
      return;
    this.start(t), n._touchIds = Array.from(r).slice(0, 2);
    let i = Pu(t, n._touchIds);
    this.pinchStart(t, i);
  }
  pointerStart(t) {
    if (t.buttons != null && t.buttons % 2 !== 1)
      return;
    this.ctrl.setEventIds(t), t.target.setPointerCapture(t.pointerId);
    let n = this.state, r = n._pointerEvents, i = this.ctrl.pointerIds;
    if (n._active && Array.from(r.keys()).every((o) => i.has(o)) || (r.size < 2 && r.set(t.pointerId, t), n._pointerEvents.size < 2))
      return;
    this.start(t);
    let a = Es(...Array.from(r.values()));
    this.pinchStart(t, a);
  }
  pinchStart(t, n) {
    let r = this.state;
    r.origin = n.origin, this.computeValues([n.distance, n.angle]), this.computeInitial(), this.compute(t), this.emit();
  }
  touchMove(t) {
    if (!this.state._active)
      return;
    let n = Pu(t, this.state._touchIds);
    this.pinchMove(t, n);
  }
  pointerMove(t) {
    let n = this.state._pointerEvents;
    if (n.has(t.pointerId) && n.set(t.pointerId, t), !this.state._active)
      return;
    let r = Es(...Array.from(n.values()));
    this.pinchMove(t, r);
  }
  pinchMove(t, n) {
    let r = this.state, i = r._values[1], a = n.angle - i, o = 0;
    Math.abs(a) > 270 && (o += Math.sign(a)), this.computeValues([n.distance, n.angle - 360 * o]), r.origin = n.origin, r.turns = o, r._movement = [r._values[0] / r._initial[0] - 1, r._values[1] - r._initial[1]], this.compute(t), this.emit();
  }
  touchEnd(t) {
    this.ctrl.setEventIds(t), !!this.state._active && this.state._touchIds.some((n) => !this.ctrl.touchIds.has(n)) && (this.state._active = !1, this.compute(t), this.emit());
  }
  pointerEnd(t) {
    let n = this.state;
    this.ctrl.setEventIds(t);
    try {
      t.target.releasePointerCapture(t.pointerId);
    } catch {
    }
    n._pointerEvents.has(t.pointerId) && n._pointerEvents.delete(t.pointerId), !!n._active && n._pointerEvents.size < 2 && (n._active = !1, this.compute(t), this.emit());
  }
  gestureStart(t) {
    t.cancelable && t.preventDefault();
    let n = this.state;
    n._active || (this.start(t), this.computeValues([t.scale, t.rotation]), n.origin = [t.clientX, t.clientY], this.compute(t), this.emit());
  }
  gestureMove(t) {
    if (t.cancelable && t.preventDefault(), !this.state._active)
      return;
    let n = this.state;
    this.computeValues([t.scale, t.rotation]), n.origin = [t.clientX, t.clientY];
    let r = n._movement;
    n._movement = [t.scale - 1, t.rotation], n._delta = Ee.sub(n._movement, r), this.compute(t), this.emit();
  }
  gestureEnd(t) {
    !this.state._active || (this.state._active = !1, this.compute(t), this.emit());
  }
  wheel(t) {
    let n = this.config.modifierKey;
    n && !t[n] || (this.state._active ? this.wheelChange(t) : this.wheelStart(t), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this)));
  }
  wheelStart(t) {
    this.start(t), this.wheelChange(t);
  }
  wheelChange(t) {
    "uv" in t || t.cancelable && t.preventDefault();
    let r = this.state;
    r._delta = [-$1(t)[1] / Ry * r.offset[0], 0], Ee.addTo(r._movement, r._delta), this.state.origin = [t.clientX, t.clientY], this.compute(t), this.emit();
  }
  wheelEnd() {
    !this.state._active || (this.state._active = !1, this.compute(), this.emit());
  }
  bind(t) {
    let n = this.config.device;
    n && (t(n, "start", this[n + "Start"].bind(this)), t(n, "change", this[n + "Move"].bind(this)), t(n, "end", this[n + "End"].bind(this)), t(n, "cancel", this[n + "End"].bind(this))), t("wheel", "", this.wheel.bind(this), {
      passive: !1
    });
  }
}, Iy = me(me({}, k1), {}, {
  device(e10, t, {
    shared: n,
    pointer: {
      touch: r = !1
    } = {}
  }) {
    if (n.target && !it.touch && it.gesture)
      return "gesture";
    if (it.touch && r)
      return "touch";
    if (it.touchscreen) {
      if (it.pointer)
        return "pointer";
      if (it.touch)
        return "touch";
    }
  },
  bounds(e10, t, {
    scaleBounds: n = {},
    angleBounds: r = {}
  }) {
    let i = (o) => {
      let s = Ru(Sa(n, o), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [s.min, s.max];
    }, a = (o) => {
      let s = Ru(Sa(r, o), {
        min: -1 / 0,
        max: 1 / 0
      });
      return [s.min, s.max];
    };
    return typeof n != "function" && typeof r != "function" ? [i(), a()] : (o) => [i(o), a(o)];
  },
  threshold(e10, t, n) {
    return this.lockDirection = n.axis === "lock", Ee.toVector(e10, this.lockDirection ? [0.1, 3] : 0);
  },
  modifierKey(e10) {
    return e10 === void 0 ? "ctrlKey" : e10;
  }
});
me(me({}, Er), {}, {
  mouseOnly: (e10 = !0) => e10
});
var Ly = class extends _1 {
  constructor(...t) {
    super(...t), Me(this, "ingKey", "wheeling");
  }
  wheel(t) {
    this.state._active || this.start(t), this.wheelChange(t), this.timeoutStore.add("wheelEnd", this.wheelEnd.bind(this));
  }
  wheelChange(t) {
    let n = this.state;
    n._delta = $1(t), Ee.addTo(n._movement, n._delta);
    let [r, i] = n.overflow, [a, o] = n._delta, [s, c] = n._direction;
    (r < 0 && a > 0 && s < 0 || r > 0 && a < 0 && s > 0) && (n._movement[0] = n._movementBound[0]), (i < 0 && o > 0 && c < 0 || i > 0 && o < 0 && c > 0) && (n._movement[1] = n._movementBound[1]), this.compute(t), this.emit();
  }
  wheelEnd() {
    !this.state._active || (this.state._active = !1, this.compute(), this.emit());
  }
  bind(t) {
    t("wheel", "", this.wheel.bind(this));
  }
}, Dy = Er;
me(me({}, Er), {}, {
  mouseOnly: (e10 = !0) => e10
});
var Fl = /* @__PURE__ */ new Map(), Cs = /* @__PURE__ */ new Map();
function Pl(e10) {
  Fl.set(e10.key, e10.engine), Cs.set(e10.key, e10.resolver);
}
var O1 = {
  key: "drag",
  engine: Ey,
  resolver: Ay
}, Vy = {
  key: "pinch",
  engine: My,
  resolver: Iy
}, jy = {
  key: "wheel",
  engine: Ly,
  resolver: Dy
};
function By(e10, t) {
  if (e10 == null)
    return {};
  var n = {}, r = Object.keys(e10), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e10[i]);
  return n;
}
function Wy(e10, t) {
  if (e10 == null)
    return {};
  var n = By(e10, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e10);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e10, r) || (n[r] = e10[r]));
  }
  return n;
}
var Zy = {
  target(e10) {
    if (e10)
      return () => "current" in e10 ? e10.current : e10;
  },
  enabled(e10 = !0) {
    return e10;
  },
  window(e10 = it.isBrowser ? window : void 0) {
    return e10;
  },
  eventOptions({
    passive: e10 = !0,
    capture: t = !1
  } = {}) {
    return {
      passive: e10,
      capture: t
    };
  },
  transform(e10) {
    return e10;
  }
}, Hy = ["target", "eventOptions", "window", "enabled", "transform"];
function ua(e10 = {}, t) {
  let n = {};
  for (let [r, i] of Object.entries(t))
    switch (typeof i) {
      case "function":
        n[r] = i.call(n, e10[r], r, e10);
        break;
      case "object":
        n[r] = ua(e10[r], i);
        break;
      case "boolean":
        i && (n[r] = e10[r]);
        break;
    }
  return n;
}
function zy(e10, t, n = {}) {
  let r = e10, {
    target: i,
    eventOptions: a,
    window: o,
    enabled: s,
    transform: c
  } = r, u = Wy(r, Hy);
  if (n.shared = ua({
    target: i,
    eventOptions: a,
    window: o,
    enabled: s,
    transform: c
  }, Zy), t) {
    let d = Cs.get(t);
    n[t] = ua(me({
      shared: n.shared
    }, u), d);
  } else
    for (let d in u) {
      let f = Cs.get(d);
      f && (n[d] = ua(me({
        shared: n.shared
      }, u[d]), f));
    }
  return n;
}
var S1 = class {
  constructor(t, n) {
    Me(this, "_listeners", /* @__PURE__ */ new Set()), this._ctrl = t, this._gestureKey = n;
  }
  add(t, n, r, i, a) {
    let o = this._listeners, s = uy(n, r), c = this._gestureKey ? this._ctrl.config[this._gestureKey].eventOptions : {}, u = me(me({}, c), a);
    t.addEventListener(s, i, u);
    let d = () => {
      t.removeEventListener(s, i, u), o.delete(d);
    };
    return o.add(d), d;
  }
  clean() {
    this._listeners.forEach((t) => t()), this._listeners.clear();
  }
}, Uy = class {
  constructor() {
    Me(this, "_timeouts", /* @__PURE__ */ new Map());
  }
  add(t, n, r = 140, ...i) {
    this.remove(t), this._timeouts.set(t, window.setTimeout(n, r, ...i));
  }
  remove(t) {
    let n = this._timeouts.get(t);
    n && window.clearTimeout(n);
  }
  clean() {
    this._timeouts.forEach((t) => void window.clearTimeout(t)), this._timeouts.clear();
  }
}, qy = class {
  constructor(t) {
    Me(this, "gestures", /* @__PURE__ */ new Set()), Me(this, "_targetEventStore", new S1(this)), Me(this, "gestureEventStores", {}), Me(this, "gestureTimeoutStores", {}), Me(this, "handlers", {}), Me(this, "config", {}), Me(this, "pointerIds", /* @__PURE__ */ new Set()), Me(this, "touchIds", /* @__PURE__ */ new Set()), Me(this, "state", {
      shared: {
        shiftKey: !1,
        metaKey: !1,
        ctrlKey: !1,
        altKey: !1
      }
    }), Ky(this, t);
  }
  setEventIds(t) {
    if (so(t))
      return this.touchIds = new Set(my(t)), this.touchIds;
    if ("pointerId" in t)
      return t.type === "pointerup" || t.type === "pointercancel" ? this.pointerIds.delete(t.pointerId) : t.type === "pointerdown" && this.pointerIds.add(t.pointerId), this.pointerIds;
  }
  applyHandlers(t, n) {
    this.handlers = t, this.nativeHandlers = n;
  }
  applyConfig(t, n) {
    this.config = zy(t, n, this.config);
  }
  clean() {
    this._targetEventStore.clean();
    for (let t of this.gestures)
      this.gestureEventStores[t].clean(), this.gestureTimeoutStores[t].clean();
  }
  effect() {
    return this.config.shared.target && this.bind(), () => this._targetEventStore.clean();
  }
  bind(...t) {
    let n = this.config.shared, r = {}, i;
    if (!(n.target && (i = n.target(), !i))) {
      if (n.enabled) {
        for (let o of this.gestures) {
          let s = this.config[o], c = Vu(r, s.eventOptions, !!i);
          if (s.enabled) {
            let u = Fl.get(o);
            new u(this, t, o).bind(c);
          }
        }
        let a = Vu(r, n.eventOptions, !!i);
        for (let o in this.nativeHandlers)
          a(o, "", (s) => this.nativeHandlers[o](me(me({}, this.state.shared), {}, {
            event: s,
            args: t
          })), void 0, !0);
      }
      for (let a in r)
        r[a] = vy(...r[a]);
      if (!i)
        return r;
      for (let a in r) {
        let {
          device: o,
          capture: s,
          passive: c
        } = cy(a);
        this._targetEventStore.add(i, o, "", r[a], {
          capture: s,
          passive: c
        });
      }
    }
  }
};
function Ln(e10, t) {
  e10.gestures.add(t), e10.gestureEventStores[t] = new S1(e10, t), e10.gestureTimeoutStores[t] = new Uy();
}
function Ky(e10, t) {
  t.drag && Ln(e10, "drag"), t.wheel && Ln(e10, "wheel"), t.scroll && Ln(e10, "scroll"), t.move && Ln(e10, "move"), t.pinch && Ln(e10, "pinch"), t.hover && Ln(e10, "hover");
}
var Vu = (e10, t, n) => (r, i, a, o = {}, s = !1) => {
  var c, u;
  let d = (c = o.capture) !== null && c !== void 0 ? c : t.capture, f = (u = o.passive) !== null && u !== void 0 ? u : t.passive, m = s ? r : sy(r, i, d);
  n && f && (m += "Passive"), e10[m] = e10[m] || [], e10[m].push(a);
}, Gy = /^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;
function Yy(e10) {
  let t = {}, n = {}, r = /* @__PURE__ */ new Set();
  for (let i in e10)
    Gy.test(i) ? (r.add(RegExp.lastMatch), n[i] = e10[i]) : t[i] = e10[i];
  return [n, t, r];
}
function Dn(e10, t, n, r, i, a) {
  if (!e10.has(n) || !Fl.has(r))
    return;
  let o = n + "Start", s = n + "End", c = (u) => {
    let d;
    return u.first && o in t && t[o](u), n in t && (d = t[n](u)), u.last && s in t && t[s](u), d;
  };
  i[r] = c, a[r] = a[r] || {};
}
function Xy(e10, t) {
  let [n, r, i] = Yy(e10), a = {};
  return Dn(i, n, "onDrag", "drag", a, t), Dn(i, n, "onWheel", "wheel", a, t), Dn(i, n, "onScroll", "scroll", a, t), Dn(i, n, "onPinch", "pinch", a, t), Dn(i, n, "onMove", "move", a, t), Dn(i, n, "onHover", "hover", a, t), {
    handlers: a,
    config: t,
    nativeHandlers: r
  };
}
function Nl(e10, t = {}, n, r) {
  let i = import_react2.default.useMemo(() => new qy(e10), []);
  if (i.applyHandlers(e10, r), i.applyConfig(t, n), import_react2.default.useEffect(i.effect.bind(i)), import_react2.default.useEffect(() => i.clean.bind(i), []), t.target === void 0)
    return i.bind.bind(i);
}
function jt(e10, t) {
  return Pl(O1), Nl({
    drag: e10
  }, t || {}, "drag");
}
function Qy(e10, t) {
  return Pl(jy), Nl({
    wheel: e10
  }, t || {}, "wheel");
}
function Jy(e10) {
  return e10.forEach(Pl), function(n, r) {
    let {
      handlers: i,
      nativeHandlers: a,
      config: o
    } = Xy(n, r || {});
    return Nl(i, o, void 0, a);
  };
}
function ju(e10, t, n) {
  return e10 * t * n / (t + n * e10);
}
function Fa(e10, t, n, r, i = 0.15) {
  return i === 0 ? _e(e10, t, n) : e10 < t ? -ju(t - e10, r, i) + t : e10 > n ? +ju(e10 - n, r, i) + n : e10;
}
var lo = !1;
function Le(e10, t) {
  lo && console.warn(`[antd-mobile: ${e10}] ${t}`);
}
function e9(e10, t) {
  lo && console.error(`[antd-mobile: ${e10}] ${t}`);
}
function F1(e10) {
  if (e10 == null || e10 === "")
    return 0;
  let t = e10.trim();
  return t.endsWith("px") ? parseFloat(t) : t.endsWith("rem") ? parseFloat(t) * parseFloat(window.getComputedStyle(document.documentElement).fontSize) : t.endsWith("vw") ? parseFloat(t) * window.innerWidth / 100 : 0;
}
var Pr = "adm-picker-view", P1 = (0, import_react2.memo)((e10) => {
  let {
    value: t,
    column: n,
    renderLabel: r
  } = e10;
  function i(h) {
    e10.onSelect(h, e10.index);
  }
  let [{
    y: a
  }, o] = Ne(() => ({
    from: {
      y: 0
    },
    config: {
      tension: 400,
      mass: 0.8
    }
  })), s = (0, import_react2.useRef)(!1), c = (0, import_react2.useRef)(null), u = (0, import_react2.useRef)(null), d = (0, import_react2.useRef)(34);
  Ce(() => {
    let h = u.current;
    !h || (d.current = F1(window.getComputedStyle(h).getPropertyValue("height")));
  }), Ce(() => {
    if (s.current || t === null)
      return;
    let h = n.findIndex((w) => w.value === t);
    if (h < 0)
      return;
    let b = h * -d.current;
    o.start({
      y: b,
      immediate: a.goal !== b
    });
  }, [t, n]), Ce(() => {
    if (n.length === 0)
      t !== null && i(null);
    else if (!n.some((h) => h.value === t)) {
      let h = n[0];
      i(h.value);
    }
  }, [n, t]);
  function f(h) {
    let b = h * -d.current;
    o.start({
      y: b
    });
    let w = n[h];
    !w || i(w.value);
  }
  let m = (h) => {
    s.current = !0;
    let b = -((n.length - 1) * d.current), w = 0;
    if (h.last) {
      s.current = !1;
      let C = h.offset[1] + h.velocity[1] * h.direction[1] * 50, v = b < w ? -Math.round(_e(C, b, w) / d.current) : 0;
      f(v);
    } else {
      let C = h.offset[1];
      o.start({
        y: Fa(C, b, w, d.current * 50, 0.2)
      });
    }
  };
  jt((h) => {
    h.event.stopPropagation(), m(h);
  }, {
    axis: "y",
    from: () => [0, a.get()],
    filterTaps: !0,
    pointer: {
      touch: !0
    },
    target: c
  }), Qy((h) => {
    h.event.stopPropagation(), m(h);
  }, {
    axis: "y",
    from: () => [0, a.get()],
    preventDefault: !0,
    target: e10.mouseWheel ? c : void 0,
    eventOptions: yi ? {
      passive: !1
    } : !1
  });
  let g = null;
  function p() {
    if (g === null)
      return null;
    let h = n[g], b = g - 1, w = g + 1, C = n[b], v = n[w];
    return import_react2.default.createElement("div", {
      className: "adm-picker-view-column-accessible"
    }, import_react2.default.createElement("div", {
      className: "adm-picker-view-column-accessible-current",
      role: "button",
      "aria-label": h ? `\u5F53\u524D\u9009\u62E9\u7684\u662F\uFF1A${h.label}` : "\u5F53\u524D\u672A\u9009\u62E9"
    }, "-"), import_react2.default.createElement("div", {
      className: "adm-picker-view-column-accessible-button",
      onClick: () => {
        !C || f(b);
      },
      role: C ? "button" : "text",
      "aria-label": C ? `\u9009\u62E9\u4E0A\u4E00\u9879\uFF1A${C.label}` : "\u6CA1\u6709\u4E0A\u4E00\u9879"
    }, "-"), import_react2.default.createElement("div", {
      className: "adm-picker-view-column-accessible-button",
      onClick: () => {
        !v || f(w);
      },
      role: v ? "button" : "text",
      "aria-label": v ? `\u9009\u62E9\u4E0B\u4E00\u9879\uFF1A${v.label}` : "\u6CA1\u6709\u4E0B\u4E00\u9879"
    }, "-"));
  }
  return import_react2.default.createElement("div", {
    className: `${Pr}-column`
  }, import_react2.default.createElement("div", {
    className: `${Pr}-item-height-measure`,
    ref: u
  }), import_react2.default.createElement(ue.div, {
    ref: c,
    style: {
      translateY: a
    },
    className: `${Pr}-column-wheel`,
    "aria-hidden": !0
  }, n.map((h, b) => {
    var w;
    let C = e10.value === h.value;
    C && (g = b);
    function v() {
      s.current = !1, f(b);
    }
    return import_react2.default.createElement("div", {
      key: (w = h.key) !== null && w !== void 0 ? w : h.value,
      "data-selected": h.value === t,
      className: `${Pr}-column-item`,
      onClick: v,
      "aria-hidden": !C,
      "aria-label": C ? "active" : ""
    }, import_react2.default.createElement("div", {
      className: `${Pr}-column-item-label`
    }, r(h)));
  })), p());
}, (e10, t) => !(e10.index !== t.index || e10.value !== t.value || e10.onSelect !== t.onSelect || e10.renderLabel !== t.renderLabel || e10.mouseWheel !== t.mouseWheel || !j5(e10.column, t.column)));
P1.displayName = "Wheel";
function Bu(e10) {
  let t = null;
  return () => (t === null && (t = e10()), t);
}
function N1(e10, t) {
  let n = Bu(() => (typeof e10 == "function" ? e10(t) : e10).map((o) => o.map((s) => typeof s == "string" ? {
    label: s,
    value: s
  } : s))), r = Bu(() => t.map((a, o) => {
    var s;
    let c = n()[o];
    return c && (s = c.find((u) => u.value === a)) !== null && s !== void 0 ? s : null;
  }));
  return {
    get columns() {
      return n();
    },
    get items() {
      return r();
    }
  };
}
function A1(e10, t) {
  return (0, import_react2.useMemo)(() => N1(e10, t), [e10, t]);
}
var T1 = (e10) => e10.label, R1 = { exports: {} }, M1 = {};
var ir = import_react2.default;
function t9(e10, t) {
  return e10 === t && (e10 !== 0 || 1 / e10 === 1 / t) || e10 !== e10 && t !== t;
}
var n9 = typeof Object.is == "function" ? Object.is : t9, r9 = ir.useState, i9 = ir.useEffect, a9 = ir.useLayoutEffect, o9 = ir.useDebugValue;
function s9(e10, t) {
  var n = t(), r = r9({ inst: { value: n, getSnapshot: t } }), i = r[0].inst, a = r[1];
  return a9(function() {
    i.value = n, i.getSnapshot = t, Lo(i) && a({ inst: i });
  }, [e10, n, t]), i9(function() {
    return Lo(i) && a({ inst: i }), e10(function() {
      Lo(i) && a({ inst: i });
    });
  }, [e10]), o9(n), n;
}
function Lo(e10) {
  var t = e10.getSnapshot;
  e10 = e10.value;
  try {
    var n = t();
    return !n9(e10, n);
  } catch {
    return !0;
  }
}
function l9(e10, t) {
  return t();
}
var c9 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l9 : s9;
M1.useSyncExternalStore = ir.useSyncExternalStore !== void 0 ? ir.useSyncExternalStore : c9;
(function(e10) {
  e10.exports = M1;
})(R1);
var Al = !1, $s = /* @__PURE__ */ new Set();
function u9() {
  return Al;
}
function f9() {
  return R1.exports.useSyncExternalStore((e10) => ($s.add(e10), () => {
    $s.delete(e10);
  }), u9);
}
var Do = "adm-spin-loading", d9 = {
  default: "var(--adm-color-weak)",
  primary: "var(--adm-color-primary)",
  white: "var(--adm-color-white)"
}, m9 = {
  color: "default"
}, h9 = 15 * 3.14159265358979 * 2, p9 = (0, import_react2.memo)((e10) => {
  var t;
  let n = Z(m9, e10), r = f9(), {
    percent: i
  } = Ne({
    cancel: r,
    loop: {
      reverse: !0
    },
    from: {
      percent: 80
    },
    to: {
      percent: 30
    },
    config: {
      duration: 1200
    }
  });
  return j(n, import_react2.default.createElement(ue.div, {
    className: Do,
    style: {
      "--color": (t = d9[n.color]) !== null && t !== void 0 ? t : n.color,
      "--percent": i
    }
  }, import_react2.default.createElement("svg", {
    className: `${Do}-svg`,
    viewBox: "0 0 32 32"
  }, import_react2.default.createElement(ue.circle, {
    className: `${Do}-fill`,
    fill: "transparent",
    strokeWidth: "2",
    strokeDasharray: h9,
    strokeDashoffset: i,
    strokeLinecap: "square",
    r: 15,
    cx: 16,
    cy: 16
  }))));
}), Tl = p9, Kn = "adm-picker-view", v9 = {
  defaultValue: [],
  renderLabel: T1,
  mouseWheel: !1,
  loadingContent: import_react2.default.createElement("div", {
    className: `${Kn}-loading-content`
  }, import_react2.default.createElement(Tl, null))
}, L1 = (0, import_react2.memo)((e10) => {
  let t = Z(v9, e10), [n, r] = (0, import_react2.useState)(t.value === void 0 ? t.defaultValue : t.value);
  (0, import_react2.useEffect)(() => {
    t.value !== void 0 && t.value !== n && r(t.value);
  }, [t.value]), (0, import_react2.useEffect)(() => {
    if (t.value === n)
      return;
    let s = window.setTimeout(() => {
      t.value !== void 0 && t.value !== n && r(t.value);
    }, 1e3);
    return () => {
      window.clearTimeout(s);
    };
  }, [t.value, n]);
  let i = A1(t.columns, n), a = i.columns;
  X3(() => {
    var s;
    t.value !== n && ((s = t.onChange) === null || s === void 0 || s.call(t, n, i));
  }, [n], {
    wait: 0,
    leading: !1,
    trailing: !0
  });
  let o = (0, import_react2.useCallback)((s, c) => {
    r((u) => {
      let d = [...u];
      return d[c] = s, d;
    });
  }, []);
  return j(t, import_react2.default.createElement("div", {
    className: `${Kn}`
  }, t.loading ? t.loadingContent : import_react2.default.createElement(import_react2.default.Fragment, null, a.map((s, c) => import_react2.default.createElement(P1, {
    key: c,
    index: c,
    column: s,
    value: n[c],
    onSelect: o,
    renderLabel: t.renderLabel,
    mouseWheel: t.mouseWheel
  })), import_react2.default.createElement("div", {
    className: `${Kn}-mask`
  }, import_react2.default.createElement("div", {
    className: `${Kn}-mask-top`
  }), import_react2.default.createElement("div", {
    className: `${Kn}-mask-middle`
  }), import_react2.default.createElement("div", {
    className: `${Kn}-mask-bottom`
  })))));
});
L1.displayName = "PickerView";
var Rl = L1, Zt = "adm-picker", g9 = {
  defaultValue: [],
  closeOnMaskClick: !0,
  renderLabel: T1,
  destroyOnClose: !1,
  forceRender: !1
}, Ml = (0, import_react2.memo)((0, import_react2.forwardRef)((e10, t) => {
  var n;
  let {
    locale: r
  } = $e(), i = Z(g9, {
    confirmText: r.common.confirm,
    cancelText: r.common.cancel
  }, e10), [a, o] = te({
    value: i.visible,
    defaultValue: !1,
    onChange: (b) => {
      var w;
      b === !1 && ((w = i.onClose) === null || w === void 0 || w.call(i));
    }
  }), s = {
    toggle: () => {
      o((b) => !b);
    },
    open: () => {
      o(!0);
    },
    close: () => {
      o(!1);
    }
  };
  (0, import_react2.useImperativeHandle)(t, () => s);
  let [c, u] = te(Object.assign(Object.assign({}, i), {
    onChange: (b) => {
      var w;
      let C = N1(i.columns, b);
      (w = i.onConfirm) === null || w === void 0 || w.call(i, b, C);
    }
  })), d = A1(i.columns, c), [f, m] = (0, import_react2.useState)(c);
  (0, import_react2.useEffect)(() => {
    f !== c && m(c);
  }, [a]), (0, import_react2.useEffect)(() => {
    a || m(c);
  }, [c]);
  let g = on((b, w) => {
    var C;
    m(b), a && ((C = i.onSelect) === null || C === void 0 || C.call(i, b, w));
  }), p = j(i, import_react2.default.createElement("div", {
    className: Zt
  }, import_react2.default.createElement("div", {
    className: `${Zt}-header`
  }, import_react2.default.createElement("a", {
    role: "button",
    className: `${Zt}-header-button`,
    onClick: () => {
      var b;
      (b = i.onCancel) === null || b === void 0 || b.call(i), o(!1);
    }
  }, i.cancelText), import_react2.default.createElement("div", {
    className: `${Zt}-header-title`
  }, i.title), import_react2.default.createElement("a", {
    role: "button",
    className: V(`${Zt}-header-button`, i.loading && `${Zt}-header-button-disabled`),
    onClick: () => {
      i.loading || (u(f, !0), o(!1));
    },
    "aria-disabled": i.loading
  }, i.confirmText)), import_react2.default.createElement("div", {
    className: `${Zt}-body`
  }, import_react2.default.createElement(Rl, {
    loading: i.loading,
    loadingContent: i.loadingContent,
    columns: i.columns,
    renderLabel: i.renderLabel,
    value: f,
    mouseWheel: i.mouseWheel,
    onChange: g
  })))), h = import_react2.default.createElement($i, {
    style: i.popupStyle,
    className: V(`${Zt}-popup`, i.popupClassName),
    visible: a,
    position: "bottom",
    onMaskClick: () => {
      var b;
      !i.closeOnMaskClick || ((b = i.onCancel) === null || b === void 0 || b.call(i), o(!1));
    },
    getContainer: i.getContainer,
    destroyOnClose: i.destroyOnClose,
    afterShow: i.afterShow,
    afterClose: i.afterClose,
    onClick: i.onClick,
    forceRender: i.forceRender,
    stopPropagation: i.stopPropagation
  }, p, import_react2.default.createElement(br, {
    position: "bottom"
  }));
  return import_react2.default.createElement(import_react2.default.Fragment, null, h, (n = i.children) === null || n === void 0 ? void 0 : n.call(i, d.items, s));
}));
Ml.displayName = "Picker";
function y9(e10) {
  return new Promise((t) => {
    let n = () => {
      let [i, a] = (0, import_react2.useState)(!1);
      return (0, import_react2.useEffect)(() => {
        a(!0);
      }, []), import_react2.default.createElement(Ml, Object.assign({}, e10, {
        visible: i,
        onConfirm: (o, s) => {
          var c;
          (c = e10.onConfirm) === null || c === void 0 || c.call(e10, o, s), t(o);
        },
        onClose: () => {
          var o;
          (o = e10.onClose) === null || o === void 0 || o.call(e10), a(!1), t(null);
        },
        afterClose: () => {
          var o;
          (o = e10.afterClose) === null || o === void 0 || o.call(e10), r();
        }
      }));
    }, r = xi(import_react2.default.createElement(n, null));
  });
}
var D1 = ie(Ml, {
  prompt: y9
});
function V1(e10) {
  let t = (0, import_react2.useMemo)(() => {
    let n = 0;
    function r(i, a) {
      a > n && (n = a);
      let o = a + 1;
      i.forEach((s) => {
        s.children && r(s.children, o);
      });
    }
    return r(e10, 1), n;
  }, [e10]);
  return (n) => {
    let r = [], i = e10, a = 0;
    for (; ; ) {
      r.push(i.map((c) => ({
        label: c.label,
        value: c.value
      })));
      let o = n[a], s = i.find((c) => c.value === o);
      if (!s || !s.children)
        break;
      i = s.children, a++;
    }
    for (; a < t - 1; )
      r.push([]), a++;
    return r;
  };
}
var j1 = (0, import_react2.forwardRef)((e10, t) => {
  let {
    options: n
  } = e10, r = di(e10, ["options"]), i = V1(n);
  return import_react2.default.createElement(D1, Object.assign({}, r, {
    ref: t,
    columns: i
  }));
});
function b9(e10) {
  return new Promise((t) => {
    let n = () => {
      let [i, a] = (0, import_react2.useState)(!1);
      return (0, import_react2.useEffect)(() => {
        a(!0);
      }, []), import_react2.default.createElement(j1, Object.assign({}, e10, {
        visible: i,
        onConfirm: (o, s) => {
          var c;
          (c = e10.onConfirm) === null || c === void 0 || c.call(e10, o, s), t(o);
        },
        onClose: () => {
          var o;
          (o = e10.onClose) === null || o === void 0 || o.call(e10), a(!1), t(null);
        },
        afterClose: () => {
          var o;
          (o = e10.afterClose) === null || o === void 0 || o.call(e10), r();
        }
      }));
    }, r = xi(import_react2.default.createElement(n, null));
  });
}
var Tk = ie(j1, {
  prompt: b9
});
var We = "adm-tabs", E9 = () => null, C9 = {
  activeLineMode: "auto",
  stretch: !0
}, $9 = (e10) => {
  var t;
  let n = Z(C9, e10), r = (0, import_react2.useRef)(null), i = (0, import_react2.useRef)(null), a = {}, o = null, s = [];
  sn(n.children, (y, E) => {
    if (!import_react2.default.isValidElement(y))
      return;
    let $ = y.key;
    if (typeof $ != "string")
      return;
    E === 0 && (o = $);
    let k = s.push(y);
    a[$] = k - 1;
  });
  let [c, u] = te({
    value: n.activeKey,
    defaultValue: (t = n.defaultActiveKey) !== null && t !== void 0 ? t : o,
    onChange: (y) => {
      var E;
      y !== null && ((E = n.onChange) === null || E === void 0 || E.call(n, y));
    }
  }), [{
    x: d,
    width: f
  }, m] = Ne(() => ({
    x: 0,
    width: 0,
    config: {
      tension: 300,
      clamp: !0
    }
  })), [{
    scrollLeft: g
  }, p] = Ne(() => ({
    scrollLeft: 0,
    config: {
      tension: 300,
      clamp: !0
    }
  })), [{
    leftMaskOpacity: h,
    rightMaskOpacity: b
  }, w] = Ne(() => ({
    leftMaskOpacity: 0,
    rightMaskOpacity: 0,
    config: {
      clamp: !0
    }
  }));
  function C(y = !1) {
    let E = r.current;
    if (!E)
      return;
    let $ = a[c];
    if ($ === void 0) {
      m.start({
        x: 0,
        width: 0,
        immediate: !0
      });
      return;
    }
    let k = i.current;
    if (!k)
      return;
    let A = E.children.item($ + 1), P = A.children.item(0), N = P.offsetLeft, T = P.offsetWidth, O = A.offsetLeft, _ = A.offsetWidth, x = E.offsetWidth, S = E.scrollWidth, M = E.scrollLeft, F = k.offsetWidth, R = 0, I = 0;
    if (n.activeLineMode === "auto" ? (R = N, I = T) : n.activeLineMode === "full" ? (R = O, I = _) : R = N + (T - F) / 2, m.start({
      x: R,
      width: I,
      immediate: y
    }), S - x <= 0)
      return;
    let G = _e(N - (x - T) / 2, 0, S - x);
    p.start({
      scrollLeft: G,
      from: {
        scrollLeft: M
      },
      immediate: y
    });
  }
  Ce(() => {
    C(!d.isAnimating);
  }, []), _i(() => {
    C();
  }, [c]), ki(() => {
    C(!d.isAnimating);
  }, r), Ol(() => {
    C(!d.isAnimating);
  }, r, {
    subtree: !0,
    childList: !0,
    characterData: !0
  });
  let {
    run: v
  } = za((y = !1) => {
    let E = r.current;
    if (!E)
      return;
    let $ = E.scrollLeft, k = $ > 0, A = $ + E.offsetWidth < E.scrollWidth;
    w.start({
      leftMaskOpacity: k ? 1 : 0,
      rightMaskOpacity: A ? 1 : 0,
      immediate: y
    });
  }, {
    wait: 100,
    trailing: !0,
    leading: !0
  });
  return Ce(() => {
    v(!0);
  }, []), j(n, import_react2.default.createElement("div", {
    className: We
  }, import_react2.default.createElement("div", {
    className: `${We}-header`
  }, import_react2.default.createElement(ue.div, {
    className: V(`${We}-header-mask`, `${We}-header-mask-left`),
    style: {
      opacity: h
    }
  }), import_react2.default.createElement(ue.div, {
    className: V(`${We}-header-mask`, `${We}-header-mask-right`),
    style: {
      opacity: b
    }
  }), import_react2.default.createElement(ue.div, {
    className: `${We}-tab-list`,
    ref: r,
    scrollLeft: g,
    onScroll: v
  }, import_react2.default.createElement(ue.div, {
    ref: i,
    className: `${We}-tab-line`,
    style: {
      width: n.activeLineMode === "fixed" ? "var(--fixed-active-line-width, 30px)" : f,
      x: d
    }
  }), s.map((y) => j(y.props, import_react2.default.createElement("div", {
    key: y.key,
    className: V(`${We}-tab-wrapper`, {
      [`${We}-tab-wrapper-stretch`]: n.stretch
    })
  }, import_react2.default.createElement("div", {
    onClick: () => {
      let {
        key: E
      } = y;
      y.props.disabled || E != null && u(E.toString());
    },
    className: V(`${We}-tab`, {
      [`${We}-tab-active`]: y.key === c,
      [`${We}-tab-disabled`]: y.props.disabled
    })
  }, y.props.title)))))), s.map((y) => {
    if (y.props.children === void 0)
      return null;
    let E = y.key === c;
    return import_react2.default.createElement(yr, {
      key: y.key,
      active: E,
      forceRender: y.props.forceRender,
      destroyOnClose: y.props.destroyOnClose
    }, import_react2.default.createElement("div", {
      className: `${We}-content`,
      style: {
        display: E ? "block" : "none"
      }
    }, y.props.children));
  })));
}, Wu = ie($9, {
  Tab: E9
}), Nr = "adm-list", x9 = {
  mode: "default"
}, _9 = (0, import_react2.forwardRef)((e10, t) => {
  let n = Z(x9, e10), r = (0, import_react2.useRef)(null);
  return (0, import_react2.useImperativeHandle)(t, () => ({
    get nativeElement() {
      return r.current;
    }
  })), j(n, import_react2.default.createElement("div", {
    className: V(Nr, `${Nr}-${n.mode}`),
    ref: r
  }, n.header && import_react2.default.createElement("div", {
    className: `${Nr}-header`
  }, n.header), import_react2.default.createElement("div", {
    className: `${Nr}-body`
  }, import_react2.default.createElement("div", {
    className: `${Nr}-body-inner`
  }, n.children))));
});
function It(e10) {
  return e10 != null && e10 !== !1;
}
var St = "adm-list-item", k9 = (e10) => {
  var t;
  let n = (t = e10.clickable) !== null && t !== void 0 ? t : !!e10.onClick, r = e10.arrow === void 0 ? n : e10.arrow, i = import_react2.default.createElement("div", {
    className: `${St}-content`
  }, It(e10.prefix) && import_react2.default.createElement("div", {
    className: `${St}-content-prefix`
  }, e10.prefix), import_react2.default.createElement("div", {
    className: `${St}-content-main`
  }, It(e10.title) && import_react2.default.createElement("div", {
    className: `${St}-title`
  }, e10.title), e10.children, It(e10.description) && import_react2.default.createElement("div", {
    className: `${St}-description`
  }, e10.description)), It(e10.extra) && import_react2.default.createElement("div", {
    className: `${St}-content-extra`
  }, e10.extra), It(r) && import_react2.default.createElement("div", {
    className: `${St}-content-arrow`
  }, r === !0 ? import_react2.default.createElement(r8, null) : r));
  return j(e10, import_react2.default.createElement(n ? "a" : "div", {
    className: V(`${St}`, n ? ["adm-plain-anchor"] : [], e10.disabled && `${St}-disabled`),
    onClick: e10.disabled ? void 0 : e10.onClick
  }, i));
}, $t = ie(_9, {
  Item: k9
}), B1 = (0, import_react2.createContext)(null), O9 = "adm-check-list", S9 = {
  multiple: !1,
  defaultValue: [],
  activeIcon: import_react2.default.createElement(Jd, null)
}, F9 = (e10) => {
  let t = Z(S9, e10), [n, r] = te(t);
  function i(u) {
    t.multiple ? r([...n, u]) : r([u]);
  }
  function a(u) {
    r(n.filter((d) => d !== u));
  }
  let {
    activeIcon: o,
    disabled: s,
    readOnly: c
  } = t;
  return import_react2.default.createElement(B1.Provider, {
    value: {
      value: n,
      check: i,
      uncheck: a,
      activeIcon: o,
      disabled: s,
      readOnly: c
    }
  }, j(t, import_react2.default.createElement($t, {
    mode: t.mode,
    className: O9
  }, t.children)));
}, Qi = "adm-check-list-item", P9 = (e10) => {
  let t = (0, import_react2.useContext)(B1);
  if (t === null)
    return Le("CheckList.Item", "CheckList.Item can only be used inside CheckList."), null;
  let n = t.value.includes(e10.value), r = e10.readOnly || t.readOnly, i = import_react2.default.createElement("div", {
    className: `${Qi}-extra`
  }, n ? t.activeIcon : null);
  return j(e10, import_react2.default.createElement($t.Item, {
    title: e10.title,
    className: V(Qi, r && `${Qi}-readonly`, n && `${Qi}-active`),
    description: e10.description,
    prefix: e10.prefix,
    onClick: (a) => {
      var o;
      r || (n ? t.uncheck(e10.value) : t.check(e10.value), (o = e10.onClick) === null || o === void 0 || o.call(e10, a));
    },
    arrow: !1,
    clickable: !r,
    extra: i,
    disabled: e10.disabled || t.disabled
  }, e10.children));
}, Zu = ie(F9, {
  Item: P9
}), W1 = ol, N9 = "Expected a function";
function Il(e10, t) {
  if (typeof e10 != "function" || t != null && typeof t != "function")
    throw new TypeError(N9);
  var n = function() {
    var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(i))
      return a.get(i);
    var o = e10.apply(this, r);
    return n.cache = a.set(i, o) || a, o;
  };
  return n.cache = new (Il.Cache || W1)(), n;
}
Il.Cache = W1;
var Hu = Il;
function Z1(e10) {
  let t = (0, import_react2.useMemo)(() => Hu((i) => {
    let a = [], o = e10;
    for (let s of i) {
      let c = o.find((u) => u.value === s);
      if (!c || (a.push(c), !c.children))
        break;
      o = c.children;
    }
    return a;
  }, (i) => JSON.stringify(i)), [e10]), n = (0, import_react2.useMemo)(() => Hu((i) => i.reduce((o, s) => {
    var c;
    return ((c = o.find((u) => u.value === s)) === null || c === void 0 ? void 0 : c.children) || [];
  }, e10).length === 0, (i) => JSON.stringify(i)), [e10]);
  function r(i) {
    return {
      get items() {
        return t(i);
      },
      get isLeaf() {
        return n(i);
      }
    };
  }
  return r;
}
var Ll = [];
function A9(e10, t) {
  let n = [];
  for (let r = e10; r <= t; r++)
    n.push(r);
  return n;
}
var oi = "adm-skeleton", Dl = (e10) => j(e10, import_react2.default.createElement("div", {
  className: V(oi, {
    [`${oi}-animated`]: e10.animated
  })
})), T9 = (e10) => j(e10, import_react2.default.createElement(Dl, {
  animated: e10.animated,
  className: `${oi}-title`
})), R9 = {
  lineCount: 3
}, M9 = (e10) => {
  let t = Z(R9, e10), n = A9(1, t.lineCount), r = import_react2.default.createElement("div", {
    className: `${oi}-paragraph`
  }, n.map((i) => import_react2.default.createElement(Dl, {
    key: i,
    animated: t.animated,
    className: `${oi}-paragraph-line`
  })));
  return j(t, r);
}, Ji = ie(Dl, {
  Title: T9,
  Paragraph: M9
}), ut = "adm-cascader-view", I9 = {
  defaultValue: []
}, L9 = (e10) => {
  let {
    locale: t
  } = $e(), n = Z(I9, e10), r = n.placeholder || t.Cascader.placeholder, [i, a] = te(Object.assign(Object.assign({}, n), {
    onChange: (f) => {
      var m;
      (m = n.onChange) === null || m === void 0 || m.call(n, f, c(f));
    }
  })), [o, s] = (0, import_react2.useState)(0);
  Va(() => {
    var f;
    (f = n.onTabsChange) === null || f === void 0 || f.call(n, o);
  }, [o]);
  let c = Z1(n.options), u = (0, import_react2.useMemo)(() => {
    let f = [], m = n.options, g = !1;
    for (let p of i) {
      let h = m.find((b) => b.value === p);
      if (f.push({
        selected: h,
        options: m
      }), !h || !h.children) {
        g = !0;
        break;
      }
      m = h.children;
    }
    return g || f.push({
      selected: void 0,
      options: m
    }), f;
  }, [i, n.options]);
  (0, import_react2.useEffect)(() => {
    s(u.length - 1);
  }, [i]), (0, import_react2.useEffect)(() => {
    let f = u.length - 1;
    o > f && s(f);
  }, [o, u]);
  let d = (f, m) => {
    let g = i.slice(0, m);
    f !== void 0 && (g[m] = f), a(g);
  };
  return j(n, import_react2.default.createElement("div", {
    className: ut
  }, import_react2.default.createElement(Wu, {
    activeKey: o.toString(),
    onChange: (f) => {
      let m = parseInt(f);
      s(m);
    },
    stretch: !1,
    className: `${ut}-tabs`
  }, u.map((f, m) => {
    let g = f.selected;
    return import_react2.default.createElement(Wu.Tab, {
      key: m.toString(),
      title: import_react2.default.createElement("div", {
        className: `${ut}-header-title`
      }, g ? g.label : typeof r == "function" ? r(m) : r),
      forceRender: !0
    }, import_react2.default.createElement("div", {
      className: `${ut}-content`
    }, f.options === Ll ? import_react2.default.createElement("div", {
      className: `${ut}-skeleton`
    }, import_react2.default.createElement(Ji, {
      className: `${ut}-skeleton-line-1`,
      animated: !0
    }), import_react2.default.createElement(Ji, {
      className: `${ut}-skeleton-line-2`,
      animated: !0
    }), import_react2.default.createElement(Ji, {
      className: `${ut}-skeleton-line-3`,
      animated: !0
    }), import_react2.default.createElement(Ji, {
      className: `${ut}-skeleton-line-4`,
      animated: !0
    })) : import_react2.default.createElement(Zu, {
      value: [i[m]],
      onChange: (p) => d(p[0], m),
      activeIcon: n.activeIcon
    }, f.options.map((p) => {
      let h = i[m] === p.value;
      return import_react2.default.createElement(Zu.Item, {
        value: p.value,
        key: p.value,
        disabled: p.disabled,
        className: V(`${ut}-item`, {
          [`${ut}-item-active`]: h
        })
      }, p.label);
    }))));
  }))));
}, D9 = ie(L9, {
  optionSkeleton: Ll
}), Vn = "adm-cascader", V9 = {
  defaultValue: [],
  destroyOnClose: !0,
  forceRender: !1
}, H1 = (0, import_react2.forwardRef)((e10, t) => {
  var n;
  let {
    locale: r
  } = $e(), i = Z(V9, {
    confirmText: r.common.confirm,
    cancelText: r.common.cancel,
    placeholder: r.Cascader.placeholder
  }, e10), [a, o] = te({
    value: i.visible,
    defaultValue: !1,
    onChange: (h) => {
      var b;
      h === !1 && ((b = i.onClose) === null || b === void 0 || b.call(i));
    }
  }), s = {
    toggle: () => {
      o((h) => !h);
    },
    open: () => {
      o(!0);
    },
    close: () => {
      o(!1);
    }
  };
  (0, import_react2.useImperativeHandle)(t, () => s);
  let [c, u] = te(Object.assign(Object.assign({}, i), {
    onChange: (h) => {
      var b;
      (b = i.onConfirm) === null || b === void 0 || b.call(i, h, d(h));
    }
  })), d = Z1(i.options), [f, m] = (0, import_react2.useState)(c);
  (0, import_react2.useEffect)(() => {
    a || m(c);
  }, [a]), (0, import_react2.useEffect)(() => {
    a || m(c);
  }, [c]);
  let g = j(i, import_react2.default.createElement("div", {
    className: Vn
  }, import_react2.default.createElement("div", {
    className: `${Vn}-header`
  }, import_react2.default.createElement("a", {
    className: `${Vn}-header-button`,
    onClick: () => {
      var h;
      (h = i.onCancel) === null || h === void 0 || h.call(i), o(!1);
    }
  }, i.cancelText), import_react2.default.createElement("div", {
    className: `${Vn}-header-title`
  }, i.title), import_react2.default.createElement("a", {
    className: `${Vn}-header-button`,
    onClick: () => {
      u(f, !0), o(!1);
    }
  }, i.confirmText)), import_react2.default.createElement("div", {
    className: `${Vn}-body`
  }, import_react2.default.createElement(D9, Object.assign({}, i, {
    value: f,
    onChange: (h, b) => {
      var w;
      m(h), a && ((w = i.onSelect) === null || w === void 0 || w.call(i, h, b));
    }
  }))))), p = import_react2.default.createElement($i, {
    visible: a,
    position: "bottom",
    onMaskClick: () => {
      var h;
      (h = i.onCancel) === null || h === void 0 || h.call(i), o(!1);
    },
    getContainer: i.getContainer,
    destroyOnClose: i.destroyOnClose,
    forceRender: i.forceRender,
    afterShow: i.afterShow,
    afterClose: i.afterClose,
    onClick: i.onClick,
    stopPropagation: i.stopPropagation
  }, g);
  return import_react2.default.createElement(import_react2.default.Fragment, null, p, (n = i.children) === null || n === void 0 ? void 0 : n.call(i, d(c).items, s));
});
function j9(e10) {
  return new Promise((t) => {
    let n = () => {
      let [i, a] = (0, import_react2.useState)(!1);
      return (0, import_react2.useEffect)(() => {
        a(!0);
      }, []), import_react2.default.createElement(H1, Object.assign({}, e10, {
        visible: i,
        onConfirm: (o, s) => {
          var c;
          (c = e10.onConfirm) === null || c === void 0 || c.call(e10, o, s), t(o);
        },
        onClose: () => {
          var o;
          (o = e10.onClose) === null || o === void 0 || o.call(e10), a(!1), t(null);
        },
        afterClose: () => {
          var o;
          (o = e10.afterClose) === null || o === void 0 || o.call(e10), r();
        }
      }));
    }, r = xi(import_react2.default.createElement(n, null));
  });
}
var Mk = ie(H1, {
  prompt: j9,
  optionSkeleton: Ll
}), B9 = Object.assign(Object.assign({}, i1), {
  getContainer: null
}), W9 = (e10) => {
  let t = Z(B9, e10), n = sl(), r = Ne({
    scale: t.visible ? 1 : 0.8,
    opacity: t.visible ? 1 : 0,
    config: {
      mass: 1.2,
      tension: 200,
      friction: 25,
      clamp: !0
    },
    onRest: () => {
      var d, f;
      n.current || (a(t.visible), t.visible ? (d = t.afterShow) === null || d === void 0 || d.call(t) : (f = t.afterClose) === null || f === void 0 || f.call(t));
    }
  }), [i, a] = (0, import_react2.useState)(t.visible);
  Ce(() => {
    t.visible && a(!0);
  }, [t.visible]);
  let o = (0, import_react2.useRef)(null);
  Ua(o, t.disableBodyScroll && i);
  let s = a1(i && t.visible), c = import_react2.default.createElement("div", {
    className: V("adm-center-popup-body", t.bodyClassName),
    style: t.bodyStyle
  }, t.children), u = tn(t.stopPropagation, j(t, import_react2.default.createElement("div", {
    className: "adm-center-popup",
    style: {
      display: i ? void 0 : "none",
      pointerEvents: i ? void 0 : "none"
    }
  }, t.mask && import_react2.default.createElement(Ei, {
    visible: s,
    forceRender: t.forceRender,
    destroyOnClose: t.destroyOnClose,
    onMaskClick: (d) => {
      var f, m;
      (f = t.onMaskClick) === null || f === void 0 || f.call(t, d), t.closeOnMaskClick && ((m = t.onClose) === null || m === void 0 || m.call(t));
    },
    style: t.maskStyle,
    className: V("adm-center-popup-mask", t.maskClassName),
    disableBodyScroll: !1,
    stopPropagation: t.stopPropagation
  }), import_react2.default.createElement("div", {
    className: "adm-center-popup-wrap",
    role: t.role,
    "aria-label": t["aria-label"]
  }, import_react2.default.createElement(ue.div, {
    style: r,
    ref: o
  }, t.showCloseButton && import_react2.default.createElement("a", {
    className: V("adm-center-popup-close", "adm-plain-anchor"),
    onClick: () => {
      var d;
      (d = t.onClose) === null || d === void 0 || d.call(t);
    }
  }, import_react2.default.createElement(Ci, null)), c)))));
  return import_react2.default.createElement(yr, {
    active: i,
    forceRender: t.forceRender,
    destroyOnClose: t.destroyOnClose
  }, gr(t.getContainer, u));
}, z1 = W9, U1 = (0, import_react2.createContext)(null), Z9 = {
  disabled: !1,
  defaultValue: []
}, H9 = (e10) => {
  let t = Z(Z9, e10), [n, r] = te(t);
  return import_react2.default.createElement(
    U1.Provider,
    {
      value: {
        value: n,
        disabled: t.disabled,
        check: (i) => {
          r([...n, i]);
        },
        uncheck: (i) => {
          r(n.filter((a) => a !== i));
        }
      }
    },
    t.children
  );
}, q1 = (0, import_react2.memo)((e10) => j(e10, import_react2.default.createElement("svg", {
  viewBox: "0 0 40 40"
}, import_react2.default.createElement("path", {
  d: "M31.5541766,15 L28.0892433,15 L28.0892434,15 C27.971052,15 27.8576674,15.044522 27.7740471,15.1239792 L18.2724722,24.1625319 L13.2248725,19.3630279 L13.2248725,19.3630279 C13.1417074,19.2834412 13.0287551,19.2384807 12.9107898,19.2380079 L9.44474455,19.2380079 L9.44474454,19.2380079 C9.19869815,19.2384085 8.99957935,19.4284738 9,19.66253 C9,19.7747587 9.04719253,19.8823283 9.13066188,19.9616418 L17.0907466,27.5338228 C17.4170809,27.8442545 17.8447695,28 18.2713393,28 L18.2980697,28 C18.7168464,27.993643 19.133396,27.8378975 19.4530492,27.5338228 L31.8693384,15.7236361 L31.8693384,15.7236361 C32.0434167,15.5582251 32.0435739,15.2898919 31.8696892,15.1242941 C31.7860402,15.0446329 31.6725052,15 31.5541421,15 L31.5541766,15 Z",
  fill: "currentColor"
})))), z9 = (0, import_react2.memo)((e10) => j(e10, import_react2.default.createElement("svg", {
  viewBox: "0 0 40 40"
}, import_react2.default.createElement("path", {
  d: "M20,9 C26.0752953,9 31,13.9247047 31,20 C31,26.0752953 26.0752953,31 20,31 C13.9247047,31 9,26.0752953 9,20 C9,13.9247047 13.9247047,9 20,9 Z",
  fill: "currentColor"
})))), K1 = (e10) => {
  let t = (0, import_react2.useRef)(null), n = on((r) => {
    r.stopPropagation(), r.stopImmediatePropagation();
    let i = r.target.checked;
    i !== e10.checked && e10.onChange(i);
  });
  return (0, import_react2.useEffect)(() => {
    if (e10.disabled || !t.current)
      return;
    let r = t.current;
    return r.addEventListener("click", n), () => {
      r.removeEventListener("click", n);
    };
  }, [e10.disabled, e10.onChange]), import_react2.default.createElement("input", {
    ref: t,
    type: e10.type,
    checked: e10.checked,
    onChange: () => {
    },
    disabled: e10.disabled,
    id: e10.id
  });
}, Ht = "adm-checkbox", U9 = {
  defaultChecked: !1,
  indeterminate: !1
}, q9 = (0, import_react2.forwardRef)((e10, t) => {
  let n = (0, import_react2.useContext)(U1), r = Z(U9, e10), [i, a] = te({
    value: r.checked,
    defaultValue: r.defaultChecked,
    onChange: r.onChange
  }), o = r.disabled, {
    value: s
  } = r;
  n && s !== void 0 && (lo && (e10.checked !== void 0 && Le("Checkbox", "When used within `Checkbox.Group`, the `checked` prop of `Checkbox` will not work."), e10.defaultChecked !== void 0 && Le("Checkbox", "When used within `Checkbox.Group`, the `defaultChecked` prop of `Checkbox` will not work.")), i = n.value.includes(s), a = (u) => {
    var d;
    u ? n.check(s) : n.uncheck(s), (d = r.onChange) === null || d === void 0 || d.call(r, u);
  }, o = o || n.disabled), (0, import_react2.useImperativeHandle)(t, () => ({
    check: () => {
      a(!0);
    },
    uncheck: () => {
      a(!1);
    },
    toggle: () => {
      a(!i);
    }
  }));
  let c = () => r.icon ? import_react2.default.createElement("div", {
    className: `${Ht}-custom-icon`
  }, r.icon(i, r.indeterminate)) : import_react2.default.createElement("div", {
    className: `${Ht}-icon`
  }, r.indeterminate ? import_react2.default.createElement(z9, null) : i && import_react2.default.createElement(q1, null));
  return j(r, import_react2.default.createElement("label", {
    className: V(Ht, {
      [`${Ht}-checked`]: i && !r.indeterminate,
      [`${Ht}-indeterminate`]: r.indeterminate,
      [`${Ht}-disabled`]: o,
      [`${Ht}-block`]: r.block
    })
  }, import_react2.default.createElement(K1, {
    type: "checkbox",
    checked: i,
    onChange: a,
    disabled: o,
    id: r.id
  }), c(), r.children && import_react2.default.createElement("div", {
    className: `${Ht}-content`
  }, r.children)));
}), zu = ie(q9, {
  Group: H9
}), Gn = "adm-collapse", K9 = () => null, G9 = (e10) => {
  let {
    visible: t
  } = e10, n = (0, import_react2.useRef)(null), r = to(t, e10.forceRender, e10.destroyOnClose), [{
    height: i
  }, a] = Ne(() => ({
    from: {
      height: 0
    },
    config: {
      precision: 0.01,
      mass: 1,
      tension: 200,
      friction: 25,
      clamp: !0
    }
  }));
  return W3(() => {
    if (!t)
      return;
    let o = n.current;
    !o || a.start({
      height: o.offsetHeight,
      immediate: !0
    });
  }), _i(() => {
    let o = n.current;
    !o || (t ? a.start({
      height: o.offsetHeight
    }) : (a.start({
      height: o.offsetHeight,
      immediate: !0
    }), a.start({
      height: 0
    })));
  }, [t]), import_react2.default.createElement(ue.div, {
    className: `${Gn}-panel-content`,
    style: {
      height: i.to((o) => i.idle && t ? "auto" : o)
    }
  }, import_react2.default.createElement("div", {
    className: `${Gn}-panel-content-inner`,
    ref: n
  }, import_react2.default.createElement($t.Item, null, r && e10.children)));
}, Y9 = (e10) => {
  var t;
  let n = [];
  sn(e10.children, (o) => {
    !import_react2.default.isValidElement(o) || typeof o.key != "string" || n.push(o);
  });
  let [r, i] = te(e10.accordion ? {
    value: e10.activeKey === void 0 ? void 0 : e10.activeKey === null ? [] : [e10.activeKey],
    defaultValue: e10.defaultActiveKey === void 0 || e10.defaultActiveKey === null ? [] : [e10.defaultActiveKey],
    onChange: (o) => {
      var s, c;
      (s = e10.onChange) === null || s === void 0 || s.call(e10, (c = o[0]) !== null && c !== void 0 ? c : null);
    }
  } : {
    value: e10.activeKey,
    defaultValue: (t = e10.defaultActiveKey) !== null && t !== void 0 ? t : [],
    onChange: e10.onChange
  }), a = r === null ? [] : Array.isArray(r) ? r : [r];
  return j(e10, import_react2.default.createElement("div", {
    className: Gn
  }, import_react2.default.createElement($t, null, n.map((o) => {
    let s = o.key, c = a.includes(s);
    function u(f) {
      var m, g;
      e10.accordion ? i(c ? [] : [s]) : i(c ? a.filter((p) => p !== s) : [...a, s]), (g = (m = o.props).onClick) === null || g === void 0 || g.call(m, f);
    }
    let d = () => {
      let f = import_react2.default.createElement(t1, null);
      return e10.arrow !== void 0 && (f = e10.arrow), o.props.arrow !== void 0 && (f = o.props.arrow), typeof f == "function" ? f(c) : import_react2.default.createElement("div", {
        className: V(`${Gn}-arrow`, {
          [`${Gn}-arrow-active`]: c
        })
      }, f);
    };
    return import_react2.default.createElement(import_react2.default.Fragment, {
      key: s
    }, j(o.props, import_react2.default.createElement($t.Item, {
      className: `${Gn}-panel-header`,
      onClick: u,
      disabled: o.props.disabled,
      arrow: d()
    }, o.props.title)), import_react2.default.createElement(G9, {
      visible: c,
      forceRender: !!o.props.forceRender,
      destroyOnClose: !!o.props.destroyOnClose
    }, o.props.children));
  }))));
}, Ik = ie(Y9, {
  Panel: K9
}), G1 = { exports: {} };
(function(e10, t) {
  (function(n, r) {
    e10.exports = r();
  })(Ct, function() {
    return function(n, r) {
      r.prototype.isoWeeksInYear = function() {
        var i = this.isLeapYear(), a = this.endOf("y").day();
        return a === 4 || i && a === 5 ? 53 : 52;
      };
    };
  });
})(G1);
var Y1 = G1.exports, X1 = { exports: {} };
(function(e10, t) {
  (function(n, r) {
    e10.exports = r();
  })(Ct, function() {
    return function(n, r) {
      r.prototype.isLeapYear = function() {
        return this.$y % 4 == 0 && this.$y % 100 != 0 || this.$y % 400 == 0;
      };
    };
  });
})(X1);
var Q1 = X1.exports, si = "TILL_NOW";
xe.extend(kl);
xe.extend(Y1);
xe.extend(Q1);
var zt = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function X9(e10, t, n, r, i, a, o) {
  let s = [], c = t.getFullYear(), u = t.getMonth() + 1, d = t.getDate(), f = t.getHours(), m = t.getMinutes(), g = t.getSeconds(), p = n.getFullYear(), h = n.getMonth() + 1, b = n.getDate(), w = n.getHours(), C = n.getMinutes(), v = n.getSeconds(), y = zt[r], E = parseInt(e10[0]), $ = xe(xs([e10[0], e10[1], "1"])), k = parseInt(e10[1]), A = parseInt(e10[2]), P = parseInt(e10[3]), N = parseInt(e10[4]), T = E === c, O = E === p, _ = T && k === u, x = O && k === h, S = _ && A === d, M = x && A === b, F = S && P === f, R = M && P === w, I = F && N === m, W = R && N === C, G = (H, U, X) => {
    let K = [];
    for (let he = H; he <= U; he++)
      K.push(he);
    let Oe = e10.slice(0, zt[X]), Se = a == null ? void 0 : a[X];
    return Se && typeof Se == "function" && (K = K.filter((he) => Se(he, {
      get date() {
        let pe = [...Oe, he.toString()];
        return xs(pe);
      }
    }))), K;
  };
  if (y >= zt.year) {
    let X = G(c, p, "year");
    s.push(X.map((K) => ({
      label: i("year", K),
      value: K.toString()
    })));
  }
  if (y >= zt.month) {
    let X = G(T ? u : 1, O ? h : 12, "month");
    s.push(X.map((K) => ({
      label: i("month", K),
      value: K.toString()
    })));
  }
  if (y >= zt.day) {
    let H = _ ? d : 1, U = x ? b : $.daysInMonth(), X = G(H, U, "day");
    s.push(X.map((K) => ({
      label: i("day", K),
      value: K.toString()
    })));
  }
  if (y >= zt.hour) {
    let X = G(S ? f : 0, M ? w : 23, "hour");
    s.push(X.map((K) => ({
      label: i("hour", K),
      value: K.toString()
    })));
  }
  if (y >= zt.minute) {
    let X = G(F ? m : 0, R ? C : 59, "minute");
    s.push(X.map((K) => ({
      label: i("minute", K),
      value: K.toString()
    })));
  }
  if (y >= zt.second) {
    let X = G(I ? g : 0, W ? v : 59, "second");
    s.push(X.map((K) => ({
      label: i("second", K),
      value: K.toString()
    })));
  }
  if (o && (s[0].push({
    label: i("now", null),
    value: si
  }), si === (e10 == null ? void 0 : e10[0])))
    for (let H = 1; H < s.length; H += 1)
      s[H] = [];
  return s;
}
function Q9(e10) {
  return e10 ? [e10.getFullYear().toString(), (e10.getMonth() + 1).toString(), e10.getDate().toString(), e10.getHours().toString(), e10.getMinutes().toString(), e10.getSeconds().toString()] : [];
}
function xs(e10) {
  var t, n, r, i, a, o;
  let s = (t = e10[0]) !== null && t !== void 0 ? t : "1900", c = (n = e10[1]) !== null && n !== void 0 ? n : "1", u = (r = e10[2]) !== null && r !== void 0 ? r : "1", d = (i = e10[3]) !== null && i !== void 0 ? i : "0", f = (a = e10[4]) !== null && a !== void 0 ? a : "0", m = (o = e10[5]) !== null && o !== void 0 ? o : "0";
  return new Date(parseInt(s), parseInt(c) - 1, parseInt(u), parseInt(d), parseInt(f), parseInt(m));
}
xe.extend(kl);
xe.extend(Y1);
xe.extend(Q1);
var Ar = {
  year: 0,
  week: 1,
  "week-day": 2
};
function J9(e10, t, n, r, i, a) {
  let o = [], s = t.getFullYear(), c = n.getFullYear(), u = Ar[r], d = parseInt(e10[0]), f = d === s, m = d === c, g = xe(t), p = xe(n), h = g.isoWeek(), b = p.isoWeek(), w = g.isoWeekday(), C = p.isoWeekday(), v = parseInt(e10[1]), y = f && v === h, E = m && v === b, $ = xe(`${d}-01-01`).isoWeeksInYear(), k = (A, P, N) => {
    let T = [];
    for (let x = A; x <= P; x++)
      T.push(x);
    let O = e10.slice(0, Ar[N]), _ = a == null ? void 0 : a[N];
    return _ && typeof _ == "function" && (T = T.filter((x) => _(x, {
      get date() {
        let S = [...O, x.toString()];
        return J1(S);
      }
    }))), T;
  };
  if (u >= Ar.year) {
    let N = k(s, c, "year");
    o.push(N.map((T) => ({
      label: i("year", T),
      value: T.toString()
    })));
  }
  if (u >= Ar.week) {
    let N = k(f ? h : 1, m ? b : $, "week");
    o.push(N.map((T) => ({
      label: i("week", T),
      value: T.toString()
    })));
  }
  if (u >= Ar["week-day"]) {
    let N = k(y ? w : 1, E ? C : 7, "week-day");
    o.push(N.map((T) => ({
      label: i("week-day", T),
      value: T.toString()
    })));
  }
  return o;
}
function eb(e10) {
  if (!e10)
    return [];
  let t = xe(e10);
  return [t.isoWeekYear().toString(), t.isoWeek().toString(), t.isoWeekday().toString()];
}
function J1(e10) {
  var t, n, r;
  let i = (t = e10[0]) !== null && t !== void 0 ? t : "1900", a = (n = e10[1]) !== null && n !== void 0 ? n : "1", o = (r = e10[2]) !== null && r !== void 0 ? r : "1";
  return xe().year(parseInt(i)).isoWeek(parseInt(a)).isoWeekday(parseInt(o)).hour(0).minute(0).second(0).toDate();
}
var tb = {
  year: 1,
  month: 2,
  day: 3,
  hour: 4,
  minute: 5,
  second: 6
}, e0 = (e10, t) => {
  if (t.includes("week"))
    return eb(e10);
  {
    let n = t;
    return Q9(e10).slice(0, tb[n]);
  }
}, _s = (e10, t) => {
  if ((e10 == null ? void 0 : e10[0]) === si) {
    let n = new Date();
    return n.tillNow = !0, n;
  }
  return t.includes("week") ? J1(e10) : xs(e10);
}, t0 = (e10, t, n, r, i, a, o) => r.startsWith("week") ? J9(e10, t, n, r, i, a) : X9(e10, t, n, r, i, a, o);
function n0(e10) {
  let {
    locale: t
  } = $e();
  return (0, import_react2.useCallback)((n, r) => {
    if (e10)
      return e10(n, r);
    switch (n) {
      case "minute":
      case "second":
      case "hour":
        return ("0" + r.toString()).slice(-2);
      case "now":
        return t.DatePicker.tillNow;
      default:
        return r.toString();
    }
  }, [e10]);
}
var Uu = new Date().getFullYear(), nb = {
  min: new Date(new Date().setFullYear(Uu - 10)),
  max: new Date(new Date().setFullYear(Uu + 10)),
  precision: "day",
  defaultValue: null
}, r0 = (0, import_react2.forwardRef)((e10, t) => {
  let n = Z(nb, e10), {
    renderLabel: r
  } = n, [i, a] = te({
    value: n.value,
    defaultValue: n.defaultValue,
    onChange: (m) => {
      var g;
      m !== null && ((g = n.onConfirm) === null || g === void 0 || g.call(n, m));
    }
  }), o = (0, import_react2.useMemo)(() => new Date(), []), s = n0(r), c = (0, import_react2.useMemo)(() => {
    let m = i ?? o;
    return m.tillNow ? [si] : (m = new Date(_e(m.getTime(), n.min.getTime(), n.max.getTime())), e0(m, n.precision));
  }, [i, n.precision, n.min, n.max]), u = (0, import_react2.useCallback)((m) => {
    let g = _s(m, n.precision);
    a(g, !0);
  }, [a, n.precision]), d = on((m) => {
    var g;
    let p = _s(m, n.precision);
    (g = n.onSelect) === null || g === void 0 || g.call(n, p);
  }), f = (0, import_react2.useCallback)((m) => t0(m, n.min, n.max, n.precision, s, n.filter, n.tillNow), [n.min, n.max, n.precision, s, n.tillNow]);
  return j(n, import_react2.default.createElement(D1, {
    ref: t,
    columns: f,
    value: c,
    onCancel: n.onCancel,
    onClose: n.onClose,
    closeOnMaskClick: n.closeOnMaskClick,
    visible: n.visible,
    confirmText: n.confirmText,
    cancelText: n.cancelText,
    onConfirm: u,
    onSelect: d,
    getContainer: n.getContainer,
    loading: n.loading,
    loadingContent: n.loadingContent,
    afterShow: n.afterShow,
    afterClose: n.afterClose,
    onClick: n.onClick,
    title: n.title,
    stopPropagation: n.stopPropagation,
    mouseWheel: n.mouseWheel,
    destroyOnClose: n.destroyOnClose,
    forceRender: n.forceRender
  }, (m, g) => {
    var p;
    return (p = n.children) === null || p === void 0 ? void 0 : p.call(n, i, g);
  }));
});
function rb(e10) {
  return new Promise((t) => {
    let n = () => {
      let [i, a] = (0, import_react2.useState)(!1);
      return (0, import_react2.useEffect)(() => {
        a(!0);
      }, []), import_react2.default.createElement(r0, Object.assign({}, e10, {
        visible: i,
        onConfirm: (o) => {
          var s;
          (s = e10.onConfirm) === null || s === void 0 || s.call(e10, o), t(o);
        },
        onClose: () => {
          var o;
          (o = e10.onClose) === null || o === void 0 || o.call(e10), a(!1), t(null);
        },
        afterClose: () => {
          var o;
          (o = e10.afterClose) === null || o === void 0 || o.call(e10), r();
        }
      }));
    }, r = xi(import_react2.default.createElement(n, null));
  });
}
var Lk = ie(r0, {
  prompt: rb,
  DATE_NOW: si
}), qu = new Date().getFullYear(), ib = {
  min: new Date(new Date().setFullYear(qu - 10)),
  max: new Date(new Date().setFullYear(qu + 10)),
  precision: "day"
};
var ob = (e10) => {
  let {
    action: t
  } = e10;
  return j(e10.action, import_react2.default.createElement(nn, {
    key: t.key,
    onClick: e10.onAction,
    className: V("adm-dialog-button", {
      "adm-dialog-button-bold": t.bold
    }),
    fill: "none",
    shape: "rectangular",
    block: !0,
    color: t.danger ? "danger" : "primary",
    loading: "auto",
    disabled: t.disabled
  }, t.text));
}, sb = {
  actions: [],
  closeOnAction: !1,
  closeOnMaskClick: !1,
  getContainer: null
}, i0 = (e10) => {
  let t = Z(sb, e10), n = import_react2.default.createElement(import_react2.default.Fragment, null, !!t.image && import_react2.default.createElement("div", {
    className: gt("image-container")
  }, import_react2.default.createElement(io, {
    src: t.image,
    alt: "dialog header image",
    width: "100%"
  })), !!t.header && import_react2.default.createElement("div", {
    className: gt("header")
  }, import_react2.default.createElement(ai, null, t.header)), !!t.title && import_react2.default.createElement("div", {
    className: gt("title")
  }, t.title), import_react2.default.createElement("div", {
    className: V(gt("content"), !t.content && gt("content-empty"))
  }, typeof t.content == "string" ? import_react2.default.createElement(ai, null, t.content) : t.content), import_react2.default.createElement("div", {
    className: gt("footer")
  }, t.actions.map((r, i) => {
    let a = Array.isArray(r) ? r : [r];
    return import_react2.default.createElement("div", {
      className: gt("action-row"),
      key: i
    }, a.map((o, s) => import_react2.default.createElement(ob, {
      key: o.key,
      action: o,
      onAction: () => ye(void 0, void 0, void 0, function* () {
        var c, u, d;
        yield Promise.all([(c = o.onClick) === null || c === void 0 ? void 0 : c.call(o), (u = t.onAction) === null || u === void 0 ? void 0 : u.call(t, o, s)]), t.closeOnAction && ((d = t.onClose) === null || d === void 0 || d.call(t));
      })
    })));
  })));
  return import_react2.default.createElement(z1, {
    className: V(gt(), t.className),
    style: t.style,
    afterClose: t.afterClose,
    afterShow: t.afterShow,
    onMaskClick: t.closeOnMaskClick ? () => {
      var r;
      (r = t.onClose) === null || r === void 0 || r.call(t);
    } : void 0,
    visible: t.visible,
    getContainer: t.getContainer,
    bodyStyle: t.bodyStyle,
    bodyClassName: V(gt("body"), t.image && gt("with-image"), t.bodyClassName),
    maskStyle: t.maskStyle,
    maskClassName: t.maskClassName,
    stopPropagation: t.stopPropagation,
    disableBodyScroll: t.disableBodyScroll,
    destroyOnClose: t.destroyOnClose,
    forceRender: t.forceRender,
    role: "dialog",
    "aria-label": t["aria-label"]
  }, n);
};
function gt(e10 = "") {
  return "adm-dialog" + (e10 && "-") + e10;
}
var ks = /* @__PURE__ */ new Set();
function Vl(e10) {
  let t = wr(import_react2.default.createElement(i0, Object.assign({}, e10, {
    afterClose: () => {
      var n;
      ks.delete(t.close), (n = e10.afterClose) === null || n === void 0 || n.call(e10);
    }
  })));
  return ks.add(t.close), t;
}
function lb(e10) {
  let t = {
    confirmText: mi().locale.Dialog.ok
  }, n = Z(t, e10);
  return new Promise((r) => {
    Vl(Object.assign(Object.assign({}, n), {
      closeOnAction: !0,
      actions: [{
        key: "confirm",
        text: n.confirmText
      }],
      onAction: n.onConfirm,
      onClose: () => {
        var i;
        (i = n.onClose) === null || i === void 0 || i.call(n), r();
      }
    }));
  });
}
var cb = {
  confirmText: "\u786E\u8BA4",
  cancelText: "\u53D6\u6D88"
};
function ub(e10) {
  let {
    locale: t
  } = mi(), n = Z(cb, {
    confirmText: t.common.confirm,
    cancelText: t.common.cancel
  }, e10);
  return new Promise((r) => {
    Vl(Object.assign(Object.assign({}, n), {
      closeOnAction: !0,
      onClose: () => {
        var i;
        (i = n.onClose) === null || i === void 0 || i.call(n), r(!1);
      },
      actions: [[{
        key: "cancel",
        text: n.cancelText,
        onClick: () => ye(this, void 0, void 0, function* () {
          var i;
          yield (i = n.onCancel) === null || i === void 0 ? void 0 : i.call(n), r(!1);
        })
      }, {
        key: "confirm",
        text: n.confirmText,
        bold: !0,
        onClick: () => ye(this, void 0, void 0, function* () {
          var i;
          yield (i = n.onConfirm) === null || i === void 0 ? void 0 : i.call(n), r(!0);
        })
      }]]
    }));
  });
}
function fb() {
  ks.forEach((e10) => {
    e10();
  });
}
var Vk = ie(i0, {
  show: Vl,
  alert: lb,
  confirm: ub,
  clear: fb
});
var Mt = "adm-dropdown-item", hb = (e10) => {
  var t;
  let n = V(Mt, {
    [`${Mt}-active`]: e10.active,
    [`${Mt}-highlight`]: (t = e10.highlight) !== null && t !== void 0 ? t : e10.active
  });
  return j(e10, import_react2.default.createElement("div", {
    className: n,
    onClick: e10.onClick
  }, import_react2.default.createElement("div", {
    className: `${Mt}-title`
  }, import_react2.default.createElement("span", {
    className: `${Mt}-title-text`
  }, e10.title), import_react2.default.createElement("span", {
    className: V(`${Mt}-title-arrow`, {
      [`${Mt}-title-arrow-active`]: e10.active
    })
  }, e10.arrow === void 0 ? import_react2.default.createElement(J7, null) : e10.arrow))));
}, pb = hb, vb = (e10) => {
  let {
    active: t = !1
  } = e10, n = to(t, e10.forceRender, e10.destroyOnClose), r = V(`${Mt}-content`, {
    [`${Mt}-content-hidden`]: !t
  });
  return n ? import_react2.default.createElement("div", {
    className: r,
    onClick: e10.onClick
  }, e10.children) : null;
}, jn = "adm-dropdown", gb = {
  defaultActiveKey: null,
  closeOnMaskClick: !0,
  closeOnClickAway: !1
}, yb = (0, import_react2.forwardRef)((e10, t) => {
  let n = Z(gb, e10), [r, i] = te({
    value: n.activeKey,
    defaultValue: n.defaultActiveKey,
    onChange: n.onChange
  }), a = (0, import_react2.useRef)(null), o = (0, import_react2.useRef)(null);
  sd(() => {
    !n.closeOnClickAway || i(null);
  }, [a, o]);
  let [s, c] = (0, import_react2.useState)(), u = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    let p = u.current;
    if (!!p && r) {
      let h = p.getBoundingClientRect();
      c(h.bottom);
    }
  }, [r]);
  let d = (p) => {
    i(r === p ? null : p);
  }, f = !1, m = [], g = import_react2.default.Children.map(n.children, (p) => {
    if (import_react2.default.isValidElement(p)) {
      let h = Object.assign(Object.assign({}, p.props), {
        onClick: () => {
          d(p.key);
        },
        active: p.key === r,
        arrow: p.props.arrow === void 0 ? n.arrow : p.props.arrow
      });
      return m.push(p), p.props.forceRender && (f = !0), (0, import_react2.cloneElement)(p, h);
    } else
      return p;
  });
  return (0, import_react2.useImperativeHandle)(t, () => ({
    close: () => {
      i(null);
    }
  }), [i]), j(n, import_react2.default.createElement("div", {
    className: V(jn, {
      [`${jn}-open`]: !!r
    }),
    ref: u
  }, import_react2.default.createElement("div", {
    className: `${jn}-nav`,
    ref: a
  }, g), import_react2.default.createElement($i, {
    visible: !!r,
    position: "top",
    className: `${jn}-popup`,
    maskClassName: `${jn}-popup-mask`,
    bodyClassName: `${jn}-popup-body`,
    style: {
      top: s
    },
    forceRender: f,
    onMaskClick: n.closeOnMaskClick ? () => {
      d(null);
    } : void 0
  }, import_react2.default.createElement("div", {
    ref: o
  }, m.map((p) => {
    let h = p.key === r;
    return import_react2.default.createElement(vb, {
      key: p.key,
      active: h,
      forceRender: p.props.forceRender,
      destroyOnClose: p.props.destroyOnClose
    }, p.props.children);
  })))));
}), bb = yb, jk = ie(bb, {
  Item: pb
}), jl = { exports: {} }, a0 = 55296, wb = 56319, Eb = 56320, Cb = 127462, $b = 127487, xb = 127995, _b = 127999, kb = 65024, Ob = 65039, Sb = 8400, Fb = 8447, Pb = 8205, Nb = [
  776,
  2359,
  2359,
  2367,
  2367,
  2984,
  3007,
  3021,
  3633,
  3635,
  3648,
  3657,
  4352,
  4449,
  4520
];
function o0(e10) {
  if (typeof e10 != "string")
    throw new Error("string cannot be undefined or null");
  let t = [], n = 0, r = 0;
  for (; n < e10.length; ) {
    if (r += Ab(n + r, e10), Lb(e10[n + r]) && r++, Mb(e10[n + r]) && r++, Ib(e10[n + r]) && r++, Db(e10[n + r])) {
      r++;
      continue;
    }
    t.push(e10.substring(n, n + r)), n += r, r = 0;
  }
  return t;
}
function Ab(e10, t) {
  let n = t[e10];
  if (!Tb(n) || e10 === t.length - 1)
    return 1;
  let r = n + t[e10 + 1], i = t.substring(e10 + 2, e10 + 5);
  return Gu(r) && Gu(i) || Rb(i) ? 4 : 2;
}
function Tb(e10) {
  return e10 && Li(e10[0].charCodeAt(0), a0, wb);
}
function Gu(e10) {
  return Li(s0(e10), Cb, $b);
}
function Rb(e10) {
  return Li(s0(e10), xb, _b);
}
function Mb(e10) {
  return typeof e10 == "string" && Li(e10.charCodeAt(0), kb, Ob);
}
function Ib(e10) {
  return typeof e10 == "string" && Li(e10.charCodeAt(0), Sb, Fb);
}
function Lb(e10) {
  return typeof e10 == "string" && Nb.indexOf(e10.charCodeAt(0)) !== -1;
}
function Db(e10) {
  return typeof e10 == "string" && e10.charCodeAt(0) === Pb;
}
function s0(e10) {
  let t = e10.charCodeAt(0) - a0, n = e10.charCodeAt(1) - Eb;
  return (t << 10) + n + 65536;
}
function Li(e10, t, n) {
  return e10 >= t && e10 <= n;
}
function Vb(e10, t, n) {
  let r = o0(e10);
  if (t === void 0)
    return e10;
  if (t >= r.length)
    return "";
  let i = r.length - t, o = t + (n === void 0 ? i : n);
  return o > t + i && (o = void 0), r.slice(t, o).join("");
}
jl.exports = o0;
jl.exports.substr = Vb;
var un = "adm-error-block", zb = {
  status: "default"
};
function Ub(e10) {
  return (n) => {
    var r;
    let i = Z(zb, n), {
      locale: a
    } = $e(), o = a.ErrorBlock[i.status], s = "description" in i ? i.description : o.description, c = "title" in i ? i.title : o.title, u = (r = i.image) !== null && r !== void 0 ? r : e10[i.status], d = typeof u == "string" ? import_react2.default.createElement("img", {
      src: u,
      alt: "error block image"
    }) : u;
    return j(i, import_react2.default.createElement("div", {
      className: V(un, {
        [`${un}-full-page`]: i.fullPage
      })
    }, import_react2.default.createElement("div", {
      className: `${un}-image`
    }, d), import_react2.default.createElement("div", {
      className: `${un}-description`
    }, c && import_react2.default.createElement("div", {
      className: `${un}-description-title`
    }, c), s && import_react2.default.createElement("div", {
      className: `${un}-description-subtitle`
    }, s)), i.children && import_react2.default.createElement("div", {
      className: `${un}-content`
    }, i.children)));
  };
}
var qb = import_react2.default.createElement("svg", {
  viewBox: "0 0 200 200",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink"
}, import_react2.default.createElement("defs", null, import_react2.default.createElement("linearGradient", {
  x1: "50%",
  y1: "-116.862%",
  x2: "50%",
  y2: "90.764%",
  id: "error-block-image-default-a"
}, import_react2.default.createElement("stop", {
  stopColor: "#72A7FD",
  stopOpacity: 0.207,
  offset: "0%"
}), import_react2.default.createElement("stop", {
  stopColor: "#72A7FD",
  stopOpacity: 0.115,
  offset: "80.072%"
}), import_react2.default.createElement("stop", {
  stopColor: "#72A7FD",
  stopOpacity: 0,
  offset: "100%"
})), import_react2.default.createElement("circle", {
  id: "error-block-image-default-d",
  cx: 18.823,
  cy: 18.823,
  r: 18.823
}), import_react2.default.createElement("rect", {
  id: "error-block-image-default-b",
  x: 3.5,
  y: 9,
  width: 51.429,
  height: 88,
  rx: 4.571
})), import_react2.default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, import_react2.default.createElement("path", {
  d: "M73.557.004c19.435-.311 38.696 17.016 51.523 35.287 8.708-10.822 17.127-16.233 25.255-16.233 13.333 0 28.35 14.274 45.053 42.822 1.769 3.024-3.582 7.435-16.054 13.231l-41.322 1.37c-7.343 5.872-31.225.626-69.152 1.234-27.79.445-45.759-1.234-53.908-5.037C3.2 71.143-1.625 68.686.48 65.308 27.371 22.12 51.73.353 73.557.003Zm93.098 49.53a1.125 1.125 0 0 0-.401.072l-.058.023-.07.03-.028.014-.02.01c-.03.015-.059.032-.088.049a2.543 2.543 0 0 0-.568.477l-.067.074c-1.686 1.931-2.904 7.062-2.904 8.985 0 2.283 1.719 4.153 3.898 4.314l.026.001v3.805c0 .39.25.705.56.705.31 0 .56-.316.56-.705l.001-3.88c1.92-.402 3.363-2.148 3.363-4.24 0-2.39-1.882-9.734-4.204-9.734Zm-100-5a1.125 1.125 0 0 0-.331.05l-.035.01-.035.012-.058.023-.07.03-.028.014-.02.01c-.03.015-.059.032-.088.049a2.543 2.543 0 0 0-.568.477l-.067.074c-1.686 1.931-2.904 7.062-2.904 8.985 0 2.212 1.613 4.036 3.695 4.294l.203.02.026.001v3.805c0 .39.25.705.56.705.282 0 .515-.26.555-.6l.006-.105v-3.88c1.92-.402 3.363-2.148 3.363-4.24 0-2.39-1.882-9.734-4.204-9.734ZM52.64 38.348l-.15.008-.149.023-.032.007-.032.008-.078.022-.045.015-.045.016-.06.023-.038.017-.038.017-.058.028-.022.011a2.201 2.201 0 0 0-.323.204l-.05.038-.05.04-.025.02-.025.021a3.742 3.742 0 0 0-.31.294l-.036.04c-.035.037-.07.076-.105.116-.01.012-.02.025-.031.036a3.275 3.275 0 0 0-.081.098l-.063.078c-2.031 2.583-3.48 8.692-3.48 11.027 0 2.636 1.846 4.832 4.292 5.323l.224.04-.064-.012.105.018.103.014v4.618c0 .47.299.85.667.85.337 0 .615-.32.659-.735l.006-.115v-4.618c.18-.023.355-.054.527-.094l.256-.067.196-.06c2.136-.706 3.68-2.75 3.68-5.162 0-2.996-2.383-12.207-5.325-12.207Z",
  transform: "translate(2.286 22.286)",
  fill: "url(#error-block-image-default-a)"
}), import_react2.default.createElement("g", {
  transform: "rotate(-90 102.429 55.357)"
}, import_react2.default.createElement("path", {
  d: "M6.857 0H52a6.857 6.857 0 0 1 6.857 6.857v92A6.857 6.857 0 0 1 52 105.714H6.857A6.857 6.857 0 0 1 0 98.857v-92A6.857 6.857 0 0 1 6.857 0Z",
  fill: "#7EACFF"
}), import_react2.default.createElement("mask", {
  id: "error-block-image-default-c",
  fill: "#fff"
}, import_react2.default.createElement("use", {
  xlinkHref: "#error-block-image-default-b"
})), import_react2.default.createElement("use", {
  fill: "#377EFF",
  xlinkHref: "#error-block-image-default-b"
}), import_react2.default.createElement("path", {
  d: "M11.838 91.8a.64.64 0 0 1 .627.652.64.64 0 0 1-.627.652.64.64 0 0 1-.628-.652c0-.36.281-.651.628-.651Zm-2.858 0a.64.64 0 0 1 .628.652.64.64 0 0 1-.628.652.64.64 0 0 1-.627-.652c0-.36.281-.651.627-.651Zm2.16-2.305a.64.64 0 0 1 .628.652.64.64 0 0 1-.627.651.64.64 0 0 1-.627-.651c0-.36.28-.652.627-.652Zm-2.982-.04a.64.64 0 0 1 .627.651.64.64 0 0 1-.627.652.64.64 0 0 1-.627-.652c0-.36.28-.651.627-.651Zm5.268-.531a.64.64 0 0 1 .628.651.64.64 0 0 1-.628.652.64.64 0 0 1-.627-.652c0-.36.281-.651.627-.651Zm2.858-1.143a.64.64 0 0 1 .627.651.64.64 0 0 1-.627.652.64.64 0 0 1-.628-.652c0-.36.281-.651.628-.651Zm-6.37-.917c.209 0 .377.175.377.39a.384.384 0 0 1-.376.392.384.384 0 0 1-.376-.391c0-.216.168-.391.376-.391Zm3.512-.798.093.007a.644.644 0 0 1 .535.645.64.64 0 0 1-.628.652.64.64 0 0 1-.627-.652c0-.36.281-.652.627-.652Zm5.715 0a.64.64 0 0 1 .627.652.64.64 0 0 1-.627.652.64.64 0 0 1-.627-.652c0-.36.28-.652.627-.652Zm-11.429 0a.64.64 0 0 1 .627.652.64.64 0 0 1-.627.652.64.64 0 0 1-.627-.652c0-.36.28-.652.627-.652Zm-3.261.241c.208 0 .376.175.376.39a.384.384 0 0 1-.376.392.384.384 0 0 1-.377-.391c0-.216.169-.391.377-.391Zm11.833-.812a.64.64 0 0 1 .627.652.64.64 0 0 1-.627.651.64.64 0 0 1-.628-.651c0-.36.281-.652.628-.652Zm-4.851.399c.208 0 .376.175.376.39a.384.384 0 0 1-.376.392.384.384 0 0 1-.377-.391c0-.216.169-.391.377-.391Zm10.313-2.056a.64.64 0 0 1 .628.652.64.64 0 0 1-.628.651.64.64 0 0 1-.627-.651c0-.36.281-.652.627-.652Zm-2.354-.128a.64.64 0 0 1 .627.652.64.64 0 0 1-.627.652.64.64 0 0 1-.628-.652c0-.36.281-.652.628-.652Zm-13.798.311c.207 0 .376.175.376.391a.384.384 0 0 1-.376.391.384.384 0 0 1-.377-.39c0-.217.169-.392.377-.392Zm11.832-.812a.64.64 0 0 1 .628.652.64.64 0 0 1-.628.651.64.64 0 0 1-.627-.651c0-.36.281-.652.627-.652Zm-6.285 0a.64.64 0 0 1 .627.652.64.64 0 0 1-.627.651.64.64 0 0 1-.627-.651c0-.36.28-.652.627-.652Zm3.428 0a.64.64 0 0 1 .627.652.64.64 0 0 1-.627.651.64.64 0 0 1-.627-.651c0-.36.28-.652.627-.652Zm-6.118.24c.208 0 .376.176.376.392a.384.384 0 0 1-.376.39.384.384 0 0 1-.377-.39c0-.216.169-.391.377-.391Zm11.261-2.525a.64.64 0 0 1 .627.651.64.64 0 0 1-.627.652.64.64 0 0 1-.627-.652c0-.36.28-.651.627-.651Zm-3.557.484c.208 0 .376.175.376.391a.384.384 0 0 1-.376.391.384.384 0 0 1-.376-.391c0-.216.168-.391.376-.391Zm-2.478-.555a.64.64 0 0 1 .627.652.64.64 0 0 1-.627.652.64.64 0 0 1-.627-.652c0-.36.28-.652.627-.652Zm-3.512-.26c.208 0 .376.175.376.39a.384.384 0 0 1-.376.392.384.384 0 0 1-.376-.391c0-.216.168-.391.376-.391Zm-2.857 0c.208 0 .376.175.376.39a.384.384 0 0 1-.376.392.384.384 0 0 1-.376-.391c0-.216.168-.391.376-.391Zm-4.571 0c.207 0 .376.175.376.39a.384.384 0 0 1-.376.392.384.384 0 0 1-.377-.391c0-.216.169-.391.377-.391Zm14.898-1.835a.64.64 0 0 1 .628.652.64.64 0 0 1-.628.651.64.64 0 0 1-.627-.651c0-.36.281-.652.627-.652Zm-8.027-.245c.208 0 .377.175.377.39a.384.384 0 0 1-.377.392.384.384 0 0 1-.376-.391c0-.216.169-.391.376-.391Zm6.271-1.349c.208 0 .377.175.377.391a.384.384 0 0 1-.377.391.384.384 0 0 1-.376-.39c0-.217.169-.392.376-.392Zm-11.484-.481c.208 0 .376.175.376.39a.384.384 0 0 1-.376.392.384.384 0 0 1-.376-.391c0-.216.168-.391.376-.391Zm15.103-.972c.208 0 .376.175.376.391a.384.384 0 0 1-.376.391.384.384 0 0 1-.376-.39c0-.217.168-.392.376-.392Zm-9.333-1.404c.208 0 .376.175.376.39a.384.384 0 0 1-.376.392.384.384 0 0 1-.376-.391c0-.216.168-.391.376-.391Zm-6.819-.405c.208 0 .377.175.377.39a.384.384 0 0 1-.377.392.384.384 0 0 1-.376-.391c0-.216.168-.391.376-.391Z",
  fill: "#003CFF",
  fillRule: "nonzero",
  mask: "url(#error-block-image-default-c)",
  transform: "rotate(116 12.367 83.503)"
}), import_react2.default.createElement("path", {
  stroke: "#FFF",
  strokeWidth: 0.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M36.774 5.474H21.523"
}), import_react2.default.createElement("path", {
  d: "m67.818 94.025-4.996 3.913m4.996 11.91-4.996-3.912m-1.142 9.145-1.143-6.288m10.71-6.768h-7.262",
  stroke: "#4486FE",
  strokeWidth: 0.75,
  strokeLinecap: "round",
  strokeLinejoin: "round"
})), import_react2.default.createElement("circle", {
  cx: 8.571,
  cy: 8.571,
  r: 8.571,
  transform: "translate(22.857 142)",
  fill: "#FFCD6B",
  fillRule: "nonzero"
}), import_react2.default.createElement("g", {
  transform: "translate(132.857 124)"
}, import_react2.default.createElement("mask", {
  id: "error-block-image-default-e",
  fill: "#fff"
}, import_react2.default.createElement("use", {
  xlinkHref: "#error-block-image-default-d"
})), import_react2.default.createElement("use", {
  fill: "#FBBE47",
  fillRule: "nonzero",
  xlinkHref: "#error-block-image-default-d"
}), import_react2.default.createElement("circle", {
  fill: "#FFCD6B",
  fillRule: "nonzero",
  mask: "url(#error-block-image-default-e)",
  cx: 13.886,
  cy: 15.12,
  r: 18.823
}), import_react2.default.createElement("circle", {
  fill: "#FFB400",
  fillRule: "nonzero",
  mask: "url(#error-block-image-default-e)",
  cx: 23.4,
  cy: 29.057,
  r: 1
}), import_react2.default.createElement("circle", {
  fill: "#FFB400",
  fillRule: "nonzero",
  mask: "url(#error-block-image-default-e)",
  cx: 30.343,
  cy: 29.829,
  r: 1
}), import_react2.default.createElement("circle", {
  fill: "#FFB400",
  fillRule: "nonzero",
  mask: "url(#error-block-image-default-e)",
  cx: 18.771,
  cy: 32.657,
  r: 1.286
}), import_react2.default.createElement("circle", {
  fill: "#FFB400",
  fillRule: "nonzero",
  mask: "url(#error-block-image-default-e)",
  cx: 29.571,
  cy: 25.971,
  r: 1.286
}), import_react2.default.createElement("circle", {
  fill: "#FFB400",
  fillRule: "nonzero",
  mask: "url(#error-block-image-default-e)",
  cx: 19.286,
  cy: 7.971,
  r: 1.286
}), import_react2.default.createElement("circle", {
  fill: "#FFB400",
  fillRule: "nonzero",
  mask: "url(#error-block-image-default-e)",
  cx: 26.486,
  cy: 5.914,
  r: 1.286
}), import_react2.default.createElement("circle", {
  fill: "#FFB400",
  fillRule: "nonzero",
  mask: "url(#error-block-image-default-e)",
  cx: 11.057,
  cy: 6.943,
  r: 1
}), import_react2.default.createElement("circle", {
  fill: "#FFB400",
  fillRule: "nonzero",
  mask: "url(#error-block-image-default-e)",
  cx: 30.086,
  cy: 15.686,
  r: 1.286
}), import_react2.default.createElement("circle", {
  fill: "#FFB400",
  fillRule: "nonzero",
  mask: "url(#error-block-image-default-e)",
  cx: 22.886,
  cy: 14.657,
  r: 1
})), import_react2.default.createElement("path", {
  d: "m87.429 135.123 6.591-9.378v-.08h-5.99v-2.559h10.038v1.787l-6.44 9.254v.082h6.56v2.557h-10.76v-1.663Zm12.185-5.889 4.948-7.047v-.056h-4.498v-1.917h7.536v1.34l-4.849 6.942v.059h4.923v1.92h-8.06v-1.24Zm10.345.702 3.708-5.274v-.045h-3.372v-1.437h5.648v1.003l-3.628 5.206v.045H116v1.438h-6.041v-.936Z",
  fill: "#FFF",
  fillRule: "nonzero"
}))), Kb = import_react2.default.createElement("svg", {
  viewBox: "0 0 400 400",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink"
}, import_react2.default.createElement("title", null, "@\u53CD\u9988/\u5F02\u5E38/\u7F51\u7EDC\u670D\u52A1\u5F02\u5E38"), import_react2.default.createElement("defs", null, import_react2.default.createElement("linearGradient", {
  x1: "50%",
  y1: "-116.862%",
  x2: "50%",
  y2: "90.764%",
  id: "error-block-image-disconnected-c"
}, import_react2.default.createElement("stop", {
  stopColor: "#72A7FD",
  stopOpacity: 0.207,
  offset: "0%"
}), import_react2.default.createElement("stop", {
  stopColor: "#72A7FD",
  stopOpacity: 0.115,
  offset: "80.072%"
}), import_react2.default.createElement("stop", {
  stopColor: "#72A7FD",
  stopOpacity: 0,
  offset: "100%"
})), import_react2.default.createElement("circle", {
  id: "error-block-image-disconnected-d",
  cx: 22.309,
  cy: 22.309,
  r: 22.309
}), import_react2.default.createElement("path", {
  id: "error-block-image-disconnected-a",
  d: "M0 0h400v400H0z"
})), import_react2.default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, import_react2.default.createElement("mask", {
  id: "error-block-image-disconnected-b",
  fill: "#fff"
}, import_react2.default.createElement("use", {
  xlinkHref: "#error-block-image-disconnected-a"
})), import_react2.default.createElement("g", {
  mask: "url(#error-block-image-disconnected-b)",
  fill: "url(#error-block-image-disconnected-c)"
}, import_react2.default.createElement("path", {
  d: "M151.686 45.58c38.869-.623 77.391 34.03 103.046 70.573 17.416-21.644 34.253-32.465 50.51-32.465 26.666 0 56.701 28.548 90.105 85.643 3.539 6.05-7.164 14.87-32.107 26.462l-82.643 2.741c-14.686 11.745-62.45 1.252-138.305 2.467-55.58.89-91.518-2.468-107.816-10.074-23.505-3.07-33.154-7.983-28.946-14.74C59.313 89.813 108.03 46.278 151.686 45.58Zm186.195 99.06-.127.003-.126.01a2.32 2.32 0 0 0-.465.103l-.032.01-.031.01a2.364 2.364 0 0 0-.181.071 2.52 2.52 0 0 0-.116.054l-.133.067-.042.024-.036.02a2.946 2.946 0 0 0-.133.08l-.048.03a3.052 3.052 0 0 0-.126.087l-.047.033a3.274 3.274 0 0 0-.128.097c-.01.008-.02.017-.031.024a4.906 4.906 0 0 0-.31.27l-.036.032a6.654 6.654 0 0 0-.46.484l-.045.05c-3.344 3.91-5.755 14.083-5.755 17.908 0 4.547 3.409 8.275 7.74 8.625l.108.008v7.608c0 .779.502 1.41 1.121 1.41.62 0 1.121-.632 1.121-1.41v-7.762c3.838-.802 6.727-4.293 6.727-8.48 0-4.778-3.765-19.467-8.409-19.467Zm-200-10-.127.003-.126.01a2.32 2.32 0 0 0-.368.073l-.049.014-.048.016-.032.01-.031.01a2.364 2.364 0 0 0-.181.071l-.058.026-.058.028-.133.067-.042.024-.036.02-.066.039-.067.041-.048.03a3.052 3.052 0 0 0-.126.087l-.047.033a3.274 3.274 0 0 0-.128.097c-.01.008-.02.017-.031.024l-.156.13-.154.14-.036.032a6.654 6.654 0 0 0-.46.484l-.045.05c-3.344 3.91-5.755 14.083-5.755 17.908 0 4.547 3.409 8.275 7.74 8.625l.054.004.054.004v7.608c0 .779.502 1.41 1.121 1.41.58 0 1.058-.556 1.115-1.266l.006-.144v-7.762c3.838-.802 6.727-4.293 6.727-8.48 0-4.778-3.765-19.467-8.409-19.467Zm-28.029-12.373-.107.002-.106.006a2.978 2.978 0 0 0-.551.095 3.444 3.444 0 0 0-.323.104 3.962 3.962 0 0 0-.61.297c-.076.045-.15.092-.226.141-4.964 3.312-8.728 18.445-8.728 23.77 0 5.434 3.922 9.935 9.04 10.726l.28.04v9.236c0 .886.532 1.614 1.21 1.692l.121.007.122-.007c.638-.074 1.147-.723 1.204-1.538l.006-.155v-9.235c5.254-.668 9.32-5.234 9.32-10.767 0-5.993-4.77-24.414-10.652-24.414Z"
})), import_react2.default.createElement("g", {
  mask: "url(#error-block-image-disconnected-b)"
}, import_react2.default.createElement("g", {
  transform: "translate(85.858 150.644)"
}, import_react2.default.createElement("path", {
  d: "M116.26 28.467c1.352 0 2.703.018 4.054.054 3.923.385 10.188 4.248 9.267 11.061-.878 6.496-5.836 9.089-8.962 9.529a130.762 130.762 0 0 0-4.36-.072c-28.567 0-60.654 10.149-96.22 30.676l-2.227 1.297c-.744.437-1.49.878-2.236 1.323-4.878 2.911-11.193 1.316-14.103-3.562C-1.438 73.894.157 67.58 5.035 64.67 45.34 40.62 82.4 28.467 116.26 28.467Zm22 11.63c1.03-5.942 6.376-8.618 11.084-8.08C172.14 36.91 194.83 46.86 217.37 61.794c4.735 3.138 6.03 9.52 2.893 14.255-3.138 4.736-9.52 6.031-14.256 2.893-20.111-13.325-40.075-22.165-59.935-26.584a9.974 9.974 0 0 0-.325-.088c-3.987-1.015-8.602-5.738-7.487-12.175ZM116.26 77.418c22.777 0 45.4 7.057 67.73 20.988 4.82 3.007 6.289 9.351 3.282 14.17-3.007 4.82-9.351 6.29-14.17 3.283-19.194-11.974-38.095-17.87-56.842-17.87s-37.648 5.896-56.842 17.87c-4.82 3.007-11.164 1.537-14.17-3.282-3.007-4.82-1.538-11.164 3.282-14.171 22.33-13.931 44.953-20.988 67.73-20.988ZM117.974 124.67c9.85 0 17.303 1.69 25.687 5.082l.82.337 2.9 1.231 3.008 1.252.77.305.107.04c5.326 1.976 8.042 7.895 6.066 13.221-1.976 5.326-7.895 8.042-13.221 6.067l-.713-.27-.726-.285-.763-.31-1.263-.527-2.944-1.26-1.125-.473c-6.393-2.648-11.433-3.838-18.603-3.838-8.223 0-16.532 2.126-25.028 6.475-5.056 2.588-11.254.587-13.842-4.47-2.589-5.056-.588-11.253 4.47-13.842 11.313-5.791 22.814-8.735 34.4-8.735ZM118.235 197.047c7.15 0 13.77-.897 19.841-2.721 5.44-1.635 8.526-7.37 6.892-12.81-1.635-5.44-7.37-8.526-12.81-6.892-4.072 1.224-8.707 1.851-13.923 1.851-4.36 0-8.79-1.045-13.373-3.21l-.626-.301c-5.095-2.512-11.262-.418-13.773 4.678-2.512 5.095-.418 11.261 4.678 13.773 7.559 3.727 15.288 5.632 23.094 5.632Z",
  fill: "#377EFF",
  fillRule: "nonzero"
}), import_react2.default.createElement("path", {
  d: "M198.35 62.413c2.755-4.967 9.016-6.76 13.984-4.004 13.068 7.25 19.124 18.535 17.615 30.952-1.157 9.515-6.83 18.757-14.096 24.352-13.364 10.29-34.915 9.401-49.363-1.91-4.472-3.502-5.26-9.967-1.758-14.44 3.436-4.388 9.724-5.229 14.185-1.952l.255.194c7.283 5.702 18.475 6.164 24.13 1.809 3.072-2.366 5.766-6.754 6.226-10.536.467-3.844-1.21-7.07-6.796-10.267l-.378-.213c-4.967-2.756-6.76-9.017-4.004-13.985ZM61.35 103.092c-2.84-4.92-9.13-6.607-14.05-3.768-20.662 11.922-21.772 35.751-6.018 51.69 13.752 13.914 33.192 13.447 50.507 1.158 4.633-3.288 5.723-9.708 2.436-14.34-3.288-4.633-9.709-5.724-14.341-2.436-9.763 6.928-18.07 7.128-23.97 1.158-6.761-6.84-6.498-14.501 1.35-19.225l.317-.187c4.92-2.84 6.608-9.13 3.769-14.05ZM129.103 135.702c1.688-5.424 7.454-8.453 12.878-6.764 14.776 4.599 23.437 13.727 25.259 25.58 1.316 8.561-1.228 17.533-5.58 24.052-3.132 4.688-7.388 8.287-12.504 11.112-3.03 1.673-5.75 2.811-9.37 4.066l-1.4.477c-5.387 1.806-11.217-1.097-13.022-6.484-1.805-5.386 1.098-11.216 6.484-13.02l1.09-.374c6.032-2.112 9.602-4.19 11.613-7.201 1.693-2.535 2.818-6.502 2.356-9.503-.564-3.673-3.432-6.696-11.04-9.063-5.424-1.689-8.452-7.454-6.764-12.878Z",
  fill: "#377EFF",
  fillRule: "nonzero"
}), import_react2.default.createElement("path", {
  d: "M148.072 181.58c3.718-7.98 4.172-14.9 1.36-20.76-2.81-5.86-6.236-9.096-10.275-9.707",
  stroke: "#FFF",
  strokeWidth: 0.571,
  strokeLinecap: "round"
}), import_react2.default.createElement("ellipse", {
  fill: "#7EACFF",
  transform: "rotate(10 147 41.933)",
  cx: 147,
  cy: 41.933,
  rx: 9.143,
  ry: 10.286
}), import_react2.default.createElement("path", {
  d: "M210.422 107.472c3.718-7.98 4.172-14.9 1.36-20.76-2.81-5.86-6.668-9.883-11.572-12.067M51.604 131.769c-3.15-6.8-3.537-12.694-1.161-17.685 2.376-4.99 5.57-8.136 9.583-9.438",
  stroke: "#003CFF",
  strokeWidth: 0.75,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), import_react2.default.createElement("path", {
  d: "M21.53 64.408c4.946-3.389 9.817-6.026 14.612-7.912",
  stroke: "#FFF",
  strokeWidth: 0.75,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), import_react2.default.createElement("path", {
  d: "m113.243 15.444 9.588 8.314M144.31 9.405l-5.775 11.3m18.389-1.246-11.907 4.643M127.64 5.66l2.77 14.255",
  stroke: "#4486FE",
  strokeWidth: 0.75,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}))), import_react2.default.createElement("g", {
  mask: "url(#error-block-image-disconnected-b)"
}, import_react2.default.createElement("g", {
  transform: "translate(275.143 302.571)"
}, import_react2.default.createElement("mask", {
  id: "error-block-image-disconnected-e",
  fill: "#fff"
}, import_react2.default.createElement("use", {
  xlinkHref: "#error-block-image-disconnected-d"
})), import_react2.default.createElement("use", {
  fill: "#FBBE47",
  fillRule: "nonzero",
  xlinkHref: "#error-block-image-disconnected-d"
}), import_react2.default.createElement("circle", {
  fill: "#FFCD6B",
  fillRule: "nonzero",
  mask: "url(#error-block-image-disconnected-e)",
  cx: 16.457,
  cy: 17.92,
  r: 22.309
}), import_react2.default.createElement("circle", {
  fill: "#FFF",
  fillRule: "nonzero",
  mask: "url(#error-block-image-disconnected-e)",
  cx: 14.263,
  cy: 12.069,
  r: 2.194
}))), import_react2.default.createElement("g", {
  mask: "url(#error-block-image-disconnected-b)",
  fill: "#FBBE47",
  fillRule: "nonzero"
}, import_react2.default.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 12,
  transform: "translate(84 297.714)"
})))), Gb = import_react2.default.createElement("svg", {
  viewBox: "0 0 400 400",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink"
}, import_react2.default.createElement("defs", null, import_react2.default.createElement("linearGradient", {
  x1: "50%",
  y1: "-116.862%",
  x2: "50%",
  y2: "90.764%",
  id: "error-block-image-empty-a"
}, import_react2.default.createElement("stop", {
  stopColor: "#72A7FD",
  stopOpacity: 0.207,
  offset: "0%"
}), import_react2.default.createElement("stop", {
  stopColor: "#72A7FD",
  stopOpacity: 0.115,
  offset: "80.072%"
}), import_react2.default.createElement("stop", {
  stopColor: "#72A7FD",
  stopOpacity: 0,
  offset: "100%"
})), import_react2.default.createElement("path", {
  d: "M146.183 18.461c31.705 23.336 33.349 71.85 4.93 96.614-.252.22 6.172 5.602 13.577 11.414l.686.537.69.54.695.54.348.27.698.54a341.27 341.27 0 0 0 8.806 6.596c1.114.802 4.643-.853 10.587-4.965l-.532 12.218a1.2 1.2 0 0 1-.481.91l-10.868 8.111c-1.405 1.048-3.32 1.185-4.854.072l-35.578-25.834c-33.414 17.333-79.913 15-109.804-7-33.444-24.616-33.444-75.95 0-100.563 33.443-24.615 87.657-24.615 121.1 0Zm-60.469 7.653C51.63 26.114 24 44.534 24 67.257S51.63 108.4 85.714 108.4s61.715-18.42 61.715-41.143c0-22.722-27.63-41.143-61.715-41.143Z",
  id: "error-block-image-empty-b"
})), import_react2.default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, import_react2.default.createElement("path", {
  d: "M157.964 244.661H0L3.806 100.13a4.572 4.572 0 0 1 4.353-4.446l.217-.006h45.588V68.2a4.572 4.572 0 0 1 4.356-4.567l.216-.005h65.498l2.554-58.689a4.571 4.571 0 0 1 4.779-4.367l.214.015 87.79 8.222a4.572 4.572 0 0 1 4.126 4.133l.015.212 3.146 69.652L301.634 64.9a4.571 4.571 0 0 1 5.628 4.231l.005.215v43.955l56.162.001v130.264h-56.163v.001h-82.383v-.004h-66.919v1.098ZM89.503 160.03h-9.968v8.436h9.968v-8.436Zm0-14.507h-9.968v8.435h9.968v-8.435Zm197.985-5.15h-9.967v8.432h9.967v-8.431Zm-197.985-8.806h-9.968v8.436h9.968v-8.436Zm197.985-5.153h-9.967v8.432h9.967v-8.432Zm0-14.503h-9.967v8.432h9.967v-8.432Zm-84.643-.777h-30.8v8.436h30.8v-8.436Zm84.643-13.186h-9.967v8.436h9.967v-8.436Zm-84.643-3.29h-30.8v8.436h30.8v-8.436Zm0-15.912h-30.8v8.436h30.8v-8.436Z",
  transform: "translate(18.286 50.286)",
  fill: "url(#error-block-image-empty-a)"
}), import_react2.default.createElement("g", {
  transform: "translate(108.571 189.886)"
}, import_react2.default.createElement("mask", {
  id: "error-block-image-empty-c",
  fill: "#fff"
}, import_react2.default.createElement("use", {
  xlinkHref: "#error-block-image-empty-b"
})), import_react2.default.createElement("use", {
  fill: "#377EFF",
  xlinkHref: "#error-block-image-empty-b"
}), import_react2.default.createElement("path", {
  d: "M131.429 134.686a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm5.714 0a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285ZM128 133.543a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-5.714 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm21.143-1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm-9.143-1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm12-1.143a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-6.857 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286ZM120 128.971a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm5.714 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm16-1.142.125.006a1.143 1.143 0 1 1-.125-.006Zm11.429 0a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm-22.857 0a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm17.143-1.143a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285ZM136 125.543a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-13.143 1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm4.572-1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm18.857-2.286a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-16-1.143.124.007a1.143 1.143 0 1 1-.124-.007Zm11.428 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-22.857 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm36.572 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-5.715 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-37.143 1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm13.715-1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm9.714-1.143a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm18.286-3.428a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-11.429 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-28 1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm5.714-1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm17.715-1.143a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-5.715 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-6.857 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm17.143-4.571a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm-11.428 0a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm-5.143 1.142a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm-8-1.142a.571.571 0 1 1 0 1.142.571.571 0 0 1 0-1.142Zm-9.143 0a.571.571 0 1 1 0 1.142.571.571 0 0 1 0-1.142Zm30.286-3.429a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286ZM124 109.543a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm5.714 0a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm5.715-4.572a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm-22.858-1.142a.571.571 0 1 1 0 1.142.571.571 0 0 1 0-1.142Zm-11.428-3.429a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143ZM124 99.257a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143ZM49.143 55.829a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm5.714 0a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm-9.143-1.143a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm-5.714 0a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm21.143-1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143ZM52 52.4a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm12-1.143a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-6.857 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-19.429-1.143a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm5.715 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm16-1.143.124.007a1.143 1.143 0 1 1-.124-.007Zm11.428 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-22.857 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm17.143-1.142a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm-11.429-1.143a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm-13.143 1.143a.571.571 0 1 1 0 1.142.571.571 0 0 1 0-1.142Zm4.572-1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143ZM64 44.4a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-16-1.143.125.007a1.143 1.143 0 1 1-.125-.007Zm11.429 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-22.858 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm36.572 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-5.714 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286ZM30.286 44.4a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143ZM44 43.257a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm9.714-1.143a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286ZM72 38.686a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm-11.429 0a1.143 1.143 0 1 1 0 2.285 1.143 1.143 0 0 1 0-2.285Zm-28 1.143a.571.571 0 1 1 0 1.142.571.571 0 0 1 0-1.142Zm5.715-1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143ZM56 37.543a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-5.714 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-6.857 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286ZM60.57 32.97a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-11.428 0a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286ZM44 34.114a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm-8-1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm-9.143 0a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm30.286-3.428a1.143 1.143 0 1 1 0 2.286 1.143 1.143 0 0 1 0-2.286Zm-15.429 1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm5.715 0a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm5.714-4.572a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm-22.857-1.143a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Zm-11.429-3.428a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143ZM41.714 20.4a.571.571 0 1 1 0 1.143.571.571 0 0 1 0-1.143Z",
  fill: "#003CFF",
  fillRule: "nonzero",
  mask: "url(#error-block-image-empty-c)"
})), import_react2.default.createElement("path", {
  d: "M295.213 319.24c.744.546.745 1.433.002 1.98l-11.806 8.81c-1.069.799-3.326.474-4.853-.609l-35.622-25.241c-33.375 17.037-79.545 14.615-109.28-7.271-33.443-24.615-33.443-64.521 0-89.133 33.443-24.616 87.657-24.616 121.1 0 31.706 23.336 33.35 60.42 4.931 85.185-.543.473 35.528 26.278 35.528 26.278ZM148.06 220.015c-25.44 17.853-25.44 46.8 0 64.652 25.44 17.85 66.689 17.85 92.129 0 25.436-17.853 25.436-46.799 0-64.652-25.44-17.853-66.688-17.853-92.129 0Z",
  fill: "#5D96FE"
}), import_react2.default.createElement("path", {
  d: "M123.514 233.021c2.185-5.241 5.67-9.735 10.453-13.482M264.967 271.54c-2.185 5.24-5.67 9.734-10.453 13.481",
  stroke: "#FFF",
  strokeWidth: 0.75,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), import_react2.default.createElement("path", {
  d: "M81.143 252.571c7.574 0 13.714 23.88 13.714 31.649 0 6.97-4.942 12.755-11.429 13.871v11.672c0 1.235-.767 2.237-1.713 2.237-.904 0-1.644-.912-1.71-2.07l-.005-.167v-11.526c-7.04-.595-12.571-6.644-12.571-14.017 0-7.024 5.02-27.222 11.581-31.027l.096-.053c.027-.016.055-.03.082-.045l.067-.035.066-.033.1-.05.094-.041a3.34 3.34 0 0 1 .224-.093l.11-.042.097-.032c.038-.013.077-.025.115-.036l.053-.016.053-.014a3.351 3.351 0 0 1 .23-.055l.085-.016a3.95 3.95 0 0 1 .441-.054l.11-.005.11-.002Z",
  fill: "#FFCD6B",
  fillRule: "nonzero"
}), import_react2.default.createElement("g", {
  transform: "translate(283.429 177.143)",
  fillRule: "nonzero"
}, import_react2.default.createElement("path", {
  d: "M22.475.847c12.34 0 22.345 37.935 22.345 50.276 0 11.395-8.53 20.798-19.552 22.172v19.019c0 1.932-1.25 3.5-2.792 3.5-1.49 0-2.707-1.46-2.79-3.301l-.004-.2-.001-19.018C8.659 71.92.13 62.518.13 51.123.13 40.071 8.154 8.49 18.694 2.015l.054-.031a5.94 5.94 0 0 1 .214-.128l.088-.048c.213-.12.427-.228.642-.326l.135-.06.18-.075.135-.053a5.796 5.796 0 0 1 .464-.16 4.44 4.44 0 0 1 .33-.092l.124-.03a7.122 7.122 0 0 1 .31-.065l.018-.003a6.305 6.305 0 0 1 .756-.088l.165-.007.166-.002Z",
  fill: "#FFCD6B"
}), import_react2.default.createElement("path", {
  d: "M22.475.847c12.34 0 22.345 37.935 22.345 50.276 0 11.395-8.53 20.798-19.552 22.172v19.019c0 1.932-1.25 3.5-2.792 3.5-1.543 0-2.794-1.566-2.794-3.5V73.295C8.659 71.921.13 62.518.13 51.123.13 38.783 10.134.847 22.475.847Z",
  fill: "#FFCD6B"
}), import_react2.default.createElement("circle", {
  fill: "#FFB400",
  cx: 26.4,
  cy: 56.869,
  r: 1.45
}), import_react2.default.createElement("circle", {
  fill: "#FFB400",
  cx: 39.453,
  cy: 58.319,
  r: 1
}), import_react2.default.createElement("circle", {
  fill: "#FFB400",
  cx: 17.698,
  cy: 63.637,
  r: 2.417
}), import_react2.default.createElement("circle", {
  fill: "#FFB400",
  cx: 38.002,
  cy: 51.068,
  r: 2.417
}), import_react2.default.createElement("circle", {
  fill: "#FFB400",
  cx: 18.665,
  cy: 17.228,
  r: 2.417
}), import_react2.default.createElement("circle", {
  fill: "#FFB400",
  cx: 32.201,
  cy: 13.36,
  r: 2.417
}), import_react2.default.createElement("circle", {
  fill: "#FFB400",
  cx: 26.83,
  cy: 20.666,
  r: 1.45
}), import_react2.default.createElement("circle", {
  fill: "#FFB400",
  cx: 38.969,
  cy: 31.731,
  r: 2.417
}), import_react2.default.createElement("circle", {
  fill: "#FFB400",
  cx: 25.433,
  cy: 29.797,
  r: 1.45
}), import_react2.default.createElement("path", {
  d: "M34.197 53.033c0 9.825-6.934 18.017-16.172 19.987a22.44 22.44 0 0 0 4.45.448c12.34 0 22.344-10.004 22.344-22.345C44.82 38.783 34.815.847 22.475.847c8.947 14.03 11.722 40.891 11.722 52.186Z",
  fill: "#FBBE47"
})))), Yb = import_react2.default.createElement("svg", {
  viewBox: "0 0 400 400",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink"
}, import_react2.default.createElement("defs", null, import_react2.default.createElement("linearGradient", {
  x1: "50%",
  y1: "-116.862%",
  x2: "50%",
  y2: "90.764%",
  id: "error-block-image-busy-a"
}, import_react2.default.createElement("stop", {
  stopColor: "#72A7FD",
  stopOpacity: 0.207,
  offset: "0%"
}), import_react2.default.createElement("stop", {
  stopColor: "#72A7FD",
  stopOpacity: 0.115,
  offset: "80.072%"
}), import_react2.default.createElement("stop", {
  stopColor: "#72A7FD",
  stopOpacity: 0,
  offset: "100%"
})), import_react2.default.createElement("circle", {
  id: "error-block-image-busy-b",
  cx: 34.857,
  cy: 34.857,
  r: 34.857
})), import_react2.default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, import_react2.default.createElement("path", {
  d: "M157.964 243.667H0L3.806 99.134a4.572 4.572 0 0 1 4.353-4.446l.217-.005h45.588V67.205a4.572 4.572 0 0 1 4.356-4.566l.216-.005 65.498-.001 2.554-58.688a4.571 4.571 0 0 1 4.779-4.368l.214.015 87.79 8.222a4.572 4.572 0 0 1 4.126 4.133l.015.213 3.146 69.652 74.976-17.906a4.571 4.571 0 0 1 5.628 4.23l.005.216v43.955h56.162v130.265l-56.163-.001v.002h-82.383v-.004h-66.919v1.098Zm-68.461-84.631h-9.968v8.435h9.968v-8.435Zm0-14.508h-9.968v8.436h9.968v-8.436Zm197.985-5.149h-9.967v8.432h9.967v-8.432Zm-197.985-8.806h-9.968v8.436h9.968v-8.436Zm197.985-5.153h-9.967v8.432h9.967v-8.432Zm0-14.503h-9.967v8.432h9.967v-8.432Zm-84.643-.777h-30.8v8.436h30.8v-8.436Zm84.643-13.186h-9.967v8.435h9.967v-8.435Zm-84.643-3.29h-30.8v8.435h30.8v-8.435Zm0-15.912h-30.8v8.436h30.8v-8.436Z",
  transform: "translate(18.286 51.286)",
  fill: "url(#error-block-image-busy-a)"
}), import_react2.default.createElement("path", {
  d: "m250.934 176.555-101.963 1.038c-5.276.054-9.51 4.374-9.455 9.65.054 5.274 4.374 9.507 9.649 9.454l.958-.01c-.376 7.363 3.679 59.93 34.894 62.659 4.203.367 7.432.39 7.475 4.609.042 4.218-3.176 4.307-7.37 4.76-34.593 3.737-34.136 56.004-33.61 63.357l-.957.01c-5.276.053-9.51 4.373-9.455 9.649.053 5.275 4.374 9.508 9.649 9.454l101.963-1.039c5.275-.054 9.508-4.374 9.455-9.648-.055-5.276-4.374-9.51-9.65-9.455l-.958.01c.377-7.363-.729-59.672-34.894-62.66-4.202-.367-7.432-.39-7.474-4.608-.043-4.219 3.175-4.308 7.369-4.76 31.276-3.377 34.136-56.004 33.61-63.357l.958-.01c5.276-.053 9.508-4.373 9.455-9.649-.055-5.276-4.374-9.509-9.65-9.454Z",
  fill: "#377EFF"
}), import_react2.default.createElement("path", {
  d: "M233.524 314.422c.108.684.772 1.148 1.483 1.035.711-.112 1.2-.758 1.091-1.443-.108-.684-.772-1.147-1.483-1.035-.711.113-1.2.759-1.091 1.443Zm-.894-5.644c.108.684.772 1.148 1.483 1.035.711-.112 1.2-.758 1.091-1.443-.108-.684-.772-1.147-1.483-1.035-.711.113-1.2.759-1.091 1.443Zm-.149 17.865c.108.684.773 1.147 1.483 1.035.711-.113 1.2-.759 1.091-1.443-.108-.684-.772-1.148-1.483-1.035-.71.112-1.2.758-1.09 1.443Zm-2.144-8.182c.109.684.773 1.148 1.484 1.035.71-.113 1.199-.759 1.09-1.443-.108-.684-.772-1.148-1.483-1.035-.71.113-1.2.759-1.09 1.443Zm-1.586-4.694c.108.684.772 1.148 1.483 1.035.711-.113 1.2-.759 1.091-1.443-.108-.684-.772-1.147-1.483-1.035-.711.113-1.2.759-1.091 1.443Zm-1.013-5.88c.109.685.773 1.148 1.484 1.036.71-.113 1.2-.759 1.09-1.443-.107-.684-.772-1.148-1.483-1.035-.71.113-1.199.759-1.09 1.443Zm.236 15.575c.108.685.772 1.148 1.483 1.035.71-.112 1.2-.758 1.09-1.442-.107-.685-.772-1.148-1.483-1.035-.71.112-1.199.758-1.09 1.442Zm-.4 4.494c.108.684.772 1.147 1.483 1.035.71-.113 1.2-.759 1.091-1.443-.108-.684-.773-1.148-1.483-1.035-.711.113-1.2.759-1.091 1.443Zm-3.88-8.601c.108.684.772 1.147 1.483 1.035.71-.113 1.199-.759 1.09-1.443-.108-.684-.772-1.148-1.483-1.035-.71.113-1.2.759-1.09 1.443Zm-.524-7.186c.065.41.463.688.89.62.426-.067.72-.454.654-.865-.065-.41-.463-.688-.89-.62-.426.067-.72.454-.654.865Zm-2.265-4.102c.109.684.773 1.148 1.484 1.035.71-.113 1.2-.759 1.09-1.443-.108-.684-.772-1.147-1.483-1.035-.71.113-1.199.759-1.09 1.443Zm-.545-6.518c.065.41.464.689.89.621.427-.067.72-.455.655-.865-.065-.41-.464-.689-.89-.621-.427.067-.72.455-.655.865Zm2.098 23.629c.109.684.773 1.147 1.484 1.035.71-.113 1.2-.759 1.09-1.443-.108-.684-.772-1.148-1.483-1.035-.71.112-1.199.758-1.09 1.443Zm-.756-9.65c.043.274.309.46.593.414a.512.512 0 0 0 .437-.577.512.512 0 0 0-.594-.414.512.512 0 0 0-.436.577Zm-.808 20.96c.109.684.773 1.147 1.484 1.034.71-.112 1.2-.758 1.09-1.442-.108-.685-.772-1.148-1.483-1.036-.71.113-1.199.759-1.09 1.443Zm-4.691-31.966c.065.41.463.689.89.621.426-.068.72-.455.654-.866-.065-.41-.463-.688-.89-.62-.426.067-.72.454-.654.865Zm2.098 23.628c.108.684.772 1.148 1.483 1.035.711-.112 1.2-.758 1.091-1.443-.108-.684-.772-1.147-1.483-1.035-.711.113-1.2.759-1.091 1.443Zm-1.967-12.416c.109.684.773 1.147 1.484 1.035.71-.113 1.199-.759 1.09-1.443-.108-.684-.772-1.148-1.483-1.035-.71.112-1.2.758-1.09 1.443Zm1.073 6.772c.108.685.772 1.148 1.483 1.035.711-.112 1.2-.758 1.091-1.442-.108-.685-.772-1.148-1.483-1.036-.711.113-1.2.759-1.091 1.443Zm-.009-3.131c.065.41.464.689.89.621.427-.068.72-.455.655-.866-.065-.41-.464-.688-.89-.62-.427.067-.72.454-.655.865Zm-1.43-9.03c.065.41.463.688.89.62.426-.067.72-.454.655-.865-.065-.41-.464-.689-.89-.62-.427.067-.72.454-.655.865ZM214.5 333.38c.108.685.772 1.148 1.483 1.036.711-.113 1.2-.759 1.091-1.443-.108-.684-.772-1.148-1.483-1.035-.711.112-1.2.758-1.091 1.442Zm-.156-7.178c.065.41.464.689.89.621.427-.067.72-.455.655-.865-.065-.41-.464-.689-.89-.621-.427.067-.72.455-.655.865Zm-1.871-4.72c.108.684.773 1.147 1.483 1.034.711-.112 1.2-.758 1.091-1.442-.108-.685-.772-1.148-1.483-1.035-.71.112-1.2.758-1.091 1.442Zm-1.614-6.857c.065.41.464.689.89.621.427-.068.72-.455.655-.866-.065-.41-.464-.688-.89-.62-.427.067-.72.454-.655.865Zm-.894-5.644c.065.41.464.689.89.621.427-.067.72-.455.655-.866-.065-.41-.463-.688-.89-.62-.427.067-.72.455-.655.865Zm-1.43-9.03c.065.41.464.688.89.62.427-.067.72-.454.655-.865-.065-.41-.464-.688-.89-.62-.427.067-.72.454-.655.865Zm-1.958 14.225c.065.41.463.689.89.62.426-.067.72-.454.654-.865-.065-.41-.463-.688-.89-.62-.426.067-.72.454-.654.865Zm-.703 12.81c.065.41.464.688.89.62.427-.067.72-.455.655-.865-.065-.41-.463-.689-.89-.621-.427.067-.72.455-.655.866Zm-4.543-22.536c.065.41.463.689.89.621.426-.067.72-.455.654-.865-.065-.41-.463-.689-.89-.621-.426.067-.72.455-.654.865Zm2.806 30.138c.065.41.463.689.89.621.426-.067.72-.455.654-.865-.065-.41-.463-.689-.89-.621-.426.067-.72.455-.654.865Zm-5.694-17.996c.065.41.463.688.89.62.426-.067.72-.455.654-.865-.065-.41-.463-.689-.89-.621-.426.067-.72.455-.654.866Zm-2.935-13.343c.066.41.464.688.89.62.427-.067.72-.454.655-.865-.065-.41-.463-.689-.89-.621-.426.068-.72.455-.655.866Z",
  fill: "#003CFF",
  fillRule: "nonzero"
}), import_react2.default.createElement("path", {
  d: "m250.934 176.555-101.963 1.038c-5.276.054-9.51 4.374-9.455 9.65.054 5.274 4.374 9.507 9.649 9.454l101.963-1.04c5.276-.052 9.508-4.372 9.455-9.648-.055-5.276-4.374-9.509-9.65-9.454ZM252.64 331.241l-101.964 1.038c-5.275.054-9.508 4.374-9.454 9.65.054 5.275 4.374 9.508 9.649 9.454l101.963-1.039c5.275-.053 9.507-4.373 9.454-9.649-.054-5.275-4.374-9.508-9.649-9.454Z",
  fill: "#7EACFF"
}), import_react2.default.createElement("path", {
  stroke: "#003CFF",
  strokeWidth: 0.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "m196.824 197.298 52.216-.506M193.329 330.5h52.215"
}), import_react2.default.createElement("path", {
  d: "M167.367 228.041c-4.091-10.787-6.086-20.934-5.985-30.44",
  stroke: "#FFF",
  strokeWidth: 0.75,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), import_react2.default.createElement("circle", {
  cx: 14.857,
  cy: 14.857,
  r: 14.857,
  transform: "translate(106.857 248.571)",
  fill: "#FFCD6B",
  fillRule: "nonzero"
}), import_react2.default.createElement("g", {
  transform: "translate(236.571 284.571)"
}, import_react2.default.createElement("mask", {
  id: "error-block-image-busy-c",
  fill: "#fff"
}, import_react2.default.createElement("use", {
  xlinkHref: "#error-block-image-busy-b"
})), import_react2.default.createElement("use", {
  fill: "#FBBE47",
  fillRule: "nonzero",
  xlinkHref: "#error-block-image-busy-b"
}), import_react2.default.createElement("circle", {
  fill: "#FFCD6B",
  fillRule: "nonzero",
  mask: "url(#error-block-image-busy-c)",
  cx: 25.714,
  cy: 28,
  r: 34.857
}), import_react2.default.createElement("circle", {
  fill: "#FFF",
  fillRule: "nonzero",
  mask: "url(#error-block-image-busy-c)",
  cx: 22.286,
  cy: 18.857,
  r: 3.429
})))), Xb = {
  default: qb,
  disconnected: Kb,
  empty: Gb,
  busy: Yb
}, Qb = Ub(Xb);
var ta = "adm-floating-bubble", Jb = {
  axis: "y",
  defaultOffset: {
    x: 0,
    y: 0
  }
}, ew = (e10) => {
  let t = Z(Jb, e10), n = (0, import_react2.useRef)(null), r = (0, import_react2.useRef)(null), [i, a] = (0, import_react2.useState)(t.offset === void 0 ? t.defaultOffset : t.offset);
  (0, import_react2.useEffect)(() => {
    t.offset !== void 0 && u.start({
      x: t.offset.x,
      y: t.offset.y
    });
  }, [t.offset]);
  let [{
    x: o,
    y: s,
    opacity: c
  }, u] = Ne(() => ({
    x: i.x,
    y: i.y,
    opacity: 1
  })), d = jt((f) => {
    var m;
    let g = f.offset[0], p = f.offset[1];
    if (f.last && t.magnetic) {
      let b = n.current, w = r.current;
      if (!b || !w)
        return;
      let C = b.getBoundingClientRect(), v = w.getBoundingClientRect();
      if (t.magnetic === "x") {
        let y = o.goal - o.get(), E = v.left + y - C.left, $ = C.right - (v.right + y);
        $ <= E ? g += $ : g -= E;
      } else if (t.magnetic === "y") {
        let y = s.goal - s.get(), E = v.top + y - C.top, $ = C.bottom - (v.bottom + y);
        $ <= E ? p += $ : p -= E;
      }
    }
    let h = {
      x: g,
      y: p
    };
    t.offset === void 0 ? u.start(h) : a(h), (m = t.onOffsetChange) === null || m === void 0 || m.call(t, h), u.start({
      opacity: f.active ? 0.8 : 1
    });
  }, {
    axis: t.axis === "xy" ? void 0 : t.axis,
    pointer: {
      touch: !0
    },
    filterTaps: !0,
    bounds: n,
    from: () => [o.get(), s.get()]
  });
  return j(t, import_react2.default.createElement("div", {
    className: ta
  }, import_react2.default.createElement("div", {
    className: `${ta}-boundary-outer`
  }, import_react2.default.createElement("div", {
    className: `${ta}-boundary`,
    ref: n
  })), import_react2.default.createElement(ue.div, Object.assign({}, d(), {
    style: {
      opacity: c,
      transform: N7([o, s], (f, m) => `translate(${f}px, ${m}px)`)
    },
    onClick: t.onClick,
    className: `${ta}-button`,
    ref: r
  }), t.children)));
}, Hk = ew;
function Bl(e10, t) {
  return e10.reduce((n, r) => Math.abs(n - t) < Math.abs(r - t) ? n : r);
}
var tw = {
  handleDraggingOfContent: !0
}, nw = (0, import_react2.forwardRef)((e10, t) => {
  var n, r;
  let i = Z(tw, e10), {
    anchors: a
  } = i, o = (n = a[a.length - 1]) !== null && n !== void 0 ? n : window.innerHeight, s = a.map((C) => -C), c = (0, import_react2.useRef)(null), u = (0, import_react2.useRef)(null), d = (0, import_react2.useRef)(null), [f, m] = (0, import_react2.useState)(!1), g = (0, import_react2.useRef)(!1), p = {
    top: s[s.length - 1],
    bottom: s[0]
  }, h = on((r = i.onHeightChange) !== null && r !== void 0 ? r : () => {
  }), [{
    y: b
  }, w] = Ne(() => ({
    y: p.bottom,
    config: {
      tension: 300
    },
    onChange: (C) => {
      h(-C.value.y, b.isAnimating);
    }
  }));
  return jt((C) => {
    let [, v] = C.offset;
    if (C.first) {
      let $ = C.event.target, k = u.current;
      if (k === $ || (k == null ? void 0 : k.contains($)))
        g.current = !0;
      else {
        if (!i.handleDraggingOfContent)
          return;
        let A = b.goal <= p.top, P = d.current;
        if (!P)
          return;
        A ? P.scrollTop <= 0 && C.direction[1] > 0 && (g.current = !0) : g.current = !0;
      }
    }
    if (m(g.current), !g.current)
      return;
    let {
      event: y
    } = C;
    y.cancelable && y.preventDefault(), y.stopPropagation();
    let E = v;
    C.last && (g.current = !1, m(!1), E = Bl(s, v)), w.start({
      y: E
    });
  }, {
    axis: "y",
    bounds: p,
    rubberband: !0,
    from: () => [0, b.get()],
    pointer: {
      touch: !0
    },
    target: c,
    eventOptions: yi ? {
      passive: !1
    } : !1
  }), (0, import_react2.useImperativeHandle)(t, () => ({
    setHeight: (C, v) => {
      w.start({
        y: -C,
        immediate: v == null ? void 0 : v.immediate
      });
    }
  }), [w]), Ua(c, !0), j(i, import_react2.default.createElement(ue.div, {
    ref: c,
    className: "adm-floating-panel",
    style: {
      height: Math.round(o),
      translateY: b.to((C) => `calc(100% + (${Math.round(C)}px))`)
    }
  }, import_react2.default.createElement("div", {
    className: "adm-floating-panel-mask",
    style: {
      display: f ? "block" : "none"
    }
  }), import_react2.default.createElement("div", {
    className: "adm-floating-panel-header",
    ref: u
  }, import_react2.default.createElement("div", {
    className: "adm-floating-panel-bar"
  })), import_react2.default.createElement("div", {
    className: "adm-floating-panel-content",
    ref: d
  }, i.children)));
});
function Pa() {
  return Pa = Object.assign ? Object.assign.bind() : function(e10) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e10[r] = n[r]);
    }
    return e10;
  }, Pa.apply(this, arguments);
}
function rw(e10, t) {
  if (e10 == null)
    return {};
  var n = {}, r = Object.keys(e10), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e10[i]);
  return n;
}
function Wl(e10, t) {
  if (e10 == null)
    return {};
  var n = rw(e10, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e10);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e10, r) || (n[r] = e10[r]));
  }
  return n;
}
function Xe(e10) {
  return Xe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xe(e10);
}
function iw(e10, t) {
  if (Xe(e10) !== "object" || e10 === null)
    return e10;
  var n = e10[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e10, t || "default");
    if (Xe(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e10);
}
function l0(e10) {
  var t = iw(e10, "string");
  return Xe(t) === "symbol" ? t : String(t);
}
function Ve(e10, t, n) {
  return t = l0(t), t in e10 ? Object.defineProperty(e10, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e10[t] = n, e10;
}
function Yu(e10, t) {
  var n = Object.keys(e10);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e10);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e10, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ee(e10) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yu(Object(n), !0).forEach(function(r) {
      Ve(e10, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e10, Object.getOwnPropertyDescriptors(n)) : Yu(Object(n)).forEach(function(r) {
      Object.defineProperty(e10, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e10;
}
function Os(e10, t) {
  (t == null || t > e10.length) && (t = e10.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e10[n];
  return r;
}
function aw(e10) {
  if (Array.isArray(e10))
    return Os(e10);
}
function c0(e10) {
  if (typeof Symbol < "u" && e10[Symbol.iterator] != null || e10["@@iterator"] != null)
    return Array.from(e10);
}
function Zl(e10, t) {
  if (e10) {
    if (typeof e10 == "string")
      return Os(e10, t);
    var n = Object.prototype.toString.call(e10).slice(8, -1);
    if (n === "Object" && e10.constructor && (n = e10.constructor.name), n === "Map" || n === "Set")
      return Array.from(e10);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Os(e10, t);
  }
}
function ow() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ne(e10) {
  return aw(e10) || c0(e10) || Zl(e10) || ow();
}
function Di(e10, t) {
  if (!(e10 instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Xu(e10, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e10, l0(r.key), r);
  }
}
function Vi(e10, t, n) {
  return t && Xu(e10.prototype, t), n && Xu(e10, n), Object.defineProperty(e10, "prototype", {
    writable: !1
  }), e10;
}
function u0(e10) {
  if (e10 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e10;
}
function Ss(e10, t) {
  return Ss = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, Ss(e10, t);
}
function sw(e10, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e10.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e10,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e10, "prototype", {
    writable: !1
  }), t && Ss(e10, t);
}
function Na(e10) {
  return Na = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Na(e10);
}
function lw() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function cw(e10, t) {
  if (t && (Xe(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return u0(e10);
}
function uw(e10) {
  var t = lw();
  return function() {
    var r = Na(e10), i;
    if (t) {
      var a = Na(this).constructor;
      i = Reflect.construct(r, arguments, a);
    } else
      i = r.apply(this, arguments);
    return cw(this, i);
  };
}
var f0 = { exports: {} }, ae = {};
var Ae = typeof Symbol == "function" && Symbol.for, Hl = Ae ? Symbol.for("react.element") : 60103, zl = Ae ? Symbol.for("react.portal") : 60106, co = Ae ? Symbol.for("react.fragment") : 60107, uo = Ae ? Symbol.for("react.strict_mode") : 60108, fo = Ae ? Symbol.for("react.profiler") : 60114, mo = Ae ? Symbol.for("react.provider") : 60109, ho = Ae ? Symbol.for("react.context") : 60110, Ul = Ae ? Symbol.for("react.async_mode") : 60111, po = Ae ? Symbol.for("react.concurrent_mode") : 60111, vo = Ae ? Symbol.for("react.forward_ref") : 60112, go = Ae ? Symbol.for("react.suspense") : 60113, fw = Ae ? Symbol.for("react.suspense_list") : 60120, yo = Ae ? Symbol.for("react.memo") : 60115, bo = Ae ? Symbol.for("react.lazy") : 60116, dw = Ae ? Symbol.for("react.block") : 60121, mw = Ae ? Symbol.for("react.fundamental") : 60117, hw = Ae ? Symbol.for("react.responder") : 60118, pw = Ae ? Symbol.for("react.scope") : 60119;
function Qe(e10) {
  if (typeof e10 == "object" && e10 !== null) {
    var t = e10.$$typeof;
    switch (t) {
      case Hl:
        switch (e10 = e10.type, e10) {
          case Ul:
          case po:
          case co:
          case fo:
          case uo:
          case go:
            return e10;
          default:
            switch (e10 = e10 && e10.$$typeof, e10) {
              case ho:
              case vo:
              case bo:
              case yo:
              case mo:
                return e10;
              default:
                return t;
            }
        }
      case zl:
        return t;
    }
  }
}
function d0(e10) {
  return Qe(e10) === po;
}
ae.AsyncMode = Ul;
ae.ConcurrentMode = po;
ae.ContextConsumer = ho;
ae.ContextProvider = mo;
ae.Element = Hl;
ae.ForwardRef = vo;
ae.Fragment = co;
ae.Lazy = bo;
ae.Memo = yo;
ae.Portal = zl;
ae.Profiler = fo;
ae.StrictMode = uo;
ae.Suspense = go;
ae.isAsyncMode = function(e10) {
  return d0(e10) || Qe(e10) === Ul;
};
ae.isConcurrentMode = d0;
ae.isContextConsumer = function(e10) {
  return Qe(e10) === ho;
};
ae.isContextProvider = function(e10) {
  return Qe(e10) === mo;
};
ae.isElement = function(e10) {
  return typeof e10 == "object" && e10 !== null && e10.$$typeof === Hl;
};
ae.isForwardRef = function(e10) {
  return Qe(e10) === vo;
};
ae.isFragment = function(e10) {
  return Qe(e10) === co;
};
ae.isLazy = function(e10) {
  return Qe(e10) === bo;
};
ae.isMemo = function(e10) {
  return Qe(e10) === yo;
};
ae.isPortal = function(e10) {
  return Qe(e10) === zl;
};
ae.isProfiler = function(e10) {
  return Qe(e10) === fo;
};
ae.isStrictMode = function(e10) {
  return Qe(e10) === uo;
};
ae.isSuspense = function(e10) {
  return Qe(e10) === go;
};
ae.isValidElementType = function(e10) {
  return typeof e10 == "string" || typeof e10 == "function" || e10 === co || e10 === po || e10 === fo || e10 === uo || e10 === go || e10 === fw || typeof e10 == "object" && e10 !== null && (e10.$$typeof === bo || e10.$$typeof === yo || e10.$$typeof === mo || e10.$$typeof === ho || e10.$$typeof === vo || e10.$$typeof === mw || e10.$$typeof === hw || e10.$$typeof === pw || e10.$$typeof === dw);
};
ae.typeOf = Qe;
(function(e10) {
  e10.exports = ae;
})(f0);
function Fs(e10) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [];
  return import_react2.default.Children.forEach(e10, function(r) {
    r == null && !t.keepEmpty || (Array.isArray(r) ? n = n.concat(Fs(r)) : f0.exports.isFragment(r) && r.props ? n = n.concat(Fs(r.props.children, t)) : n.push(r));
  }), n;
}
var Qu = {};
function vw(e10, t) {
}
function gw(e10, t, n) {
  !t && !Qu[n] && (e10(!1, n), Qu[n] = !0);
}
function en(e10, t) {
  gw(vw, e10, t);
}
var _n = "RC_FORM_INTERNAL_HOOKS", oe = function() {
  en(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, Pn = /* @__PURE__ */ L.createContext({
  getFieldValue: oe,
  getFieldsValue: oe,
  getFieldError: oe,
  getFieldWarning: oe,
  getFieldsError: oe,
  isFieldsTouched: oe,
  isFieldTouched: oe,
  isFieldValidating: oe,
  isFieldsValidating: oe,
  resetFields: oe,
  setFields: oe,
  setFieldValue: oe,
  setFieldsValue: oe,
  validateFields: oe,
  submit: oe,
  getInternalHooks: function() {
    return oe(), {
      dispatch: oe,
      initEntityValue: oe,
      registerField: oe,
      useSubscribe: oe,
      setInitialValues: oe,
      destroyForm: oe,
      setCallbacks: oe,
      registerWatch: oe,
      getFields: oe,
      setValidateMessages: oe,
      setPreserve: oe,
      getInitialValue: oe
    };
  }
});
function Ps(e10) {
  return e10 == null ? [] : Array.isArray(e10) ? e10 : [e10];
}
function Dt() {
  Dt = function() {
    return e10;
  };
  var e10 = {}, t = Object.prototype, n = t.hasOwnProperty, r = Object.defineProperty || function(O, _, x) {
    O[_] = x.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, a = i.iterator || "@@iterator", o = i.asyncIterator || "@@asyncIterator", s = i.toStringTag || "@@toStringTag";
  function c(O, _, x) {
    return Object.defineProperty(O, _, {
      value: x,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), O[_];
  }
  try {
    c({}, "");
  } catch {
    c = function(x, S, M) {
      return x[S] = M;
    };
  }
  function u(O, _, x, S) {
    var M = _ && _.prototype instanceof m ? _ : m, F = Object.create(M.prototype), R = new P(S || []);
    return r(F, "_invoke", {
      value: E(O, x, R)
    }), F;
  }
  function d(O, _, x) {
    try {
      return {
        type: "normal",
        arg: O.call(_, x)
      };
    } catch (S) {
      return {
        type: "throw",
        arg: S
      };
    }
  }
  e10.wrap = u;
  var f = {};
  function m() {
  }
  function g() {
  }
  function p() {
  }
  var h = {};
  c(h, a, function() {
    return this;
  });
  var b = Object.getPrototypeOf, w = b && b(b(N([])));
  w && w !== t && n.call(w, a) && (h = w);
  var C = p.prototype = m.prototype = Object.create(h);
  function v(O) {
    ["next", "throw", "return"].forEach(function(_) {
      c(O, _, function(x) {
        return this._invoke(_, x);
      });
    });
  }
  function y(O, _) {
    function x(M, F, R, I) {
      var W = d(O[M], O, F);
      if (W.type !== "throw") {
        var G = W.arg, H = G.value;
        return H && Xe(H) == "object" && n.call(H, "__await") ? _.resolve(H.__await).then(function(U) {
          x("next", U, R, I);
        }, function(U) {
          x("throw", U, R, I);
        }) : _.resolve(H).then(function(U) {
          G.value = U, R(G);
        }, function(U) {
          return x("throw", U, R, I);
        });
      }
      I(W.arg);
    }
    var S;
    r(this, "_invoke", {
      value: function(F, R) {
        function I() {
          return new _(function(W, G) {
            x(F, R, W, G);
          });
        }
        return S = S ? S.then(I, I) : I();
      }
    });
  }
  function E(O, _, x) {
    var S = "suspendedStart";
    return function(M, F) {
      if (S === "executing")
        throw new Error("Generator is already running");
      if (S === "completed") {
        if (M === "throw")
          throw F;
        return T();
      }
      for (x.method = M, x.arg = F; ; ) {
        var R = x.delegate;
        if (R) {
          var I = $(R, x);
          if (I) {
            if (I === f)
              continue;
            return I;
          }
        }
        if (x.method === "next")
          x.sent = x._sent = x.arg;
        else if (x.method === "throw") {
          if (S === "suspendedStart")
            throw S = "completed", x.arg;
          x.dispatchException(x.arg);
        } else
          x.method === "return" && x.abrupt("return", x.arg);
        S = "executing";
        var W = d(O, _, x);
        if (W.type === "normal") {
          if (S = x.done ? "completed" : "suspendedYield", W.arg === f)
            continue;
          return {
            value: W.arg,
            done: x.done
          };
        }
        W.type === "throw" && (S = "completed", x.method = "throw", x.arg = W.arg);
      }
    };
  }
  function $(O, _) {
    var x = _.method, S = O.iterator[x];
    if (S === void 0)
      return _.delegate = null, x === "throw" && O.iterator.return && (_.method = "return", _.arg = void 0, $(O, _), _.method === "throw") || x !== "return" && (_.method = "throw", _.arg = new TypeError("The iterator does not provide a '" + x + "' method")), f;
    var M = d(S, O.iterator, _.arg);
    if (M.type === "throw")
      return _.method = "throw", _.arg = M.arg, _.delegate = null, f;
    var F = M.arg;
    return F ? F.done ? (_[O.resultName] = F.value, _.next = O.nextLoc, _.method !== "return" && (_.method = "next", _.arg = void 0), _.delegate = null, f) : F : (_.method = "throw", _.arg = new TypeError("iterator result is not an object"), _.delegate = null, f);
  }
  function k(O) {
    var _ = {
      tryLoc: O[0]
    };
    1 in O && (_.catchLoc = O[1]), 2 in O && (_.finallyLoc = O[2], _.afterLoc = O[3]), this.tryEntries.push(_);
  }
  function A(O) {
    var _ = O.completion || {};
    _.type = "normal", delete _.arg, O.completion = _;
  }
  function P(O) {
    this.tryEntries = [{
      tryLoc: "root"
    }], O.forEach(k, this), this.reset(!0);
  }
  function N(O) {
    if (O) {
      var _ = O[a];
      if (_)
        return _.call(O);
      if (typeof O.next == "function")
        return O;
      if (!isNaN(O.length)) {
        var x = -1, S = function M() {
          for (; ++x < O.length; )
            if (n.call(O, x))
              return M.value = O[x], M.done = !1, M;
          return M.value = void 0, M.done = !0, M;
        };
        return S.next = S;
      }
    }
    return {
      next: T
    };
  }
  function T() {
    return {
      value: void 0,
      done: !0
    };
  }
  return g.prototype = p, r(C, "constructor", {
    value: p,
    configurable: !0
  }), r(p, "constructor", {
    value: g,
    configurable: !0
  }), g.displayName = c(p, s, "GeneratorFunction"), e10.isGeneratorFunction = function(O) {
    var _ = typeof O == "function" && O.constructor;
    return !!_ && (_ === g || (_.displayName || _.name) === "GeneratorFunction");
  }, e10.mark = function(O) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(O, p) : (O.__proto__ = p, c(O, s, "GeneratorFunction")), O.prototype = Object.create(C), O;
  }, e10.awrap = function(O) {
    return {
      __await: O
    };
  }, v(y.prototype), c(y.prototype, o, function() {
    return this;
  }), e10.AsyncIterator = y, e10.async = function(O, _, x, S, M) {
    M === void 0 && (M = Promise);
    var F = new y(u(O, _, x, S), M);
    return e10.isGeneratorFunction(_) ? F : F.next().then(function(R) {
      return R.done ? R.value : F.next();
    });
  }, v(C), c(C, s, "Generator"), c(C, a, function() {
    return this;
  }), c(C, "toString", function() {
    return "[object Generator]";
  }), e10.keys = function(O) {
    var _ = Object(O), x = [];
    for (var S in _)
      x.push(S);
    return x.reverse(), function M() {
      for (; x.length; ) {
        var F = x.pop();
        if (F in _)
          return M.value = F, M.done = !1, M;
      }
      return M.done = !0, M;
    };
  }, e10.values = N, P.prototype = {
    constructor: P,
    reset: function(_) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(A), !_)
        for (var x in this)
          x.charAt(0) === "t" && n.call(this, x) && !isNaN(+x.slice(1)) && (this[x] = void 0);
    },
    stop: function() {
      this.done = !0;
      var _ = this.tryEntries[0].completion;
      if (_.type === "throw")
        throw _.arg;
      return this.rval;
    },
    dispatchException: function(_) {
      if (this.done)
        throw _;
      var x = this;
      function S(G, H) {
        return R.type = "throw", R.arg = _, x.next = G, H && (x.method = "next", x.arg = void 0), !!H;
      }
      for (var M = this.tryEntries.length - 1; M >= 0; --M) {
        var F = this.tryEntries[M], R = F.completion;
        if (F.tryLoc === "root")
          return S("end");
        if (F.tryLoc <= this.prev) {
          var I = n.call(F, "catchLoc"), W = n.call(F, "finallyLoc");
          if (I && W) {
            if (this.prev < F.catchLoc)
              return S(F.catchLoc, !0);
            if (this.prev < F.finallyLoc)
              return S(F.finallyLoc);
          } else if (I) {
            if (this.prev < F.catchLoc)
              return S(F.catchLoc, !0);
          } else {
            if (!W)
              throw new Error("try statement without catch or finally");
            if (this.prev < F.finallyLoc)
              return S(F.finallyLoc);
          }
        }
      }
    },
    abrupt: function(_, x) {
      for (var S = this.tryEntries.length - 1; S >= 0; --S) {
        var M = this.tryEntries[S];
        if (M.tryLoc <= this.prev && n.call(M, "finallyLoc") && this.prev < M.finallyLoc) {
          var F = M;
          break;
        }
      }
      F && (_ === "break" || _ === "continue") && F.tryLoc <= x && x <= F.finallyLoc && (F = null);
      var R = F ? F.completion : {};
      return R.type = _, R.arg = x, F ? (this.method = "next", this.next = F.finallyLoc, f) : this.complete(R);
    },
    complete: function(_, x) {
      if (_.type === "throw")
        throw _.arg;
      return _.type === "break" || _.type === "continue" ? this.next = _.arg : _.type === "return" ? (this.rval = this.arg = _.arg, this.method = "return", this.next = "end") : _.type === "normal" && x && (this.next = x), f;
    },
    finish: function(_) {
      for (var x = this.tryEntries.length - 1; x >= 0; --x) {
        var S = this.tryEntries[x];
        if (S.finallyLoc === _)
          return this.complete(S.completion, S.afterLoc), A(S), f;
      }
    },
    catch: function(_) {
      for (var x = this.tryEntries.length - 1; x >= 0; --x) {
        var S = this.tryEntries[x];
        if (S.tryLoc === _) {
          var M = S.completion;
          if (M.type === "throw") {
            var F = M.arg;
            A(S);
          }
          return F;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(_, x, S) {
      return this.delegate = {
        iterator: N(_),
        resultName: x,
        nextLoc: S
      }, this.method === "next" && (this.arg = void 0), f;
    }
  }, e10;
}
function Ju(e10, t, n, r, i, a, o) {
  try {
    var s = e10[a](o), c = s.value;
  } catch (u) {
    n(u);
    return;
  }
  s.done ? t(c) : Promise.resolve(c).then(r, i);
}
function wo(e10) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, i) {
      var a = e10.apply(t, n);
      function o(c) {
        Ju(a, r, i, o, s, "next", c);
      }
      function s(c) {
        Ju(a, r, i, o, s, "throw", c);
      }
      o(void 0);
    });
  };
}
function kn() {
  return kn = Object.assign ? Object.assign.bind() : function(e10) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e10[r] = n[r]);
    }
    return e10;
  }, kn.apply(this, arguments);
}
function yw(e10, t) {
  e10.prototype = Object.create(t.prototype), e10.prototype.constructor = e10, li(e10, t);
}
function Ns(e10) {
  return Ns = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ns(e10);
}
function li(e10, t) {
  return li = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, li(e10, t);
}
function bw() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function fa(e10, t, n) {
  return bw() ? fa = Reflect.construct.bind() : fa = function(i, a, o) {
    var s = [null];
    s.push.apply(s, a);
    var c = Function.bind.apply(i, s), u = new c();
    return o && li(u, o.prototype), u;
  }, fa.apply(null, arguments);
}
function ww(e10) {
  return Function.toString.call(e10).indexOf("[native code]") !== -1;
}
function As(e10) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return As = function(r) {
    if (r === null || !ww(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, i);
    }
    function i() {
      return fa(r, arguments, Ns(this).constructor);
    }
    return i.prototype = Object.create(r.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), li(i, r);
  }, As(e10);
}
var Ew = /%[sdj%]/g, Cw = function() {
};
typeof process < "u" && process.env;
function Ts(e10) {
  if (!e10 || !e10.length)
    return null;
  var t = {};
  return e10.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function Ge(e10) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var i = 0, a = n.length;
  if (typeof e10 == "function")
    return e10.apply(null, n);
  if (typeof e10 == "string") {
    var o = e10.replace(Ew, function(s) {
      if (s === "%%")
        return "%";
      if (i >= a)
        return s;
      switch (s) {
        case "%s":
          return String(n[i++]);
        case "%d":
          return Number(n[i++]);
        case "%j":
          try {
            return JSON.stringify(n[i++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return o;
  }
  return e10;
}
function $w(e10) {
  return e10 === "string" || e10 === "url" || e10 === "hex" || e10 === "email" || e10 === "date" || e10 === "pattern";
}
function ke(e10, t) {
  return !!(e10 == null || t === "array" && Array.isArray(e10) && !e10.length || $w(t) && typeof e10 == "string" && !e10);
}
function xw(e10, t, n) {
  var r = [], i = 0, a = e10.length;
  function o(s) {
    r.push.apply(r, s || []), i++, i === a && n(r);
  }
  e10.forEach(function(s) {
    t(s, o);
  });
}
function ef(e10, t, n) {
  var r = 0, i = e10.length;
  function a(o) {
    if (o && o.length) {
      n(o);
      return;
    }
    var s = r;
    r = r + 1, s < i ? t(e10[s], a) : n([]);
  }
  a([]);
}
function _w(e10) {
  var t = [];
  return Object.keys(e10).forEach(function(n) {
    t.push.apply(t, e10[n] || []);
  }), t;
}
var tf = /* @__PURE__ */ function(e10) {
  yw(t, e10);
  function t(n, r) {
    var i;
    return i = e10.call(this, "Async Validation Error") || this, i.errors = n, i.fields = r, i;
  }
  return t;
}(/* @__PURE__ */ As(Error));
function kw(e10, t, n, r, i) {
  if (t.first) {
    var a = new Promise(function(m, g) {
      var p = function(w) {
        return r(w), w.length ? g(new tf(w, Ts(w))) : m(i);
      }, h = _w(e10);
      ef(h, n, p);
    });
    return a.catch(function(m) {
      return m;
    }), a;
  }
  var o = t.firstFields === !0 ? Object.keys(e10) : t.firstFields || [], s = Object.keys(e10), c = s.length, u = 0, d = [], f = new Promise(function(m, g) {
    var p = function(b) {
      if (d.push.apply(d, b), u++, u === c)
        return r(d), d.length ? g(new tf(d, Ts(d))) : m(i);
    };
    s.length || (r(d), m(i)), s.forEach(function(h) {
      var b = e10[h];
      o.indexOf(h) !== -1 ? ef(b, n, p) : xw(b, n, p);
    });
  });
  return f.catch(function(m) {
    return m;
  }), f;
}
function Ow(e10) {
  return !!(e10 && e10.message !== void 0);
}
function Sw(e10, t) {
  for (var n = e10, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function nf(e10, t) {
  return function(n) {
    var r;
    return e10.fullFields ? r = Sw(t, e10.fullFields) : r = t[n.field || e10.fullField], Ow(n) ? (n.field = n.field || e10.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e10.fullField
    };
  };
}
function rf(e10, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == "object" && typeof e10[n] == "object" ? e10[n] = kn({}, e10[n], r) : e10[n] = r;
      }
  }
  return e10;
}
var m0 = function(t, n, r, i, a, o) {
  t.required && (!r.hasOwnProperty(t.field) || ke(n, o || t.type)) && i.push(Ge(a.messages.required, t.fullField));
}, Fw = function(t, n, r, i, a) {
  (/^\s+$/.test(n) || n === "") && i.push(Ge(a.messages.whitespace, t.fullField));
}, na, Pw = function() {
  if (na)
    return na;
  var e10 = "[a-fA-F\\d:]", t = function(y) {
    return y && y.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e10 + ")|(?<=" + e10 + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", i = (`
(?:
(?:` + r + ":){7}(?:" + r + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + r + ":){6}(?:" + n + "|:" + r + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + r + ":){5}(?::" + n + "|(?::" + r + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + r + ":){4}(?:(?::" + r + "){0,1}:" + n + "|(?::" + r + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + r + ":){3}(?:(?::" + r + "){0,2}:" + n + "|(?::" + r + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + r + ":){2}(?:(?::" + r + "){0,3}:" + n + "|(?::" + r + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + r + ":){1}(?:(?::" + r + "){0,4}:" + n + "|(?::" + r + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + r + "){0,5}:" + n + "|(?::" + r + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), a = new RegExp("(?:^" + n + "$)|(?:^" + i + "$)"), o = new RegExp("^" + n + "$"), s = new RegExp("^" + i + "$"), c = function(y) {
    return y && y.exact ? a : new RegExp("(?:" + t(y) + n + t(y) + ")|(?:" + t(y) + i + t(y) + ")", "g");
  };
  c.v4 = function(v) {
    return v && v.exact ? o : new RegExp("" + t(v) + n + t(v), "g");
  }, c.v6 = function(v) {
    return v && v.exact ? s : new RegExp("" + t(v) + i + t(v), "g");
  };
  var u = "(?:(?:[a-z]+:)?//)", d = "(?:\\S+(?::\\S*)?@)?", f = c.v4().source, m = c.v6().source, g = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", p = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", h = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", b = "(?::\\d{2,5})?", w = '(?:[/?#][^\\s"]*)?', C = "(?:" + u + "|www\\.)" + d + "(?:localhost|" + f + "|" + m + "|" + g + p + h + ")" + b + w;
  return na = new RegExp("(?:^" + C + "$)", "i"), na;
}, af = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Br = {
  integer: function(t) {
    return Br.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Br.number(t) && !Br.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return typeof t == "object" && !Br.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(af.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(Pw());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(af.hex);
  }
}, Nw = function(t, n, r, i, a) {
  if (t.required && n === void 0) {
    m0(t, n, r, i, a);
    return;
  }
  var o = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  o.indexOf(s) > -1 ? Br[s](n) || i.push(Ge(a.messages.types[s], t.fullField, t.type)) : s && typeof n !== t.type && i.push(Ge(a.messages.types[s], t.fullField, t.type));
}, Aw = function(t, n, r, i, a) {
  var o = typeof t.len == "number", s = typeof t.min == "number", c = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = n, f = null, m = typeof n == "number", g = typeof n == "string", p = Array.isArray(n);
  if (m ? f = "number" : g ? f = "string" : p && (f = "array"), !f)
    return !1;
  p && (d = n.length), g && (d = n.replace(u, "_").length), o ? d !== t.len && i.push(Ge(a.messages[f].len, t.fullField, t.len)) : s && !c && d < t.min ? i.push(Ge(a.messages[f].min, t.fullField, t.min)) : c && !s && d > t.max ? i.push(Ge(a.messages[f].max, t.fullField, t.max)) : s && c && (d < t.min || d > t.max) && i.push(Ge(a.messages[f].range, t.fullField, t.min, t.max));
}, Bn = "enum", Tw = function(t, n, r, i, a) {
  t[Bn] = Array.isArray(t[Bn]) ? t[Bn] : [], t[Bn].indexOf(n) === -1 && i.push(Ge(a.messages[Bn], t.fullField, t[Bn].join(", ")));
}, Rw = function(t, n, r, i, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || i.push(Ge(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var o = new RegExp(t.pattern);
      o.test(n) || i.push(Ge(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, Q = {
  required: m0,
  whitespace: Fw,
  type: Nw,
  range: Aw,
  enum: Tw,
  pattern: Rw
}, Mw = function(t, n, r, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (ke(n, "string") && !t.required)
      return r();
    Q.required(t, n, i, o, a, "string"), ke(n, "string") || (Q.type(t, n, i, o, a), Q.range(t, n, i, o, a), Q.pattern(t, n, i, o, a), t.whitespace === !0 && Q.whitespace(t, n, i, o, a));
  }
  r(o);
}, Iw = function(t, n, r, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (ke(n) && !t.required)
      return r();
    Q.required(t, n, i, o, a), n !== void 0 && Q.type(t, n, i, o, a);
  }
  r(o);
}, Lw = function(t, n, r, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (n === "" && (n = void 0), ke(n) && !t.required)
      return r();
    Q.required(t, n, i, o, a), n !== void 0 && (Q.type(t, n, i, o, a), Q.range(t, n, i, o, a));
  }
  r(o);
}, Dw = function(t, n, r, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (ke(n) && !t.required)
      return r();
    Q.required(t, n, i, o, a), n !== void 0 && Q.type(t, n, i, o, a);
  }
  r(o);
}, Vw = function(t, n, r, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (ke(n) && !t.required)
      return r();
    Q.required(t, n, i, o, a), ke(n) || Q.type(t, n, i, o, a);
  }
  r(o);
}, jw = function(t, n, r, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (ke(n) && !t.required)
      return r();
    Q.required(t, n, i, o, a), n !== void 0 && (Q.type(t, n, i, o, a), Q.range(t, n, i, o, a));
  }
  r(o);
}, Bw = function(t, n, r, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (ke(n) && !t.required)
      return r();
    Q.required(t, n, i, o, a), n !== void 0 && (Q.type(t, n, i, o, a), Q.range(t, n, i, o, a));
  }
  r(o);
}, Ww = function(t, n, r, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (n == null && !t.required)
      return r();
    Q.required(t, n, i, o, a, "array"), n != null && (Q.type(t, n, i, o, a), Q.range(t, n, i, o, a));
  }
  r(o);
}, Zw = function(t, n, r, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (ke(n) && !t.required)
      return r();
    Q.required(t, n, i, o, a), n !== void 0 && Q.type(t, n, i, o, a);
  }
  r(o);
}, Hw = "enum", zw = function(t, n, r, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (ke(n) && !t.required)
      return r();
    Q.required(t, n, i, o, a), n !== void 0 && Q[Hw](t, n, i, o, a);
  }
  r(o);
}, Uw = function(t, n, r, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (ke(n, "string") && !t.required)
      return r();
    Q.required(t, n, i, o, a), ke(n, "string") || Q.pattern(t, n, i, o, a);
  }
  r(o);
}, qw = function(t, n, r, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (ke(n, "date") && !t.required)
      return r();
    if (Q.required(t, n, i, o, a), !ke(n, "date")) {
      var c;
      n instanceof Date ? c = n : c = new Date(n), Q.type(t, c, i, o, a), c && Q.range(t, c.getTime(), i, o, a);
    }
  }
  r(o);
}, Kw = function(t, n, r, i, a) {
  var o = [], s = Array.isArray(n) ? "array" : typeof n;
  Q.required(t, n, i, o, a, s), r(o);
}, jo = function(t, n, r, i, a) {
  var o = t.type, s = [], c = t.required || !t.required && i.hasOwnProperty(t.field);
  if (c) {
    if (ke(n, o) && !t.required)
      return r();
    Q.required(t, n, i, s, a, o), ke(n, o) || Q.type(t, n, i, s, a);
  }
  r(s);
}, Gw = function(t, n, r, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (ke(n) && !t.required)
      return r();
    Q.required(t, n, i, o, a);
  }
  r(o);
}, Ur = {
  string: Mw,
  method: Iw,
  number: Lw,
  boolean: Dw,
  regexp: Vw,
  integer: jw,
  float: Bw,
  array: Ww,
  object: Zw,
  enum: zw,
  pattern: Uw,
  date: qw,
  url: jo,
  hex: jo,
  email: jo,
  required: Kw,
  any: Gw
};
function Rs() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var Ms = Rs(), ji = /* @__PURE__ */ function() {
  function e10(n) {
    this.rules = null, this._messages = Ms, this.define(n);
  }
  var t = e10.prototype;
  return t.define = function(r) {
    var i = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(a) {
      var o = r[a];
      i.rules[a] = Array.isArray(o) ? o : [o];
    });
  }, t.messages = function(r) {
    return r && (this._messages = rf(Rs(), r)), this._messages;
  }, t.validate = function(r, i, a) {
    var o = this;
    i === void 0 && (i = {}), a === void 0 && (a = function() {
    });
    var s = r, c = i, u = a;
    if (typeof c == "function" && (u = c, c = {}), !this.rules || Object.keys(this.rules).length === 0)
      return u && u(null, s), Promise.resolve(s);
    function d(h) {
      var b = [], w = {};
      function C(y) {
        if (Array.isArray(y)) {
          var E;
          b = (E = b).concat.apply(E, y);
        } else
          b.push(y);
      }
      for (var v = 0; v < h.length; v++)
        C(h[v]);
      b.length ? (w = Ts(b), u(b, w)) : u(null, s);
    }
    if (c.messages) {
      var f = this.messages();
      f === Ms && (f = Rs()), rf(f, c.messages), c.messages = f;
    } else
      c.messages = this.messages();
    var m = {}, g = c.keys || Object.keys(this.rules);
    g.forEach(function(h) {
      var b = o.rules[h], w = s[h];
      b.forEach(function(C) {
        var v = C;
        typeof v.transform == "function" && (s === r && (s = kn({}, s)), w = s[h] = v.transform(w)), typeof v == "function" ? v = {
          validator: v
        } : v = kn({}, v), v.validator = o.getValidationMethod(v), v.validator && (v.field = h, v.fullField = v.fullField || h, v.type = o.getType(v), m[h] = m[h] || [], m[h].push({
          rule: v,
          value: w,
          source: s,
          field: h
        }));
      });
    });
    var p = {};
    return kw(m, c, function(h, b) {
      var w = h.rule, C = (w.type === "object" || w.type === "array") && (typeof w.fields == "object" || typeof w.defaultField == "object");
      C = C && (w.required || !w.required && h.value), w.field = h.field;
      function v($, k) {
        return kn({}, k, {
          fullField: w.fullField + "." + $,
          fullFields: w.fullFields ? [].concat(w.fullFields, [$]) : [$]
        });
      }
      function y($) {
        $ === void 0 && ($ = []);
        var k = Array.isArray($) ? $ : [$];
        !c.suppressWarning && k.length && e10.warning("async-validator:", k), k.length && w.message !== void 0 && (k = [].concat(w.message));
        var A = k.map(nf(w, s));
        if (c.first && A.length)
          return p[w.field] = 1, b(A);
        if (!C)
          b(A);
        else {
          if (w.required && !h.value)
            return w.message !== void 0 ? A = [].concat(w.message).map(nf(w, s)) : c.error && (A = [c.error(w, Ge(c.messages.required, w.field))]), b(A);
          var P = {};
          w.defaultField && Object.keys(h.value).map(function(O) {
            P[O] = w.defaultField;
          }), P = kn({}, P, h.rule.fields);
          var N = {};
          Object.keys(P).forEach(function(O) {
            var _ = P[O], x = Array.isArray(_) ? _ : [_];
            N[O] = x.map(v.bind(null, O));
          });
          var T = new e10(N);
          T.messages(c.messages), h.rule.options && (h.rule.options.messages = c.messages, h.rule.options.error = c.error), T.validate(h.value, h.rule.options || c, function(O) {
            var _ = [];
            A && A.length && _.push.apply(_, A), O && O.length && _.push.apply(_, O), b(_.length ? _ : null);
          });
        }
      }
      var E;
      if (w.asyncValidator)
        E = w.asyncValidator(w, h.value, y, h.source, c);
      else if (w.validator) {
        try {
          E = w.validator(w, h.value, y, h.source, c);
        } catch ($) {
          console.error == null || console.error($), c.suppressValidatorError || setTimeout(function() {
            throw $;
          }, 0), y($.message);
        }
        E === !0 ? y() : E === !1 ? y(typeof w.message == "function" ? w.message(w.fullField || w.field) : w.message || (w.fullField || w.field) + " fails") : E instanceof Array ? y(E) : E instanceof Error && y(E.message);
      }
      E && E.then && E.then(function() {
        return y();
      }, function($) {
        return y($);
      });
    }, function(h) {
      d(h);
    }, s);
  }, t.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !Ur.hasOwnProperty(r.type))
      throw new Error(Ge("Unknown rule type %s", r.type));
    return r.type || "string";
  }, t.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var i = Object.keys(r), a = i.indexOf("message");
    return a !== -1 && i.splice(a, 1), i.length === 1 && i[0] === "required" ? Ur.required : Ur[this.getType(r)] || void 0;
  }, e10;
}();
ji.register = function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Ur[t] = n;
};
ji.warning = Cw;
ji.messages = Ms;
ji.validators = Ur;
var qe = "'${name}' is not a valid ${type}", h0 = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: qe,
    method: qe,
    array: qe,
    object: qe,
    number: qe,
    date: qe,
    boolean: qe,
    integer: qe,
    float: qe,
    regexp: qe,
    email: qe,
    url: qe,
    hex: qe
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};
function p0(e10, t) {
  for (var n = e10, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function v0(e10) {
  if (Array.isArray(e10))
    return e10;
}
function g0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yw(e10) {
  return v0(e10) || c0(e10) || Zl(e10) || g0();
}
function y0(e10, t, n, r) {
  if (!t.length)
    return n;
  var i = Yw(t), a = i[0], o = i.slice(1), s;
  return !e10 && typeof a == "number" ? s = [] : Array.isArray(e10) ? s = ne(e10) : s = ee({}, e10), r && n === void 0 && o.length === 1 ? delete s[a][o[0]] : s[a] = y0(s[a], o, n, r), s;
}
function Xw(e10, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !p0(e10, t.slice(0, -1)) ? e10 : y0(e10, t, n, r);
}
function Eo(e10) {
  return Array.isArray(e10) ? Jw(e10) : Xe(e10) === "object" && e10 !== null ? Qw(e10) : e10;
}
function Qw(e10) {
  if (Object.getPrototypeOf(e10) === Object.prototype) {
    var t = {};
    for (var n in e10)
      t[n] = Eo(e10[n]);
    return t;
  }
  return e10;
}
function Jw(e10) {
  return e10.map(function(t) {
    return Eo(t);
  });
}
function ge(e10) {
  return Ps(e10);
}
function Xt(e10, t) {
  var n = p0(e10, t);
  return n;
}
function Kt(e10, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, i = Xw(e10, t, n, r);
  return i;
}
function of(e10, t) {
  var n = {};
  return t.forEach(function(r) {
    var i = Xt(e10, r);
    n = Kt(n, r, i);
  }), n;
}
function qr(e10, t) {
  return e10 && e10.some(function(n) {
    return w0(n, t);
  });
}
function sf(e10) {
  return Xe(e10) === "object" && e10 !== null && Object.getPrototypeOf(e10) === Object.prototype;
}
function b0(e10, t) {
  var n = Array.isArray(e10) ? ne(e10) : ee({}, e10);
  return t && Object.keys(t).forEach(function(r) {
    var i = n[r], a = t[r], o = sf(i) && sf(a);
    n[r] = o ? b0(i, a || {}) : Eo(a);
  }), n;
}
function da(e10) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return n.reduce(function(i, a) {
    return b0(i, a);
  }, e10);
}
function w0(e10, t) {
  return !e10 || !t || e10.length !== t.length ? !1 : e10.every(function(n, r) {
    return t[r] === n;
  });
}
function eE(e10, t) {
  if (e10 === t)
    return !0;
  if (!e10 && t || e10 && !t || !e10 || !t || Xe(e10) !== "object" || Xe(t) !== "object")
    return !1;
  var n = Object.keys(e10), r = Object.keys(t), i = new Set([].concat(n, r));
  return ne(i).every(function(a) {
    var o = e10[a], s = t[a];
    return typeof o == "function" && typeof s == "function" ? !0 : o === s;
  });
}
function tE(e10) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && Xe(t.target) === "object" && e10 in t.target ? t.target[e10] : t;
}
function lf(e10, t, n) {
  var r = e10.length;
  if (t < 0 || t >= r || n < 0 || n >= r)
    return e10;
  var i = e10[t], a = t - n;
  return a > 0 ? [].concat(ne(e10.slice(0, n)), [i], ne(e10.slice(n, t)), ne(e10.slice(t + 1, r))) : a < 0 ? [].concat(ne(e10.slice(0, t)), ne(e10.slice(t + 1, n + 1)), [i], ne(e10.slice(n + 1, r))) : e10;
}
var nE = ji;
function rE(e10, t) {
  return e10.replace(/\$\{\w+\}/g, function(n) {
    var r = n.slice(2, -1);
    return t[r];
  });
}
var cf = "CODE_LOGIC_ERROR";
function Is(e10, t, n, r, i) {
  return Ls.apply(this, arguments);
}
function Ls() {
  return Ls = wo(/* @__PURE__ */ Dt().mark(function e10(t, n, r, i, a) {
    var o, s, c, u, d, f, m, g, p;
    return Dt().wrap(function(b) {
      for (; ; )
        switch (b.prev = b.next) {
          case 0:
            return o = ee({}, r), delete o.ruleIndex, o.validator && (s = o.validator, o.validator = function() {
              try {
                return s.apply(void 0, arguments);
              } catch (w) {
                return console.error(w), Promise.reject(cf);
              }
            }), c = null, o && o.type === "array" && o.defaultField && (c = o.defaultField, delete o.defaultField), u = new nE(Ve({}, t, [o])), d = da({}, h0, i.validateMessages), u.messages(d), f = [], b.prev = 9, b.next = 12, Promise.resolve(u.validate(Ve({}, t, n), ee({}, i)));
          case 12:
            b.next = 17;
            break;
          case 14:
            b.prev = 14, b.t0 = b.catch(9), b.t0.errors && (f = b.t0.errors.map(function(w, C) {
              var v = w.message, y = v === cf ? d.default : v;
              return /* @__PURE__ */ L.isValidElement(y) ? /* @__PURE__ */ L.cloneElement(y, {
                key: "error_".concat(C)
              }) : y;
            }));
          case 17:
            if (!(!f.length && c)) {
              b.next = 22;
              break;
            }
            return b.next = 20, Promise.all(n.map(function(w, C) {
              return Is("".concat(t, ".").concat(C), w, c, i, a);
            }));
          case 20:
            return m = b.sent, b.abrupt("return", m.reduce(function(w, C) {
              return [].concat(ne(w), ne(C));
            }, []));
          case 22:
            return g = ee(ee({}, r), {}, {
              name: t,
              enum: (r.enum || []).join(", ")
            }, a), p = f.map(function(w) {
              return typeof w == "string" ? rE(w, g) : w;
            }), b.abrupt("return", p);
          case 25:
          case "end":
            return b.stop();
        }
    }, e10, null, [[9, 14]]);
  })), Ls.apply(this, arguments);
}
function iE(e10, t, n, r, i, a) {
  var o = e10.join("."), s = n.map(function(d, f) {
    var m = d.validator, g = ee(ee({}, d), {}, {
      ruleIndex: f
    });
    return m && (g.validator = function(p, h, b) {
      var w = !1, C = function() {
        for (var E = arguments.length, $ = new Array(E), k = 0; k < E; k++)
          $[k] = arguments[k];
        Promise.resolve().then(function() {
          en(!w, "Your validator function has already return a promise. `callback` will be ignored."), w || b.apply(void 0, $);
        });
      }, v = m(p, h, C);
      w = v && typeof v.then == "function" && typeof v.catch == "function", en(w, "`callback` is deprecated. Please return a promise instead."), w && v.then(function() {
        b();
      }).catch(function(y) {
        b(y || " ");
      });
    }), g;
  }).sort(function(d, f) {
    var m = d.warningOnly, g = d.ruleIndex, p = f.warningOnly, h = f.ruleIndex;
    return !!m == !!p ? g - h : m ? 1 : -1;
  }), c;
  if (i === !0)
    c = new Promise(/* @__PURE__ */ function() {
      var d = wo(/* @__PURE__ */ Dt().mark(function f(m, g) {
        var p, h, b;
        return Dt().wrap(function(C) {
          for (; ; )
            switch (C.prev = C.next) {
              case 0:
                p = 0;
              case 1:
                if (!(p < s.length)) {
                  C.next = 12;
                  break;
                }
                return h = s[p], C.next = 5, Is(o, t, h, r, a);
              case 5:
                if (b = C.sent, !b.length) {
                  C.next = 9;
                  break;
                }
                return g([{
                  errors: b,
                  rule: h
                }]), C.abrupt("return");
              case 9:
                p += 1, C.next = 1;
                break;
              case 12:
                m([]);
              case 13:
              case "end":
                return C.stop();
            }
        }, f);
      }));
      return function(f, m) {
        return d.apply(this, arguments);
      };
    }());
  else {
    var u = s.map(function(d) {
      return Is(o, t, d, r, a).then(function(f) {
        return {
          errors: f,
          rule: d
        };
      });
    });
    c = (i ? oE(u) : aE(u)).then(function(d) {
      return Promise.reject(d);
    });
  }
  return c.catch(function(d) {
    return d;
  }), c;
}
function aE(e10) {
  return Ds.apply(this, arguments);
}
function Ds() {
  return Ds = wo(/* @__PURE__ */ Dt().mark(function e10(t) {
    return Dt().wrap(function(r) {
      for (; ; )
        switch (r.prev = r.next) {
          case 0:
            return r.abrupt("return", Promise.all(t).then(function(i) {
              var a, o = (a = []).concat.apply(a, ne(i));
              return o;
            }));
          case 1:
          case "end":
            return r.stop();
        }
    }, e10);
  })), Ds.apply(this, arguments);
}
function oE(e10) {
  return Vs.apply(this, arguments);
}
function Vs() {
  return Vs = wo(/* @__PURE__ */ Dt().mark(function e10(t) {
    var n;
    return Dt().wrap(function(i) {
      for (; ; )
        switch (i.prev = i.next) {
          case 0:
            return n = 0, i.abrupt("return", new Promise(function(a) {
              t.forEach(function(o) {
                o.then(function(s) {
                  s.errors.length && a([s]), n += 1, n === t.length && a([]);
                });
              });
            }));
          case 2:
          case "end":
            return i.stop();
        }
    }, e10);
  })), Vs.apply(this, arguments);
}
var sE = ["name"], et = [];
function uf(e10, t, n, r, i, a) {
  return typeof e10 == "function" ? e10(t, n, "source" in a ? {
    source: a.source
  } : {}) : r !== i;
}
var ql = /* @__PURE__ */ function(e10) {
  sw(n, e10);
  var t = uw(n);
  function n(r) {
    var i;
    if (Di(this, n), i = t.call(this, r), i.state = {
      resetCount: 0
    }, i.cancelRegisterFunc = null, i.mounted = !1, i.touched = !1, i.dirty = !1, i.validatePromise = null, i.prevValidating = void 0, i.errors = et, i.warnings = et, i.cancelRegister = function() {
      var c = i.props, u = c.preserve, d = c.isListField, f = c.name;
      i.cancelRegisterFunc && i.cancelRegisterFunc(d, u, ge(f)), i.cancelRegisterFunc = null;
    }, i.getNamePath = function() {
      var c = i.props, u = c.name, d = c.fieldContext, f = d.prefixName, m = f === void 0 ? [] : f;
      return u !== void 0 ? [].concat(ne(m), ne(u)) : [];
    }, i.getRules = function() {
      var c = i.props, u = c.rules, d = u === void 0 ? [] : u, f = c.fieldContext;
      return d.map(function(m) {
        return typeof m == "function" ? m(f) : m;
      });
    }, i.refresh = function() {
      !i.mounted || i.setState(function(c) {
        var u = c.resetCount;
        return {
          resetCount: u + 1
        };
      });
    }, i.triggerMetaEvent = function(c) {
      var u = i.props.onMetaChange;
      u == null || u(ee(ee({}, i.getMeta()), {}, {
        destroy: c
      }));
    }, i.onStoreChange = function(c, u, d) {
      var f = i.props, m = f.shouldUpdate, g = f.dependencies, p = g === void 0 ? [] : g, h = f.onReset, b = d.store, w = i.getNamePath(), C = i.getValue(c), v = i.getValue(b), y = u && qr(u, w);
      switch (d.type === "valueUpdate" && d.source === "external" && C !== v && (i.touched = !0, i.dirty = !0, i.validatePromise = null, i.errors = et, i.warnings = et, i.triggerMetaEvent()), d.type) {
        case "reset":
          if (!u || y) {
            i.touched = !1, i.dirty = !1, i.validatePromise = null, i.errors = et, i.warnings = et, i.triggerMetaEvent(), h == null || h(), i.refresh();
            return;
          }
          break;
        case "remove": {
          if (m) {
            i.reRender();
            return;
          }
          break;
        }
        case "setField": {
          if (y) {
            var E = d.data;
            "touched" in E && (i.touched = E.touched), "validating" in E && !("originRCField" in E) && (i.validatePromise = E.validating ? Promise.resolve([]) : null), "errors" in E && (i.errors = E.errors || et), "warnings" in E && (i.warnings = E.warnings || et), i.dirty = !0, i.triggerMetaEvent(), i.reRender();
            return;
          }
          if (m && !w.length && uf(m, c, b, C, v, d)) {
            i.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var $ = p.map(ge);
          if ($.some(function(k) {
            return qr(d.relatedFields, k);
          })) {
            i.reRender();
            return;
          }
          break;
        }
        default:
          if (y || (!p.length || w.length || m) && uf(m, c, b, C, v, d)) {
            i.reRender();
            return;
          }
          break;
      }
      m === !0 && i.reRender();
    }, i.validateRules = function(c) {
      var u = i.getNamePath(), d = i.getValue(), f = Promise.resolve().then(function() {
        if (!i.mounted)
          return [];
        var m = i.props, g = m.validateFirst, p = g === void 0 ? !1 : g, h = m.messageVariables, b = c || {}, w = b.triggerName, C = i.getRules();
        w && (C = C.filter(function(y) {
          return y;
        }).filter(function(y) {
          var E = y.validateTrigger;
          if (!E)
            return !0;
          var $ = Ps(E);
          return $.includes(w);
        }));
        var v = iE(u, d, C, c, p, h);
        return v.catch(function(y) {
          return y;
        }).then(function() {
          var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : et;
          if (i.validatePromise === f) {
            var E;
            i.validatePromise = null;
            var $ = [], k = [];
            (E = y.forEach) === null || E === void 0 || E.call(y, function(A) {
              var P = A.rule.warningOnly, N = A.errors, T = N === void 0 ? et : N;
              P ? k.push.apply(k, ne(T)) : $.push.apply($, ne(T));
            }), i.errors = $, i.warnings = k, i.triggerMetaEvent(), i.reRender();
          }
        }), v;
      });
      return i.validatePromise = f, i.dirty = !0, i.errors = et, i.warnings = et, i.triggerMetaEvent(), i.reRender(), f;
    }, i.isFieldValidating = function() {
      return !!i.validatePromise;
    }, i.isFieldTouched = function() {
      return i.touched;
    }, i.isFieldDirty = function() {
      if (i.dirty || i.props.initialValue !== void 0)
        return !0;
      var c = i.props.fieldContext, u = c.getInternalHooks(_n), d = u.getInitialValue;
      return d(i.getNamePath()) !== void 0;
    }, i.getErrors = function() {
      return i.errors;
    }, i.getWarnings = function() {
      return i.warnings;
    }, i.isListField = function() {
      return i.props.isListField;
    }, i.isList = function() {
      return i.props.isList;
    }, i.isPreserve = function() {
      return i.props.preserve;
    }, i.getMeta = function() {
      i.prevValidating = i.isFieldValidating();
      var c = {
        touched: i.isFieldTouched(),
        validating: i.prevValidating,
        errors: i.errors,
        warnings: i.warnings,
        name: i.getNamePath()
      };
      return c;
    }, i.getOnlyChild = function(c) {
      if (typeof c == "function") {
        var u = i.getMeta();
        return ee(ee({}, i.getOnlyChild(c(i.getControlled(), u, i.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var d = Fs(c);
      return d.length !== 1 || !/* @__PURE__ */ L.isValidElement(d[0]) ? {
        child: d,
        isFunction: !1
      } : {
        child: d[0],
        isFunction: !1
      };
    }, i.getValue = function(c) {
      var u = i.props.fieldContext.getFieldsValue, d = i.getNamePath();
      return Xt(c || u(!0), d);
    }, i.getControlled = function() {
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = i.props, d = u.trigger, f = u.validateTrigger, m = u.getValueFromEvent, g = u.normalize, p = u.valuePropName, h = u.getValueProps, b = u.fieldContext, w = f !== void 0 ? f : b.validateTrigger, C = i.getNamePath(), v = b.getInternalHooks, y = b.getFieldsValue, E = v(_n), $ = E.dispatch, k = i.getValue(), A = h || function(O) {
        return Ve({}, p, O);
      }, P = c[d], N = ee(ee({}, c), A(k));
      N[d] = function() {
        i.touched = !0, i.dirty = !0, i.triggerMetaEvent();
        for (var O, _ = arguments.length, x = new Array(_), S = 0; S < _; S++)
          x[S] = arguments[S];
        m ? O = m.apply(void 0, x) : O = tE.apply(void 0, [p].concat(x)), g && (O = g(O, k, y(!0))), $({
          type: "updateValue",
          namePath: C,
          value: O
        }), P && P.apply(void 0, x);
      };
      var T = Ps(w || []);
      return T.forEach(function(O) {
        var _ = N[O];
        N[O] = function() {
          _ && _.apply(void 0, arguments);
          var x = i.props.rules;
          x && x.length && $({
            type: "validateField",
            namePath: C,
            triggerName: O
          });
        };
      }), N;
    }, r.fieldContext) {
      var a = r.fieldContext.getInternalHooks, o = a(_n), s = o.initEntityValue;
      s(u0(i));
    }
    return i;
  }
  return Vi(n, [{
    key: "componentDidMount",
    value: function() {
      var i = this.props, a = i.shouldUpdate, o = i.fieldContext;
      if (this.mounted = !0, o) {
        var s = o.getInternalHooks, c = s(_n), u = c.registerField;
        this.cancelRegisterFunc = u(this);
      }
      a === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      !this.mounted || this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var i = this.state.resetCount, a = this.props.children, o = this.getOnlyChild(a), s = o.child, c = o.isFunction, u;
      return c ? u = s : /* @__PURE__ */ L.isValidElement(s) ? u = /* @__PURE__ */ L.cloneElement(s, this.getControlled(s.props)) : (en(!s, "`children` of Field is not validate ReactElement."), u = s), /* @__PURE__ */ L.createElement(L.Fragment, {
        key: i
      }, u);
    }
  }]), n;
}(L.Component);
ql.contextType = Pn;
ql.defaultProps = {
  trigger: "onChange",
  valuePropName: "value"
};
function Kl(e10) {
  var t = e10.name, n = Wl(e10, sE), r = L.useContext(Pn), i = t !== void 0 ? ge(t) : void 0, a = "keep";
  return n.isListField || (a = "_".concat((i || []).join("_"))), /* @__PURE__ */ L.createElement(ql, Pa({
    key: a,
    name: i
  }, n, {
    fieldContext: r
  }));
}
var lE = /* @__PURE__ */ L.createContext(null), E0 = function(t) {
  var n = t.name, r = t.initialValue, i = t.children, a = t.rules, o = t.validateTrigger, s = L.useContext(Pn), c = L.useRef({
    keys: [],
    id: 0
  }), u = c.current, d = L.useMemo(function() {
    var p = ge(s.prefixName) || [];
    return [].concat(ne(p), ne(ge(n)));
  }, [s.prefixName, n]), f = L.useMemo(function() {
    return ee(ee({}, s), {}, {
      prefixName: d
    });
  }, [s, d]), m = L.useMemo(function() {
    return {
      getKey: function(h) {
        var b = d.length, w = h[b];
        return [u.keys[w], h.slice(b + 1)];
      }
    };
  }, [d]);
  if (typeof i != "function")
    return en(!1, "Form.List only accepts function as children."), null;
  var g = function(h, b, w) {
    var C = w.source;
    return C === "internal" ? !1 : h !== b;
  };
  return /* @__PURE__ */ L.createElement(lE.Provider, {
    value: m
  }, /* @__PURE__ */ L.createElement(Pn.Provider, {
    value: f
  }, /* @__PURE__ */ L.createElement(Kl, {
    name: [],
    shouldUpdate: g,
    rules: a,
    validateTrigger: o,
    initialValue: r,
    isList: !0
  }, function(p, h) {
    var b = p.value, w = b === void 0 ? [] : b, C = p.onChange, v = s.getFieldValue, y = function() {
      var A = v(d || []);
      return A || [];
    }, E = {
      add: function(A, P) {
        var N = y();
        P >= 0 && P <= N.length ? (u.keys = [].concat(ne(u.keys.slice(0, P)), [u.id], ne(u.keys.slice(P))), C([].concat(ne(N.slice(0, P)), [A], ne(N.slice(P))))) : (u.keys = [].concat(ne(u.keys), [u.id]), C([].concat(ne(N), [A]))), u.id += 1;
      },
      remove: function(A) {
        var P = y(), N = new Set(Array.isArray(A) ? A : [A]);
        N.size <= 0 || (u.keys = u.keys.filter(function(T, O) {
          return !N.has(O);
        }), C(P.filter(function(T, O) {
          return !N.has(O);
        })));
      },
      move: function(A, P) {
        if (A !== P) {
          var N = y();
          A < 0 || A >= N.length || P < 0 || P >= N.length || (u.keys = lf(u.keys, A, P), C(lf(N, A, P)));
        }
      }
    }, $ = w || [];
    return Array.isArray($) || ($ = []), i($.map(function(k, A) {
      var P = u.keys[A];
      return P === void 0 && (u.keys[A] = u.id, P = u.keys[A], u.id += 1), {
        name: A,
        key: P,
        isListField: !0
      };
    }), E, h);
  })));
};
function cE(e10, t) {
  var n = e10 == null ? null : typeof Symbol < "u" && e10[Symbol.iterator] || e10["@@iterator"];
  if (n != null) {
    var r, i, a, o, s = [], c = !0, u = !1;
    try {
      if (a = (n = n.call(e10)).next, t === 0) {
        if (Object(n) !== n)
          return;
        c = !1;
      } else
        for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0)
          ;
    } catch (d) {
      u = !0, i = d;
    } finally {
      try {
        if (!c && n.return != null && (o = n.return(), Object(o) !== o))
          return;
      } finally {
        if (u)
          throw i;
      }
    }
    return s;
  }
}
function ci(e10, t) {
  return v0(e10) || cE(e10, t) || Zl(e10, t) || g0();
}
function uE(e10) {
  var t = !1, n = e10.length, r = [];
  return e10.length ? new Promise(function(i, a) {
    e10.forEach(function(o, s) {
      o.catch(function(c) {
        return t = !0, c;
      }).then(function(c) {
        n -= 1, r[s] = c, !(n > 0) && (t && a(r), i(r));
      });
    });
  }) : Promise.resolve([]);
}
var C0 = "__@field_split__";
function Bo(e10) {
  return e10.map(function(t) {
    return "".concat(Xe(t), ":").concat(t);
  }).join(C0);
}
var Wn = /* @__PURE__ */ function() {
  function e10() {
    Di(this, e10), this.kvs = /* @__PURE__ */ new Map();
  }
  return Vi(e10, [{
    key: "set",
    value: function(n, r) {
      this.kvs.set(Bo(n), r);
    }
  }, {
    key: "get",
    value: function(n) {
      return this.kvs.get(Bo(n));
    }
  }, {
    key: "update",
    value: function(n, r) {
      var i = this.get(n), a = r(i);
      a ? this.set(n, a) : this.delete(n);
    }
  }, {
    key: "delete",
    value: function(n) {
      this.kvs.delete(Bo(n));
    }
  }, {
    key: "map",
    value: function(n) {
      return ne(this.kvs.entries()).map(function(r) {
        var i = ci(r, 2), a = i[0], o = i[1], s = a.split(C0);
        return n({
          key: s.map(function(c) {
            var u = c.match(/^([^:]*):(.*)$/), d = ci(u, 3), f = d[1], m = d[2];
            return f === "number" ? Number(m) : m;
          }),
          value: o
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var n = {};
      return this.map(function(r) {
        var i = r.key, a = r.value;
        return n[i.join(".")] = a, null;
      }), n;
    }
  }]), e10;
}(), fE = ["name", "errors"], dE = /* @__PURE__ */ Vi(function e(t) {
  var n = this;
  Di(this, e), this.formHooked = !1, this.forceRootUpdate = void 0, this.subscribable = !0, this.store = {}, this.fieldEntities = [], this.initialValues = {}, this.callbacks = {}, this.validateMessages = null, this.preserve = null, this.lastValidatePromise = null, this.getForm = function() {
    return {
      getFieldValue: n.getFieldValue,
      getFieldsValue: n.getFieldsValue,
      getFieldError: n.getFieldError,
      getFieldWarning: n.getFieldWarning,
      getFieldsError: n.getFieldsError,
      isFieldsTouched: n.isFieldsTouched,
      isFieldTouched: n.isFieldTouched,
      isFieldValidating: n.isFieldValidating,
      isFieldsValidating: n.isFieldsValidating,
      resetFields: n.resetFields,
      setFields: n.setFields,
      setFieldValue: n.setFieldValue,
      setFieldsValue: n.setFieldsValue,
      validateFields: n.validateFields,
      submit: n.submit,
      _init: !0,
      getInternalHooks: n.getInternalHooks
    };
  }, this.getInternalHooks = function(r) {
    return r === _n ? (n.formHooked = !0, {
      dispatch: n.dispatch,
      initEntityValue: n.initEntityValue,
      registerField: n.registerField,
      useSubscribe: n.useSubscribe,
      setInitialValues: n.setInitialValues,
      destroyForm: n.destroyForm,
      setCallbacks: n.setCallbacks,
      setValidateMessages: n.setValidateMessages,
      getFields: n.getFields,
      setPreserve: n.setPreserve,
      getInitialValue: n.getInitialValue,
      registerWatch: n.registerWatch
    }) : (en(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }, this.useSubscribe = function(r) {
    n.subscribable = r;
  }, this.prevWithoutPreserves = null, this.setInitialValues = function(r, i) {
    if (n.initialValues = r || {}, i) {
      var a, o = da({}, r, n.store);
      (a = n.prevWithoutPreserves) === null || a === void 0 || a.map(function(s) {
        var c = s.key;
        o = Kt(o, c, Xt(r, c));
      }), n.prevWithoutPreserves = null, n.updateStore(o);
    }
  }, this.destroyForm = function() {
    var r = new Wn();
    n.getFieldEntities(!0).forEach(function(i) {
      n.isMergedPreserve(i.isPreserve()) || r.set(i.getNamePath(), !0);
    }), n.prevWithoutPreserves = r;
  }, this.getInitialValue = function(r) {
    var i = Xt(n.initialValues, r);
    return r.length ? Eo(i) : i;
  }, this.setCallbacks = function(r) {
    n.callbacks = r;
  }, this.setValidateMessages = function(r) {
    n.validateMessages = r;
  }, this.setPreserve = function(r) {
    n.preserve = r;
  }, this.watchList = [], this.registerWatch = function(r) {
    return n.watchList.push(r), function() {
      n.watchList = n.watchList.filter(function(i) {
        return i !== r;
      });
    };
  }, this.notifyWatch = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (n.watchList.length) {
      var i = n.getFieldsValue();
      n.watchList.forEach(function(a) {
        a(i, r);
      });
    }
  }, this.timeoutId = null, this.warningUnhooked = function() {
  }, this.updateStore = function(r) {
    n.store = r;
  }, this.getFieldEntities = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return r ? n.fieldEntities.filter(function(i) {
      return i.getNamePath().length;
    }) : n.fieldEntities;
  }, this.getFieldsMap = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, i = new Wn();
    return n.getFieldEntities(r).forEach(function(a) {
      var o = a.getNamePath();
      i.set(o, a);
    }), i;
  }, this.getFieldEntitiesForNamePathList = function(r) {
    if (!r)
      return n.getFieldEntities(!0);
    var i = n.getFieldsMap(!0);
    return r.map(function(a) {
      var o = ge(a);
      return i.get(o) || {
        INVALIDATE_NAME_PATH: ge(a)
      };
    });
  }, this.getFieldsValue = function(r, i) {
    if (n.warningUnhooked(), r === !0 && !i)
      return n.store;
    var a = n.getFieldEntitiesForNamePathList(Array.isArray(r) ? r : null), o = [];
    return a.forEach(function(s) {
      var c, u = "INVALIDATE_NAME_PATH" in s ? s.INVALIDATE_NAME_PATH : s.getNamePath();
      if (!(!r && ((c = s.isListField) === null || c === void 0 ? void 0 : c.call(s))))
        if (!i)
          o.push(u);
        else {
          var d = "getMeta" in s ? s.getMeta() : null;
          i(d) && o.push(u);
        }
    }), of(n.store, o.map(ge));
  }, this.getFieldValue = function(r) {
    n.warningUnhooked();
    var i = ge(r);
    return Xt(n.store, i);
  }, this.getFieldsError = function(r) {
    n.warningUnhooked();
    var i = n.getFieldEntitiesForNamePathList(r);
    return i.map(function(a, o) {
      return a && !("INVALIDATE_NAME_PATH" in a) ? {
        name: a.getNamePath(),
        errors: a.getErrors(),
        warnings: a.getWarnings()
      } : {
        name: ge(r[o]),
        errors: [],
        warnings: []
      };
    });
  }, this.getFieldError = function(r) {
    n.warningUnhooked();
    var i = ge(r), a = n.getFieldsError([i])[0];
    return a.errors;
  }, this.getFieldWarning = function(r) {
    n.warningUnhooked();
    var i = ge(r), a = n.getFieldsError([i])[0];
    return a.warnings;
  }, this.isFieldsTouched = function() {
    n.warningUnhooked();
    for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
      i[a] = arguments[a];
    var o = i[0], s = i[1], c, u = !1;
    i.length === 0 ? c = null : i.length === 1 ? Array.isArray(o) ? (c = o.map(ge), u = !1) : (c = null, u = o) : (c = o.map(ge), u = s);
    var d = n.getFieldEntities(!0), f = function(b) {
      return b.isFieldTouched();
    };
    if (!c)
      return u ? d.every(f) : d.some(f);
    var m = new Wn();
    c.forEach(function(h) {
      m.set(h, []);
    }), d.forEach(function(h) {
      var b = h.getNamePath();
      c.forEach(function(w) {
        w.every(function(C, v) {
          return b[v] === C;
        }) && m.update(w, function(C) {
          return [].concat(ne(C), [h]);
        });
      });
    });
    var g = function(b) {
      return b.some(f);
    }, p = m.map(function(h) {
      var b = h.value;
      return b;
    });
    return u ? p.every(g) : p.some(g);
  }, this.isFieldTouched = function(r) {
    return n.warningUnhooked(), n.isFieldsTouched([r]);
  }, this.isFieldsValidating = function(r) {
    n.warningUnhooked();
    var i = n.getFieldEntities();
    if (!r)
      return i.some(function(o) {
        return o.isFieldValidating();
      });
    var a = r.map(ge);
    return i.some(function(o) {
      var s = o.getNamePath();
      return qr(a, s) && o.isFieldValidating();
    });
  }, this.isFieldValidating = function(r) {
    return n.warningUnhooked(), n.isFieldsValidating([r]);
  }, this.resetWithFieldInitialValue = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = new Wn(), a = n.getFieldEntities(!0);
    a.forEach(function(c) {
      var u = c.props.initialValue, d = c.getNamePath();
      if (u !== void 0) {
        var f = i.get(d) || /* @__PURE__ */ new Set();
        f.add({
          entity: c,
          value: u
        }), i.set(d, f);
      }
    });
    var o = function(u) {
      u.forEach(function(d) {
        var f = d.props.initialValue;
        if (f !== void 0) {
          var m = d.getNamePath(), g = n.getInitialValue(m);
          if (g !== void 0)
            en(!1, "Form already set 'initialValues' with path '".concat(m.join("."), "'. Field can not overwrite it."));
          else {
            var p = i.get(m);
            if (p && p.size > 1)
              en(!1, "Multiple Field with path '".concat(m.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (p) {
              var h = n.getFieldValue(m);
              (!r.skipExist || h === void 0) && n.updateStore(Kt(n.store, m, ne(p)[0].value));
            }
          }
        }
      });
    }, s;
    r.entities ? s = r.entities : r.namePathList ? (s = [], r.namePathList.forEach(function(c) {
      var u = i.get(c);
      if (u) {
        var d;
        (d = s).push.apply(d, ne(ne(u).map(function(f) {
          return f.entity;
        })));
      }
    })) : s = a, o(s);
  }, this.resetFields = function(r) {
    n.warningUnhooked();
    var i = n.store;
    if (!r) {
      n.updateStore(da({}, n.initialValues)), n.resetWithFieldInitialValue(), n.notifyObservers(i, null, {
        type: "reset"
      }), n.notifyWatch();
      return;
    }
    var a = r.map(ge);
    a.forEach(function(o) {
      var s = n.getInitialValue(o);
      n.updateStore(Kt(n.store, o, s));
    }), n.resetWithFieldInitialValue({
      namePathList: a
    }), n.notifyObservers(i, a, {
      type: "reset"
    }), n.notifyWatch(a);
  }, this.setFields = function(r) {
    n.warningUnhooked();
    var i = n.store, a = [];
    r.forEach(function(o) {
      var s = o.name;
      o.errors;
      var c = Wl(o, fE), u = ge(s);
      a.push(u), "value" in c && n.updateStore(Kt(n.store, u, c.value)), n.notifyObservers(i, [u], {
        type: "setField",
        data: o
      });
    }), n.notifyWatch(a);
  }, this.getFields = function() {
    var r = n.getFieldEntities(!0), i = r.map(function(a) {
      var o = a.getNamePath(), s = a.getMeta(), c = ee(ee({}, s), {}, {
        name: o,
        value: n.getFieldValue(o)
      });
      return Object.defineProperty(c, "originRCField", {
        value: !0
      }), c;
    });
    return i;
  }, this.initEntityValue = function(r) {
    var i = r.props.initialValue;
    if (i !== void 0) {
      var a = r.getNamePath(), o = Xt(n.store, a);
      o === void 0 && n.updateStore(Kt(n.store, a, i));
    }
  }, this.isMergedPreserve = function(r) {
    var i = r !== void 0 ? r : n.preserve;
    return i ?? !0;
  }, this.registerField = function(r) {
    n.fieldEntities.push(r);
    var i = r.getNamePath();
    if (n.notifyWatch([i]), r.props.initialValue !== void 0) {
      var a = n.store;
      n.resetWithFieldInitialValue({
        entities: [r],
        skipExist: !0
      }), n.notifyObservers(a, [r.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(o, s) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (n.fieldEntities = n.fieldEntities.filter(function(f) {
        return f !== r;
      }), !n.isMergedPreserve(s) && (!o || c.length > 1)) {
        var u = o ? void 0 : n.getInitialValue(i);
        if (i.length && n.getFieldValue(i) !== u && n.fieldEntities.every(function(f) {
          return !w0(f.getNamePath(), i);
        })) {
          var d = n.store;
          n.updateStore(Kt(d, i, u, !0)), n.notifyObservers(d, [i], {
            type: "remove"
          }), n.triggerDependenciesUpdate(d, i);
        }
      }
      n.notifyWatch([i]);
    };
  }, this.dispatch = function(r) {
    switch (r.type) {
      case "updateValue": {
        var i = r.namePath, a = r.value;
        n.updateValue(i, a);
        break;
      }
      case "validateField": {
        var o = r.namePath, s = r.triggerName;
        n.validateFields([o], {
          triggerName: s
        });
        break;
      }
    }
  }, this.notifyObservers = function(r, i, a) {
    if (n.subscribable) {
      var o = ee(ee({}, a), {}, {
        store: n.getFieldsValue(!0)
      });
      n.getFieldEntities().forEach(function(s) {
        var c = s.onStoreChange;
        c(r, i, o);
      });
    } else
      n.forceRootUpdate();
  }, this.triggerDependenciesUpdate = function(r, i) {
    var a = n.getDependencyChildrenFields(i);
    return a.length && n.validateFields(a), n.notifyObservers(r, a, {
      type: "dependenciesUpdate",
      relatedFields: [i].concat(ne(a))
    }), a;
  }, this.updateValue = function(r, i) {
    var a = ge(r), o = n.store;
    n.updateStore(Kt(n.store, a, i)), n.notifyObservers(o, [a], {
      type: "valueUpdate",
      source: "internal"
    }), n.notifyWatch([a]);
    var s = n.triggerDependenciesUpdate(o, a), c = n.callbacks.onValuesChange;
    if (c) {
      var u = of(n.store, [a]);
      c(u, n.getFieldsValue());
    }
    n.triggerOnFieldsChange([a].concat(ne(s)));
  }, this.setFieldsValue = function(r) {
    n.warningUnhooked();
    var i = n.store;
    if (r) {
      var a = da(n.store, r);
      n.updateStore(a);
    }
    n.notifyObservers(i, null, {
      type: "valueUpdate",
      source: "external"
    }), n.notifyWatch();
  }, this.setFieldValue = function(r, i) {
    n.setFields([{
      name: r,
      value: i
    }]);
  }, this.getDependencyChildrenFields = function(r) {
    var i = /* @__PURE__ */ new Set(), a = [], o = new Wn();
    n.getFieldEntities().forEach(function(c) {
      var u = c.props.dependencies;
      (u || []).forEach(function(d) {
        var f = ge(d);
        o.update(f, function() {
          var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return m.add(c), m;
        });
      });
    });
    var s = function c(u) {
      var d = o.get(u) || /* @__PURE__ */ new Set();
      d.forEach(function(f) {
        if (!i.has(f)) {
          i.add(f);
          var m = f.getNamePath();
          f.isFieldDirty() && m.length && (a.push(m), c(m));
        }
      });
    };
    return s(r), a;
  }, this.triggerOnFieldsChange = function(r, i) {
    var a = n.callbacks.onFieldsChange;
    if (a) {
      var o = n.getFields();
      if (i) {
        var s = new Wn();
        i.forEach(function(u) {
          var d = u.name, f = u.errors;
          s.set(d, f);
        }), o.forEach(function(u) {
          u.errors = s.get(u.name) || u.errors;
        });
      }
      var c = o.filter(function(u) {
        var d = u.name;
        return qr(r, d);
      });
      a(c, o);
    }
  }, this.validateFields = function(r, i) {
    n.warningUnhooked();
    var a = !!r, o = a ? r.map(ge) : [], s = [];
    n.getFieldEntities(!0).forEach(function(d) {
      if (a || o.push(d.getNamePath()), (i == null ? void 0 : i.recursive) && a) {
        var f = d.getNamePath();
        f.every(function(p, h) {
          return r[h] === p || r[h] === void 0;
        }) && o.push(f);
      }
      if (!(!d.props.rules || !d.props.rules.length)) {
        var m = d.getNamePath();
        if (!a || qr(o, m)) {
          var g = d.validateRules(ee({
            validateMessages: ee(ee({}, h0), n.validateMessages)
          }, i));
          s.push(g.then(function() {
            return {
              name: m,
              errors: [],
              warnings: []
            };
          }).catch(function(p) {
            var h, b = [], w = [];
            return (h = p.forEach) === null || h === void 0 || h.call(p, function(C) {
              var v = C.rule.warningOnly, y = C.errors;
              v ? w.push.apply(w, ne(y)) : b.push.apply(b, ne(y));
            }), b.length ? Promise.reject({
              name: m,
              errors: b,
              warnings: w
            }) : {
              name: m,
              errors: b,
              warnings: w
            };
          }));
        }
      }
    });
    var c = uE(s);
    n.lastValidatePromise = c, c.catch(function(d) {
      return d;
    }).then(function(d) {
      var f = d.map(function(m) {
        var g = m.name;
        return g;
      });
      n.notifyObservers(n.store, f, {
        type: "validateFinish"
      }), n.triggerOnFieldsChange(f, d);
    });
    var u = c.then(function() {
      return n.lastValidatePromise === c ? Promise.resolve(n.getFieldsValue(o)) : Promise.reject([]);
    }).catch(function(d) {
      var f = d.filter(function(m) {
        return m && m.errors.length;
      });
      return Promise.reject({
        values: n.getFieldsValue(o),
        errorFields: f,
        outOfDate: n.lastValidatePromise !== c
      });
    });
    return u.catch(function(d) {
      return d;
    }), u;
  }, this.submit = function() {
    n.warningUnhooked(), n.validateFields().then(function(r) {
      var i = n.callbacks.onFinish;
      if (i)
        try {
          i(r);
        } catch (a) {
          console.error(a);
        }
    }).catch(function(r) {
      var i = n.callbacks.onFinishFailed;
      i && i(r);
    });
  }, this.forceRootUpdate = t;
});
function Gl(e10) {
  var t = L.useRef(), n = L.useState({}), r = ci(n, 2), i = r[1];
  if (!t.current)
    if (e10)
      t.current = e10;
    else {
      var a = function() {
        i({});
      }, o = new dE(a);
      t.current = o.getForm();
    }
  return [t.current];
}
var js = /* @__PURE__ */ L.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), mE = function(t) {
  var n = t.validateMessages, r = t.onFormChange, i = t.onFormFinish, a = t.children, o = L.useContext(js), s = L.useRef({});
  return /* @__PURE__ */ L.createElement(js.Provider, {
    value: ee(ee({}, o), {}, {
      validateMessages: ee(ee({}, o.validateMessages), n),
      triggerFormChange: function(u, d) {
        r && r(u, {
          changedFields: d,
          forms: s.current
        }), o.triggerFormChange(u, d);
      },
      triggerFormFinish: function(u, d) {
        i && i(u, {
          values: d,
          forms: s.current
        }), o.triggerFormFinish(u, d);
      },
      registerForm: function(u, d) {
        u && (s.current = ee(ee({}, s.current), {}, Ve({}, u, d))), o.registerForm(u, d);
      },
      unregisterForm: function(u) {
        var d = ee({}, s.current);
        delete d[u], s.current = d, o.unregisterForm(u);
      }
    })
  }, a);
}, hE = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"], pE = function(t, n) {
  var r = t.name, i = t.initialValues, a = t.fields, o = t.form, s = t.preserve, c = t.children, u = t.component, d = u === void 0 ? "form" : u, f = t.validateMessages, m = t.validateTrigger, g = m === void 0 ? "onChange" : m, p = t.onValuesChange, h = t.onFieldsChange, b = t.onFinish, w = t.onFinishFailed, C = Wl(t, hE), v = L.useContext(js), y = Gl(o), E = ci(y, 1), $ = E[0], k = $.getInternalHooks(_n), A = k.useSubscribe, P = k.setInitialValues, N = k.setCallbacks, T = k.setValidateMessages, O = k.setPreserve, _ = k.destroyForm;
  L.useImperativeHandle(n, function() {
    return $;
  }), L.useEffect(function() {
    return v.registerForm(r, $), function() {
      v.unregisterForm(r);
    };
  }, [v, $, r]), T(ee(ee({}, v.validateMessages), f)), N({
    onValuesChange: p,
    onFieldsChange: function(H) {
      if (v.triggerFormChange(r, H), h) {
        for (var U = arguments.length, X = new Array(U > 1 ? U - 1 : 0), K = 1; K < U; K++)
          X[K - 1] = arguments[K];
        h.apply(void 0, [H].concat(X));
      }
    },
    onFinish: function(H) {
      v.triggerFormFinish(r, H), b && b(H);
    },
    onFinishFailed: w
  }), O(s);
  var x = L.useRef(null);
  P(i, !x.current), x.current || (x.current = !0), L.useEffect(
    function() {
      return _;
    },
    []
  );
  var S, M = typeof c == "function";
  if (M) {
    var F = $.getFieldsValue(!0);
    S = c(F, $);
  } else
    S = c;
  A(!M);
  var R = L.useRef();
  L.useEffect(function() {
    eE(R.current || [], a || []) || $.setFields(a || []), R.current = a;
  }, [a, $]);
  var I = L.useMemo(function() {
    return ee(ee({}, $), {}, {
      validateTrigger: g
    });
  }, [$, g]), W = /* @__PURE__ */ L.createElement(Pn.Provider, {
    value: I
  }, S);
  return d === !1 ? W : /* @__PURE__ */ L.createElement(d, Pa({}, C, {
    onSubmit: function(H) {
      H.preventDefault(), H.stopPropagation(), $.submit();
    },
    onReset: function(H) {
      var U;
      H.preventDefault(), $.resetFields(), (U = C.onReset) === null || U === void 0 || U.call(C, H);
    }
  }), W);
};
function ff(e10) {
  try {
    return JSON.stringify(e10);
  } catch {
    return Math.random();
  }
}
function Yl() {
  for (var e10 = arguments.length, t = new Array(e10), n = 0; n < e10; n++)
    t[n] = arguments[n];
  var r = t[0], i = r === void 0 ? [] : r, a = t[1], o = (0, import_react2.useState)(), s = ci(o, 2), c = s[0], u = s[1], d = (0, import_react2.useMemo)(function() {
    return ff(c);
  }, [c]), f = (0, import_react2.useRef)(d);
  f.current = d;
  var m = (0, import_react2.useContext)(Pn), g = a || m, p = g && g._init, h = ge(i), b = (0, import_react2.useRef)(h);
  return b.current = h, (0, import_react2.useEffect)(
    function() {
      if (p) {
        var w = g.getFieldsValue, C = g.getInternalHooks, v = C(_n), y = v.registerWatch, E = y(function(k) {
          var A = Xt(k, b.current), P = ff(A);
          f.current !== P && (f.current = P, u(A));
        }), $ = Xt(w(), b.current);
        return u($), E;
      }
    },
    [p]
  ), c;
}
var vE = /* @__PURE__ */ L.forwardRef(pE), Cr = vE;
Cr.FormProvider = mE;
Cr.Field = Kl;
Cr.List = E0;
Cr.useForm = Gl;
Cr.useWatch = Yl;
var $0 = {
  name: void 0,
  hasFeedback: !0,
  layout: "vertical",
  requiredMarkStyle: "asterisk",
  disabled: !1
}, Xl = import_react2.default.createContext($0), df = import_react2.default.createContext(null), x0 = () => null, gE = el, yE = hi;
function bE(e10, t, n) {
  (n !== void 0 && !yE(e10[t], n) || n === void 0 && !(t in e10)) && gE(e10, t, n);
}
var _0 = bE;
function wE(e10) {
  return function(t, n, r) {
    for (var i = -1, a = Object(t), o = r(t), s = o.length; s--; ) {
      var c = o[e10 ? s : ++i];
      if (n(a[c], c, a) === !1)
        break;
    }
    return t;
  };
}
var EE = wE, CE = EE, $E = CE(), xE = $E, Bs = { exports: {} };
(function(e10, t) {
  var n = ht, r = t && !t.nodeType && t, i = r && !0 && e10 && !e10.nodeType && e10, a = i && i.exports === r, o = a ? n.Buffer : void 0, s = o ? o.allocUnsafe : void 0;
  function c(u, d) {
    if (d)
      return u.slice();
    var f = u.length, m = s ? s(f) : new u.constructor(f);
    return u.copy(m), m;
  }
  e10.exports = c;
})(Bs, Bs.exports);
var mf = fd;
function _E(e10) {
  var t = new e10.constructor(e10.byteLength);
  return new mf(t).set(new mf(e10)), t;
}
var kE = _E, OE = kE;
function SE(e10, t) {
  var n = t ? OE(e10.buffer) : e10.buffer;
  return new e10.constructor(n, e10.byteOffset, e10.length);
}
var FE = SE;
function PE(e10, t) {
  var n = -1, r = e10.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e10[n];
  return t;
}
var NE = PE, AE = kt, hf = Object.create, TE = function() {
  function e10() {
  }
  return function(t) {
    if (!AE(t))
      return {};
    if (hf)
      return hf(t);
    e10.prototype = t;
    var n = new e10();
    return e10.prototype = void 0, n;
  };
}(), RE = TE, ME = td, IE = ME(Object.getPrototypeOf, Object), k0 = IE, LE = RE, DE = k0, VE = nl;
function jE(e10) {
  return typeof e10.constructor == "function" && !VE(e10) ? LE(DE(e10)) : {};
}
var BE = jE, WE = La, ZE = Tn;
function HE(e10) {
  return ZE(e10) && WE(e10);
}
var zE = HE, UE = lr, qE = k0, KE = Tn, GE = "[object Object]", YE = Function.prototype, XE = Object.prototype, O0 = YE.toString, QE = XE.hasOwnProperty, JE = O0.call(Object);
function eC(e10) {
  if (!KE(e10) || UE(e10) != GE)
    return !1;
  var t = qE(e10);
  if (t === null)
    return !0;
  var n = QE.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && O0.call(n) == JE;
}
var tC = eC;
function nC(e10, t) {
  if (!(t === "constructor" && typeof e10[t] == "function") && t != "__proto__")
    return e10[t];
}
var S0 = nC;
function rC(e10) {
  var t = [];
  if (e10 != null)
    for (var n in Object(e10))
      t.push(n);
  return t;
}
var iC = rC, aC = kt, oC = nl, sC = iC, lC = Object.prototype, cC = lC.hasOwnProperty;
function uC(e10) {
  if (!aC(e10))
    return sC(e10);
  var t = oC(e10), n = [];
  for (var r in e10)
    r == "constructor" && (t || !cC.call(e10, r)) || n.push(r);
  return n;
}
var fC = uC, dC = ed, mC = fC, hC = La;
function pC(e10) {
  return hC(e10) ? dC(e10, !0) : mC(e10);
}
var F0 = pC, vC = qf, gC = F0;
function yC(e10) {
  return vC(e10, gC(e10));
}
var bC = yC, pf = _0, wC = Bs.exports, EC = FE, CC = NE, $C = BE, vf = Jf, gf = Da, xC = zE, _C = Xr.exports, kC = Js, OC = kt, SC = tC, FC = tl, yf = S0, PC = bC;
function NC(e10, t, n, r, i, a, o) {
  var s = yf(e10, n), c = yf(t, n), u = o.get(c);
  if (u) {
    pf(e10, n, u);
    return;
  }
  var d = a ? a(s, c, n + "", e10, t, o) : void 0, f = d === void 0;
  if (f) {
    var m = gf(c), g = !m && _C(c), p = !m && !g && FC(c);
    d = c, m || g || p ? gf(s) ? d = s : xC(s) ? d = CC(s) : g ? (f = !1, d = wC(c, !0)) : p ? (f = !1, d = EC(c, !0)) : d = [] : SC(c) || vf(c) ? (d = s, vf(s) ? d = PC(s) : (!OC(s) || kC(s)) && (d = $C(c))) : f = !1;
  }
  f && (o.set(c, d), i(d, c, r, a, o), o.delete(c)), pf(e10, n, d);
}
var AC = NC, TC = cd, RC = _0, MC = xE, IC = AC, LC = kt, DC = F0, VC = S0;
function P0(e10, t, n, r, i) {
  e10 !== t && MC(t, function(a, o) {
    if (i || (i = new TC()), LC(a))
      IC(e10, t, o, n, P0, r, i);
    else {
      var s = r ? r(VC(e10, o), a, o + "", e10, t, i) : void 0;
      s === void 0 && (s = a), RC(e10, o, s);
    }
  }, DC);
}
var jC = P0, BC = jC, WC = Xf, ZC = WC(function(e10, t, n) {
  BC(e10, t, n);
}), HC = ZC, N0 = (e10) => import_react2.default.createElement(E0, {
  name: e10.name,
  initialValue: e10.initialValue
}, (t, n) => {
  let r = t.map((a) => ({
    index: a.name,
    key: a.key
  })), i = e10.children(r, n).map((a, o) => {
    var s;
    return import_react2.default.createElement($t, {
      key: r[o].key,
      mode: "card",
      header: (s = e10.renderHeader) === null || s === void 0 ? void 0 : s.call(e10, r[o], n)
    }, a);
  });
  return e10.renderAdd && i.push(import_react2.default.createElement($t, {
    key: "add",
    mode: "card"
  }, import_react2.default.createElement($t.Item, {
    className: "adm-form-list-operation",
    onClick: () => {
      e10.onAdd ? e10.onAdd(n) : n.add();
    },
    arrow: !1
  }, e10.renderAdd()))), import_react2.default.createElement(import_react2.default.Fragment, null, i);
}), bf = "adm-form", zC = $0, UC = (0, import_react2.forwardRef)((e10, t) => {
  let n = Z(zC, e10), {
    className: r,
    style: i,
    hasFeedback: a,
    children: o,
    layout: s,
    footer: c,
    mode: u,
    disabled: d,
    requiredMarkStyle: f
  } = n, m = di(n, ["className", "style", "hasFeedback", "children", "layout", "footer", "mode", "disabled", "requiredMarkStyle"]), {
    locale: g
  } = $e(), p = (0, import_react2.useMemo)(() => HC({}, g.Form.defaultValidateMessages, m.validateMessages), [g.Form.defaultValidateMessages, m.validateMessages]), h = [], b = null, w = [], C = 0;
  function v() {
    w.length !== 0 && (C += 1, h.push(import_react2.default.createElement($t, {
      header: b,
      key: C,
      mode: u
    }, w)), w = []);
  }
  return sn(n.children, (y) => {
    if (import_react2.default.isValidElement(y)) {
      if (y.type === x0) {
        v(), b = y.props.children;
        return;
      }
      if (y.type === N0) {
        v(), h.push(y);
        return;
      }
    }
    w.push(y);
  }), v(), import_react2.default.createElement(Cr, Object.assign({
    className: V(bf, r),
    style: i,
    ref: t
  }, m, {
    validateMessages: p
  }), import_react2.default.createElement(Xl.Provider, {
    value: {
      name: m.name,
      hasFeedback: a,
      layout: s,
      requiredMarkStyle: f,
      disabled: d
    }
  }, h), c && import_react2.default.createElement("div", {
    className: `${bf}-footer`
  }, c));
}), ui = {}, Bi = { exports: {} }, A0 = { exports: {} };
(function(e10) {
  function t(n) {
    return e10.exports = t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
      return typeof r;
    } : function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, e10.exports.__esModule = !0, e10.exports.default = e10.exports, t(n);
  }
  e10.exports = t, e10.exports.__esModule = !0, e10.exports.default = e10.exports;
})(A0);
(function(e10) {
  var t = A0.exports.default;
  function n(i) {
    if (typeof WeakMap != "function")
      return null;
    var a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap();
    return (n = function(c) {
      return c ? o : a;
    })(i);
  }
  function r(i, a) {
    if (!a && i && i.__esModule)
      return i;
    if (i === null || t(i) !== "object" && typeof i != "function")
      return {
        default: i
      };
    var o = n(a);
    if (o && o.has(i))
      return o.get(i);
    var s = {}, c = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in i)
      if (u !== "default" && Object.prototype.hasOwnProperty.call(i, u)) {
        var d = c ? Object.getOwnPropertyDescriptor(i, u) : null;
        d && (d.get || d.set) ? Object.defineProperty(s, u, d) : s[u] = i[u];
      }
    return s.default = i, o && o.set(i, s), s;
  }
  e10.exports = r, e10.exports.__esModule = !0, e10.exports.default = e10.exports;
})(Bi);
var Wi = { exports: {} };
(function(e10) {
  function t(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  e10.exports = t, e10.exports.__esModule = !0, e10.exports.default = e10.exports;
})(Wi);
var Ot = {};
Object.defineProperty(Ot, "__esModule", {
  value: !0
});
Ot.call = Ql;
Ot.default = void 0;
Ot.note = R0;
Ot.noteOnce = KC;
Ot.resetWarned = qC;
Ot.warning = T0;
Ot.warningOnce = M0;
var Ws = {};
function T0(e10, t) {
}
function R0(e10, t) {
}
function qC() {
  Ws = {};
}
function Ql(e10, t, n) {
  !t && !Ws[n] && (e10(!1, n), Ws[n] = !0);
}
function M0(e10, t) {
  Ql(T0, e10, t);
}
function KC(e10, t) {
  Ql(R0, e10, t);
}
var GC = M0;
Ot.default = GC;
var YC = Bi.exports.default, XC = Wi.exports.default;
Object.defineProperty(ui, "__esModule", {
  value: !0
});
var I0 = ui.default = ui.HOOK_MARK = void 0, QC = XC(Ot), JC = YC(import_react2.default), e$ = "RC_FORM_INTERNAL_HOOKS";
ui.HOOK_MARK = e$;
var se = function() {
  (0, QC.default)(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, t$ = /* @__PURE__ */ JC.createContext({
  getFieldValue: se,
  getFieldsValue: se,
  getFieldError: se,
  getFieldWarning: se,
  getFieldsError: se,
  isFieldsTouched: se,
  isFieldTouched: se,
  isFieldValidating: se,
  isFieldsValidating: se,
  resetFields: se,
  setFields: se,
  setFieldValue: se,
  setFieldsValue: se,
  validateFields: se,
  submit: se,
  getInternalHooks: function() {
    return se(), {
      dispatch: se,
      initEntityValue: se,
      registerField: se,
      useSubscribe: se,
      setInitialValues: se,
      destroyForm: se,
      setCallbacks: se,
      registerWatch: se,
      getFields: se,
      setValidateMessages: se,
      setPreserve: se,
      getInitialValue: se
    };
  }
}), n$ = t$;
I0 = ui.default = n$;
function Wo(e10) {
  return e10 === void 0 || e10 === !1 ? [] : Array.isArray(e10) ? e10 : [e10];
}
function r$(e10) {
  let t = e10.prototype;
  return !!(t && t.isReactComponent);
}
function i$(e10) {
  return typeof e10 == "function" && !r$(e10) && e10.defaultProps === void 0;
}
function L0(e10) {
  return Oa.exports.isFragment(e10) ? !1 : Oa.exports.isMemo(e10) ? L0(e10.type) : !i$(e10.type);
}
var a$ = (0, import_react2.memo)((e10) => j(e10, import_react2.default.createElement("svg", {
  viewBox: "0 0 30 16"
}, import_react2.default.createElement("g", {
  fill: "currentColor"
}, import_react2.default.createElement("path", {
  d: "M0,0 L30,0 L18.07289,14.312538 C16.65863,16.009645 14.13637,16.238942 12.43926,14.824685 C12.25341,14.669808 12.08199,14.49839 11.92711,14.312538 L0,0 L0,0 Z"
})))));
function Zi(e10) {
  return e10.split("-")[1];
}
function Jl(e10) {
  return e10 === "y" ? "height" : "width";
}
function rn(e10) {
  return e10.split("-")[0];
}
function $r(e10) {
  return ["top", "bottom"].includes(rn(e10)) ? "x" : "y";
}
function wf(e10, t, n) {
  let {
    reference: r,
    floating: i
  } = e10, a = r.x + r.width / 2 - i.width / 2, o = r.y + r.height / 2 - i.height / 2, s = $r(t), c = Jl(s), u = r[c] / 2 - i[c] / 2, d = rn(t), f = s === "x", m;
  switch (d) {
    case "top":
      m = {
        x: a,
        y: r.y - i.height
      };
      break;
    case "bottom":
      m = {
        x: a,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: o
      };
      break;
    case "left":
      m = {
        x: r.x - i.width,
        y: o
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (Zi(t)) {
    case "start":
      m[s] -= u * (n && f ? -1 : 1);
      break;
    case "end":
      m[s] += u * (n && f ? -1 : 1);
      break;
  }
  return m;
}
var o$ = async (e10, t, n) => {
  let {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: a = [],
    platform: o
  } = n, s = a.filter(Boolean), c = await (o.isRTL == null ? void 0 : o.isRTL(t)), u = await o.getElementRects({
    reference: e10,
    floating: t,
    strategy: i
  }), {
    x: d,
    y: f
  } = wf(u, r, c), m = r, g = {}, p = 0;
  for (let h = 0; h < s.length; h++) {
    let {
      name: b,
      fn: w
    } = s[h], {
      x: C,
      y: v,
      data: y,
      reset: E
    } = await w({
      x: d,
      y: f,
      initialPlacement: r,
      placement: m,
      strategy: i,
      middlewareData: g,
      rects: u,
      platform: o,
      elements: {
        reference: e10,
        floating: t
      }
    });
    if (d = C ?? d, f = v ?? f, g = {
      ...g,
      [b]: {
        ...g[b],
        ...y
      }
    }, E && p <= 50) {
      p++, typeof E == "object" && (E.placement && (m = E.placement), E.rects && (u = E.rects === !0 ? await o.getElementRects({
        reference: e10,
        floating: t,
        strategy: i
      }) : E.rects), {
        x: d,
        y: f
      } = wf(u, m, c)), h = -1;
      continue;
    }
  }
  return {
    x: d,
    y: f,
    placement: m,
    strategy: i,
    middlewareData: g
  };
};
function s$(e10) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e10
  };
}
function D0(e10) {
  return typeof e10 != "number" ? s$(e10) : {
    top: e10,
    right: e10,
    bottom: e10,
    left: e10
  };
}
function Aa(e10) {
  return {
    ...e10,
    top: e10.y,
    left: e10.x,
    right: e10.x + e10.width,
    bottom: e10.y + e10.height
  };
}
async function Ta(e10, t) {
  var n;
  t === void 0 && (t = {});
  let {
    x: r,
    y: i,
    platform: a,
    rects: o,
    elements: s,
    strategy: c
  } = e10, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: g = 0
  } = t, p = D0(g), b = s[m ? f === "floating" ? "reference" : "floating" : f], w = Aa(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(b))) == null || n ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: c
  })), C = f === "floating" ? {
    ...o.floating,
    x: r,
    y: i
  } : o.reference, v = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), y = await (a.isElement == null ? void 0 : a.isElement(v)) ? await (a.getScale == null ? void 0 : a.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = Aa(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: C,
    offsetParent: v,
    strategy: c
  }) : C);
  return {
    top: (w.top - E.top + p.top) / y.y,
    bottom: (E.bottom - w.bottom + p.bottom) / y.y,
    left: (w.left - E.left + p.left) / y.x,
    right: (E.right - w.right + p.right) / y.x
  };
}
var l$ = Math.min, c$ = Math.max;
function Zs(e10, t, n) {
  return c$(e10, l$(t, n));
}
var u$ = (e10) => ({
  name: "arrow",
  options: e10,
  async fn(t) {
    let {
      element: n,
      padding: r = 0
    } = e10 || {}, {
      x: i,
      y: a,
      placement: o,
      rects: s,
      platform: c
    } = t;
    if (n == null)
      return {};
    let u = D0(r), d = {
      x: i,
      y: a
    }, f = $r(o), m = Jl(f), g = await c.getDimensions(n), p = f === "y" ? "top" : "left", h = f === "y" ? "bottom" : "right", b = s.reference[m] + s.reference[f] - d[f] - s.floating[m], w = d[f] - s.reference[f], C = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(n)), v = C ? f === "y" ? C.clientHeight || 0 : C.clientWidth || 0 : 0;
    v === 0 && (v = s.floating[m]);
    let y = b / 2 - w / 2, E = u[p], $ = v - g[m] - u[h], k = v / 2 - g[m] / 2 + y, A = Zs(E, k, $), N = Zi(o) != null && k != A && s.reference[m] / 2 - (k < E ? u[p] : u[h]) - g[m] / 2 < 0 ? k < E ? E - k : $ - k : 0;
    return {
      [f]: d[f] - N,
      data: {
        [f]: A,
        centerOffset: k - A
      }
    };
  }
}), f$ = ["top", "right", "bottom", "left"], d$ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ra(e10) {
  return e10.replace(/left|right|bottom|top/g, (t) => d$[t]);
}
function m$(e10, t, n) {
  n === void 0 && (n = !1);
  let r = Zi(e10), i = $r(e10), a = Jl(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (o = Ra(o)), {
    main: o,
    cross: Ra(o)
  };
}
var h$ = {
  start: "end",
  end: "start"
};
function Hs(e10) {
  return e10.replace(/start|end/g, (t) => h$[t]);
}
function p$(e10) {
  let t = Ra(e10);
  return [Hs(e10), t, Hs(t)];
}
function v$(e10, t, n) {
  let r = ["left", "right"], i = ["right", "left"], a = ["top", "bottom"], o = ["bottom", "top"];
  switch (e10) {
    case "top":
    case "bottom":
      return n ? t ? i : r : t ? r : i;
    case "left":
    case "right":
      return t ? a : o;
    default:
      return [];
  }
}
function g$(e10, t, n, r) {
  let i = Zi(e10), a = v$(rn(e10), n === "start", r);
  return i && (a = a.map((o) => o + "-" + i), t && (a = a.concat(a.map(Hs)))), a;
}
var y$ = function(e10) {
  return e10 === void 0 && (e10 = {}), {
    name: "flip",
    options: e10,
    async fn(t) {
      var n;
      let {
        placement: r,
        middlewareData: i,
        rects: a,
        initialPlacement: o,
        platform: s,
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: p = !0,
        ...h
      } = e10, b = rn(r), w = rn(o) === o, C = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), v = f || (w || !p ? [Ra(o)] : p$(o));
      !f && g !== "none" && v.push(...g$(o, p, g, C));
      let y = [o, ...v], E = await Ta(t, h), $ = [], k = ((n = i.flip) == null ? void 0 : n.overflows) || [];
      if (u && $.push(E[b]), d) {
        let {
          main: N,
          cross: T
        } = m$(r, a, C);
        $.push(E[N], E[T]);
      }
      if (k = [...k, {
        placement: r,
        overflows: $
      }], !$.every((N) => N <= 0)) {
        var A;
        let N = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, T = y[N];
        if (T)
          return {
            data: {
              index: N,
              overflows: k
            },
            reset: {
              placement: T
            }
          };
        let O = "bottom";
        switch (m) {
          case "bestFit": {
            var P;
            let _ = (P = k.map((x) => [x, x.overflows.filter((S) => S > 0).reduce((S, M) => S + M, 0)]).sort((x, S) => x[1] - S[1])[0]) == null ? void 0 : P[0].placement;
            _ && (O = _);
            break;
          }
          case "initialPlacement":
            O = o;
            break;
        }
        if (r !== O)
          return {
            reset: {
              placement: O
            }
          };
      }
      return {};
    }
  };
};
function Ef(e10, t) {
  return {
    top: e10.top - t.height,
    right: e10.right - t.width,
    bottom: e10.bottom - t.height,
    left: e10.left - t.width
  };
}
function Cf(e10) {
  return f$.some((t) => e10[t] >= 0);
}
var b$ = function(e10) {
  return e10 === void 0 && (e10 = {}), {
    name: "hide",
    options: e10,
    async fn(t) {
      let {
        strategy: n = "referenceHidden",
        ...r
      } = e10, {
        rects: i
      } = t;
      switch (n) {
        case "referenceHidden": {
          let a = await Ta(t, {
            ...r,
            elementContext: "reference"
          }), o = Ef(a, i.reference);
          return {
            data: {
              referenceHiddenOffsets: o,
              referenceHidden: Cf(o)
            }
          };
        }
        case "escaped": {
          let a = await Ta(t, {
            ...r,
            altBoundary: !0
          }), o = Ef(a, i.floating);
          return {
            data: {
              escapedOffsets: o,
              escaped: Cf(o)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function w$(e10, t) {
  let {
    placement: n,
    platform: r,
    elements: i
  } = e10, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = rn(n), s = Zi(n), c = $r(n) === "x", u = ["left", "top"].includes(o) ? -1 : 1, d = a && c ? -1 : 1, f = typeof t == "function" ? t(e10) : t, {
    mainAxis: m,
    crossAxis: g,
    alignmentAxis: p
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return s && typeof p == "number" && (g = s === "end" ? p * -1 : p), c ? {
    x: g * d,
    y: m * u
  } : {
    x: m * u,
    y: g * d
  };
}
var E$ = function(e10) {
  return e10 === void 0 && (e10 = 0), {
    name: "offset",
    options: e10,
    async fn(t) {
      let {
        x: n,
        y: r
      } = t, i = await w$(t, e10);
      return {
        x: n + i.x,
        y: r + i.y,
        data: i
      };
    }
  };
};
function V0(e10) {
  return e10 === "x" ? "y" : "x";
}
var C$ = function(e10) {
  return e10 === void 0 && (e10 = {}), {
    name: "shift",
    options: e10,
    async fn(t) {
      let {
        x: n,
        y: r,
        placement: i
      } = t, {
        mainAxis: a = !0,
        crossAxis: o = !1,
        limiter: s = {
          fn: (b) => {
            let {
              x: w,
              y: C
            } = b;
            return {
              x: w,
              y: C
            };
          }
        },
        ...c
      } = e10, u = {
        x: n,
        y: r
      }, d = await Ta(t, c), f = $r(rn(i)), m = V0(f), g = u[f], p = u[m];
      if (a) {
        let b = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", C = g + d[b], v = g - d[w];
        g = Zs(C, g, v);
      }
      if (o) {
        let b = m === "y" ? "top" : "left", w = m === "y" ? "bottom" : "right", C = p + d[b], v = p - d[w];
        p = Zs(C, p, v);
      }
      let h = s.fn({
        ...t,
        [f]: g,
        [m]: p
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - r
        }
      };
    }
  };
}, $$ = function(e10) {
  return e10 === void 0 && (e10 = {}), {
    options: e10,
    fn(t) {
      let {
        x: n,
        y: r,
        placement: i,
        rects: a,
        middlewareData: o
      } = t, {
        offset: s = 0,
        mainAxis: c = !0,
        crossAxis: u = !0
      } = e10, d = {
        x: n,
        y: r
      }, f = $r(i), m = V0(f), g = d[f], p = d[m], h = typeof s == "function" ? s(t) : s, b = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (c) {
        let v = f === "y" ? "height" : "width", y = a.reference[f] - a.floating[v] + b.mainAxis, E = a.reference[f] + a.reference[v] - b.mainAxis;
        g < y ? g = y : g > E && (g = E);
      }
      if (u) {
        var w, C;
        let v = f === "y" ? "width" : "height", y = ["top", "left"].includes(rn(i)), E = a.reference[m] - a.floating[v] + (y && ((w = o.offset) == null ? void 0 : w[m]) || 0) + (y ? 0 : b.crossAxis), $ = a.reference[m] + a.reference[v] + (y ? 0 : ((C = o.offset) == null ? void 0 : C[m]) || 0) - (y ? b.crossAxis : 0);
        p < E ? p = E : p > $ && (p = $);
      }
      return {
        [f]: g,
        [m]: p
      };
    }
  };
};
function ot(e10) {
  var t;
  return ((t = e10.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function _t(e10) {
  return ot(e10).getComputedStyle(e10);
}
function an(e10) {
  return B0(e10) ? (e10.nodeName || "").toLowerCase() : "";
}
var ra;
function j0() {
  if (ra)
    return ra;
  let e10 = navigator.userAgentData;
  return e10 && Array.isArray(e10.brands) ? (ra = e10.brands.map((t) => t.brand + "/" + t.version).join(" "), ra) : navigator.userAgent;
}
function Vt(e10) {
  return e10 instanceof ot(e10).HTMLElement;
}
function mt(e10) {
  return e10 instanceof ot(e10).Element;
}
function B0(e10) {
  return e10 instanceof ot(e10).Node;
}
function $f(e10) {
  if (typeof ShadowRoot > "u")
    return !1;
  let t = ot(e10).ShadowRoot;
  return e10 instanceof t || e10 instanceof ShadowRoot;
}
function Co(e10) {
  let {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: i
  } = _t(e10);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function x$(e10) {
  return ["table", "td", "th"].includes(an(e10));
}
function ec(e10) {
  let t = /firefox/i.test(j0()), n = _t(e10), r = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || (r ? r !== "none" : !1) || t && n.willChange === "filter" || t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some(
    (i) => {
      let a = n.contain;
      return a != null ? a.includes(i) : !1;
    }
  );
}
function W0() {
  return !/^((?!chrome|android).)*safari/i.test(j0());
}
function tc(e10) {
  return ["html", "body", "#document"].includes(an(e10));
}
var xf = Math.min, Kr = Math.max, Ma = Math.round;
function Z0(e10) {
  let t = _t(e10), n = parseFloat(t.width), r = parseFloat(t.height), i = e10.offsetWidth, a = e10.offsetHeight, o = Ma(n) !== i || Ma(r) !== a;
  return o && (n = i, r = a), {
    width: n,
    height: r,
    fallback: o
  };
}
function H0(e10) {
  return mt(e10) ? e10 : e10.contextElement;
}
var z0 = {
  x: 1,
  y: 1
};
function Jn(e10) {
  let t = H0(e10);
  if (!Vt(t))
    return z0;
  let n = t.getBoundingClientRect(), {
    width: r,
    height: i,
    fallback: a
  } = Z0(t), o = (a ? Ma(n.width) : n.width) / r, s = (a ? Ma(n.height) : n.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: o,
    y: s
  };
}
function Nn(e10, t, n, r) {
  var i, a;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  let o = e10.getBoundingClientRect(), s = H0(e10), c = z0;
  t && (r ? mt(r) && (c = Jn(r)) : c = Jn(e10));
  let u = s ? ot(s) : window, d = !W0() && n, f = (o.left + (d && ((i = u.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / c.x, m = (o.top + (d && ((a = u.visualViewport) == null ? void 0 : a.offsetTop) || 0)) / c.y, g = o.width / c.x, p = o.height / c.y;
  if (s) {
    let h = ot(s), b = r && mt(r) ? ot(r) : r, w = h.frameElement;
    for (; w && r && b !== h; ) {
      let C = Jn(w), v = w.getBoundingClientRect(), y = getComputedStyle(w);
      v.x += (w.clientLeft + parseFloat(y.paddingLeft)) * C.x, v.y += (w.clientTop + parseFloat(y.paddingTop)) * C.y, f *= C.x, m *= C.y, g *= C.x, p *= C.y, f += v.x, m += v.y, w = ot(w).frameElement;
    }
  }
  return {
    width: g,
    height: p,
    top: m,
    right: f + g,
    bottom: m + p,
    left: f,
    x: f,
    y: m
  };
}
function ln(e10) {
  return ((B0(e10) ? e10.ownerDocument : e10.document) || window.document).documentElement;
}
function $o(e10) {
  return mt(e10) ? {
    scrollLeft: e10.scrollLeft,
    scrollTop: e10.scrollTop
  } : {
    scrollLeft: e10.pageXOffset,
    scrollTop: e10.pageYOffset
  };
}
function U0(e10) {
  return Nn(ln(e10)).left + $o(e10).scrollLeft;
}
function _$(e10, t, n) {
  let r = Vt(t), i = ln(t), a = Nn(e10, !0, n === "fixed", t), o = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  if (r || !r && n !== "fixed")
    if ((an(t) !== "body" || Co(i)) && (o = $o(t)), Vt(t)) {
      let c = Nn(t, !0);
      s.x = c.x + t.clientLeft, s.y = c.y + t.clientTop;
    } else
      i && (s.x = U0(i));
  return {
    x: a.left + o.scrollLeft - s.x,
    y: a.top + o.scrollTop - s.y,
    width: a.width,
    height: a.height
  };
}
function fi(e10) {
  if (an(e10) === "html")
    return e10;
  let t = e10.assignedSlot || e10.parentNode || ($f(e10) ? e10.host : null) || ln(e10);
  return $f(t) ? t.host : t;
}
function _f(e10) {
  return !Vt(e10) || _t(e10).position === "fixed" ? null : e10.offsetParent;
}
function k$(e10) {
  let t = fi(e10);
  for (; Vt(t) && !tc(t); ) {
    if (ec(t))
      return t;
    t = fi(t);
  }
  return null;
}
function kf(e10) {
  let t = ot(e10), n = _f(e10);
  for (; n && x$(n) && _t(n).position === "static"; )
    n = _f(n);
  return n && (an(n) === "html" || an(n) === "body" && _t(n).position === "static" && !ec(n)) ? t : n || k$(e10) || t;
}
function O$(e10) {
  return Z0(e10);
}
function S$(e10) {
  let {
    rect: t,
    offsetParent: n,
    strategy: r
  } = e10, i = Vt(n), a = ln(n);
  if (n === a)
    return t;
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 1,
    y: 1
  }, c = {
    x: 0,
    y: 0
  };
  if ((i || !i && r !== "fixed") && ((an(n) !== "body" || Co(a)) && (o = $o(n)), Vt(n))) {
    let u = Nn(n);
    s = Jn(n), c.x = u.x + n.clientLeft, c.y = u.y + n.clientTop;
  }
  return {
    width: t.width * s.x,
    height: t.height * s.y,
    x: t.x * s.x - o.scrollLeft * s.x + c.x,
    y: t.y * s.y - o.scrollTop * s.y + c.y
  };
}
function F$(e10, t) {
  let n = ot(e10), r = ln(e10), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
  if (i) {
    a = i.width, o = i.height;
    let u = W0();
    (u || !u && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: a,
    height: o,
    x: s,
    y: c
  };
}
function P$(e10) {
  var t;
  let n = ln(e10), r = $o(e10), i = (t = e10.ownerDocument) == null ? void 0 : t.body, a = Kr(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = Kr(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), s = -r.scrollLeft + U0(e10), c = -r.scrollTop;
  return _t(i || n).direction === "rtl" && (s += Kr(n.clientWidth, i ? i.clientWidth : 0) - a), {
    width: a,
    height: o,
    x: s,
    y: c
  };
}
function q0(e10) {
  let t = fi(e10);
  return tc(t) ? e10.ownerDocument.body : Vt(t) && Co(t) ? t : q0(t);
}
function Gr(e10, t) {
  var n;
  t === void 0 && (t = []);
  let r = q0(e10), i = r === ((n = e10.ownerDocument) == null ? void 0 : n.body), a = ot(r);
  return i ? t.concat(a, a.visualViewport || [], Co(r) ? r : []) : t.concat(r, Gr(r));
}
function N$(e10, t) {
  let n = Nn(e10, !0, t === "fixed"), r = n.top + e10.clientTop, i = n.left + e10.clientLeft, a = Vt(e10) ? Jn(e10) : {
    x: 1,
    y: 1
  }, o = e10.clientWidth * a.x, s = e10.clientHeight * a.y, c = i * a.x, u = r * a.y;
  return {
    top: u,
    left: c,
    right: c + o,
    bottom: u + s,
    x: c,
    y: u,
    width: o,
    height: s
  };
}
function Of(e10, t, n) {
  return t === "viewport" ? Aa(F$(e10, n)) : mt(t) ? N$(t, n) : Aa(P$(ln(e10)));
}
function A$(e10, t) {
  let n = t.get(e10);
  if (n)
    return n;
  let r = Gr(e10).filter((s) => mt(s) && an(s) !== "body"), i = null, a = _t(e10).position === "fixed", o = a ? fi(e10) : e10;
  for (; mt(o) && !tc(o); ) {
    let s = _t(o), c = ec(o);
    (a ? !c && !i : !c && s.position === "static" && !!i && ["absolute", "fixed"].includes(i.position)) ? r = r.filter((d) => d !== o) : i = s, o = fi(o);
  }
  return t.set(e10, r), r;
}
function T$(e10) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = e10, o = [...n === "clippingAncestors" ? A$(t, this._c) : [].concat(n), r], s = o[0], c = o.reduce((u, d) => {
    let f = Of(t, d, i);
    return u.top = Kr(f.top, u.top), u.right = xf(f.right, u.right), u.bottom = xf(f.bottom, u.bottom), u.left = Kr(f.left, u.left), u;
  }, Of(t, s, i));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
var R$ = {
  getClippingRect: T$,
  convertOffsetParentRelativeRectToViewportRelativeRect: S$,
  isElement: mt,
  getDimensions: O$,
  getOffsetParent: kf,
  getDocumentElement: ln,
  getScale: Jn,
  async getElementRects(e10) {
    let {
      reference: t,
      floating: n,
      strategy: r
    } = e10, i = this.getOffsetParent || kf, a = this.getDimensions;
    return {
      reference: _$(t, await i(n), r),
      floating: {
        x: 0,
        y: 0,
        ...await a(n)
      }
    };
  },
  getClientRects: (e10) => Array.from(e10.getClientRects()),
  isRTL: (e10) => _t(e10).direction === "rtl"
};
function M$(e10, t, n, r) {
  r === void 0 && (r = {});
  let {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: o = !0,
    animationFrame: s = !1
  } = r, c = i && !s, u = c || a ? [...mt(e10) ? Gr(e10) : e10.contextElement ? Gr(e10.contextElement) : [], ...Gr(t)] : [];
  u.forEach((p) => {
    c && p.addEventListener("scroll", n, {
      passive: !0
    }), a && p.addEventListener("resize", n);
  });
  let d = null;
  if (o) {
    let p = !0;
    d = new ResizeObserver(() => {
      p || n(), p = !1;
    }), mt(e10) && !s && d.observe(e10), !mt(e10) && e10.contextElement && !s && d.observe(e10.contextElement), d.observe(t);
  }
  let f, m = s ? Nn(e10) : null;
  s && g();
  function g() {
    let p = Nn(e10);
    m && (p.x !== m.x || p.y !== m.y || p.width !== m.width || p.height !== m.height) && n(), m = p, f = requestAnimationFrame(g);
  }
  return n(), () => {
    var p;
    u.forEach((h) => {
      c && h.removeEventListener("scroll", n), a && h.removeEventListener("resize", n);
    }), (p = d) == null || p.disconnect(), d = null, s && cancelAnimationFrame(f);
  };
}
var I$ = (e10, t, n) => {
  let r = /* @__PURE__ */ new Map(), i = {
    platform: R$,
    ...n
  }, a = {
    ...i.platform,
    _c: r
  };
  return o$(e10, t, {
    ...i,
    platform: a
  });
}, L$ = class extends import_react2.default.Component {
  constructor() {
    super(...arguments), this.element = null;
  }
  componentDidMount() {
    this.componentDidUpdate();
  }
  componentDidUpdate() {
    let t = (0, import_react_dom.findDOMNode)(this);
    t instanceof Element ? this.element = t : this.element = null;
  }
  render() {
    return import_react2.default.Children.only(this.props.children);
  }
}, D$ = {
  topLeft: "top-start",
  topRight: "top-end",
  bottomLeft: "bottom-start",
  bottomRight: "bottom-end",
  leftTop: "left-start",
  leftBottom: "left-end",
  rightTop: "right-start",
  rightBottom: "right-end"
};
function V$(e10) {
  var t;
  return (t = D$[e10]) !== null && t !== void 0 ? t : e10;
}
var Yn = null, er = null;
sr && (Yn = document.createElement("div"), Yn.className = "adm-px-tester", Yn.style.setProperty("--size", "10"), document.body.appendChild(Yn), er = document.createElement("div"), er.className = "adm-px-tester", document.body.appendChild(er));
function Qt(e10) {
  return Yn === null || er === null || Yn.getBoundingClientRect().height === 10 ? e10 : (er.style.setProperty("--size", e10.toString()), er.getBoundingClientRect().height);
}
var fn = "adm-popover", j$ = {
  placement: "top",
  defaultVisible: !1,
  stopPropagation: ["click"],
  getContainer: () => document.body
}, K0 = (0, import_react2.forwardRef)((e10, t) => {
  let n = Z(j$, e10), {
    mode: r = "light"
  } = n, i = V$(n.placement), [a, o] = te({
    value: n.visible,
    defaultValue: n.defaultVisible,
    onChange: n.onVisibleChange
  });
  (0, import_react2.useImperativeHandle)(t, () => ({
    show: () => o(!0),
    hide: () => o(!1),
    visible: a
  }), [a]);
  let s = (0, import_react2.useRef)(null), c = (0, import_react2.useRef)(null), u = (0, import_react2.useRef)(null), d = tn(n.stopPropagation, j(n, import_react2.default.createElement("div", {
    className: V(fn, `${fn}-${r}`, !a && `${fn}-hidden`),
    ref: c
  }, import_react2.default.createElement("div", {
    className: `${fn}-arrow`,
    ref: u
  }, import_react2.default.createElement(a$, {
    className: `${fn}-arrow-icon`
  })), import_react2.default.createElement("div", {
    className: `${fn}-inner`
  }, import_react2.default.createElement("div", {
    className: `${fn}-inner-content`
  }, n.content))))), [f, m] = (0, import_react2.useState)(null);
  function g() {
    var h, b, w;
    return ye(this, void 0, void 0, function* () {
      let C = (b = (h = s.current) === null || h === void 0 ? void 0 : h.element) !== null && b !== void 0 ? b : null, v = c.current, y = u.current;
      if (m(C), !C || !v || !y)
        return;
      let {
        x: E,
        y: $,
        placement: k,
        middlewareData: A
      } = yield I$(C, v, {
        placement: i,
        middleware: [E$(Qt(12)), C$({
          padding: Qt(4),
          crossAxis: !1,
          limiter: $$()
        }), y$(), b$(), u$({
          element: y,
          padding: Qt(12)
        })]
      });
      Object.assign(v.style, {
        left: `${E}px`,
        top: `${$}px`
      });
      let P = k.split("-")[0], N = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
      }[P], {
        x: T,
        y: O
      } = (w = A.arrow) !== null && w !== void 0 ? w : {};
      Object.assign(y.style, {
        left: T != null ? `${T}px` : "",
        top: O != null ? `${O}px` : "",
        right: "",
        bottom: "",
        [N]: `-${Qt(8)}px`
      });
      let _ = {
        top: "0deg",
        bottom: "180deg",
        left: "270deg",
        right: "90deg"
      }[P];
      y.style.setProperty("--arrow-icon-rotate", _);
    });
  }
  Ce(() => {
    g();
  }), (0, import_react2.useEffect)(() => {
    if (!f || !n.trigger)
      return;
    function h() {
      o((b) => !b);
    }
    return f.addEventListener("click", h), () => {
      f.removeEventListener("click", h);
    };
  }, [f, n.trigger]), (0, import_react2.useEffect)(() => {
    let h = c.current;
    if (!(!f || !h))
      return M$(f, h, g, {
        elementResize: typeof ResizeObserver < "u"
      });
  }, [f]), sd(() => {
    !n.trigger || o(!1);
  }, [() => {
    var h;
    return (h = s.current) === null || h === void 0 ? void 0 : h.element;
  }, c], ["click", "touchmove"]);
  let p = to(a, !1, n.destroyOnHide);
  return import_react2.default.createElement(import_react2.default.Fragment, null, import_react2.default.createElement(L$, {
    ref: s
  }, n.children), p && gr(n.getContainer, d));
}), dn = "adm-popover-menu", B$ = (0, import_react2.forwardRef)((e10, t) => {
  let n = (0, import_react2.useRef)(null);
  (0, import_react2.useImperativeHandle)(t, () => n.current, []);
  let r = (0, import_react2.useCallback)((a) => {
    var o;
    let {
      onAction: s
    } = e10;
    s && s(a), (o = n.current) === null || o === void 0 || o.hide();
  }, [e10.onAction]), i = (0, import_react2.useMemo)(() => import_react2.default.createElement("div", {
    className: `${dn}-list`
  }, import_react2.default.createElement("div", {
    className: `${dn}-list-inner`
  }, e10.actions.map((a, o) => {
    var s;
    return import_react2.default.createElement("a", {
      key: (s = a.key) !== null && s !== void 0 ? s : o,
      className: V(`${dn}-item`, "adm-plain-anchor", a.disabled && `${dn}-item-disabled`),
      onClick: () => {
        var c;
        a.disabled || (r(a), (c = a.onClick) === null || c === void 0 || c.call(a));
      }
    }, a.icon && import_react2.default.createElement("div", {
      className: `${dn}-item-icon`
    }, a.icon), import_react2.default.createElement("div", {
      className: `${dn}-item-text`
    }, a.text));
  }))), [e10.actions, r]);
  return import_react2.default.createElement(K0, Object.assign({
    ref: n
  }, e10, {
    className: V(dn, e10.className),
    content: i
  }), e10.children);
}), G0 = ie(K0, {
  Menu: B$
});
function W$(...e10) {
  let t;
  for (t = 0; t < e10.length && e10[t] === void 0; t++)
    ;
  return e10[t];
}
var Z$ = "__SPLIT__", Ze = "adm-form-item", H$ = import_react2.default.memo(({
  children: e10
}) => e10, (e10, t) => e10.value === t.value && e10.update === t.update), z$ = (e10) => {
  var t;
  let {
    className: n,
    style: r,
    extra: i,
    label: a,
    help: o,
    required: s,
    children: c,
    htmlFor: u,
    hidden: d,
    arrow: f,
    childElementPosition: m = "normal"
  } = e10, g = (0, import_react2.useContext)(Xl), {
    locale: p
  } = $e(), h = e10.hasFeedback !== void 0 ? e10.hasFeedback : g.hasFeedback, b = e10.layout || g.layout, w = (t = e10.disabled) !== null && t !== void 0 ? t : g.disabled, C = (() => {
    let {
      requiredMarkStyle: E
    } = g;
    switch (E) {
      case "asterisk":
        return s && import_react2.default.createElement("span", {
          className: `${Ze}-required-asterisk`
        }, "*");
      case "text-required":
        return s && import_react2.default.createElement("span", {
          className: `${Ze}-required-text`
        }, "(", p.Form.required, ")");
      case "text-optional":
        return !s && import_react2.default.createElement("span", {
          className: `${Ze}-required-text`
        }, "(", p.Form.optional, ")");
      case "none":
        return null;
      default:
        return null;
    }
  })(), v = a ? import_react2.default.createElement("label", {
    className: `${Ze}-label`,
    htmlFor: u
  }, a, C, o && import_react2.default.createElement(G0, {
    content: o,
    mode: "dark",
    trigger: "click"
  }, import_react2.default.createElement("span", {
    className: `${Ze}-label-help`,
    onClick: (E) => {
      E.preventDefault();
    }
  }, import_react2.default.createElement(n8, null)))) : null, y = e10.description || h ? import_react2.default.createElement(import_react2.default.Fragment, null, e10.description, h && import_react2.default.createElement(import_react2.default.Fragment, null, e10.errors.map((E, $) => import_react2.default.createElement("div", {
    key: `error-${$}`,
    className: `${Ze}-feedback-error`
  }, E)), e10.warnings.map((E, $) => import_react2.default.createElement("div", {
    key: `warning-${$}`,
    className: `${Ze}-feedback-warning`
  }, E)))) : null;
  return j(e10, import_react2.default.createElement($t.Item, {
    style: r,
    title: b === "vertical" && v,
    prefix: b === "horizontal" && v,
    extra: i,
    description: y,
    className: V(Ze, n, `${Ze}-${b}`, {
      [`${Ze}-hidden`]: d,
      [`${Ze}-has-error`]: e10.errors.length
    }),
    disabled: w,
    onClick: e10.onClick,
    clickable: e10.clickable,
    arrow: f
  }, import_react2.default.createElement("div", {
    className: V(`${Ze}-child`, `${Ze}-child-position-${m}`)
  }, import_react2.default.createElement("div", {
    className: V(`${Ze}-child-inner`)
  }, c))));
}, U$ = (e10) => {
  let {
    className: t,
    style: n,
    label: r,
    help: i,
    extra: a,
    hasFeedback: o,
    name: s,
    required: c,
    noStyle: u,
    hidden: d,
    layout: f,
    childElementPosition: m,
    description: g,
    disabled: p,
    rules: h,
    children: b,
    messageVariables: w,
    trigger: C = "onChange",
    validateTrigger: v = C,
    onClick: y,
    shouldUpdate: E,
    dependencies: $,
    clickable: k,
    arrow: A
  } = e10, P = di(e10, ["className", "style", "label", "help", "extra", "hasFeedback", "name", "required", "noStyle", "hidden", "layout", "childElementPosition", "description", "disabled", "rules", "children", "messageVariables", "trigger", "validateTrigger", "onClick", "shouldUpdate", "dependencies", "clickable", "arrow"]), {
    name: N
  } = (0, import_react2.useContext)(Xl), {
    validateTrigger: T
  } = (0, import_react2.useContext)(I0), O = W$(v, T, C), _ = (0, import_react2.useRef)(null), x = (0, import_react2.useRef)(0);
  x.current += 1;
  let [S, M] = (0, import_react2.useState)({}), F = (0, import_react2.useCallback)((U, X) => {
    M((K) => {
      let Oe = Object.assign({}, K), Se = X.join(Z$);
      return U.destroy ? delete Oe[Se] : Oe[Se] = U, Oe;
    });
  }, [M]);
  function R(U, X, K, Oe) {
    var Se, he;
    if (u && !d)
      return U;
    let pe = (Se = K == null ? void 0 : K.errors) !== null && Se !== void 0 ? Se : [], we = Object.keys(S).reduce((Fe, cn) => {
      var vt, ct;
      let xr = (ct = (vt = S[cn]) === null || vt === void 0 ? void 0 : vt.errors) !== null && ct !== void 0 ? ct : [];
      return xr.length && (Fe = [...Fe, ...xr]), Fe;
    }, pe), Rn = (he = K == null ? void 0 : K.warnings) !== null && he !== void 0 ? he : [], Be = Object.keys(S).reduce((Fe, cn) => {
      var vt, ct;
      let xr = (ct = (vt = S[cn]) === null || vt === void 0 ? void 0 : vt.warnings) !== null && ct !== void 0 ? ct : [];
      return xr.length && (Fe = [...Fe, ...xr]), Fe;
    }, Rn);
    return j(e10, import_react2.default.createElement(z$, {
      className: t,
      style: n,
      label: r,
      extra: a,
      help: i,
      description: g,
      required: Oe,
      disabled: p,
      hasFeedback: o,
      htmlFor: X,
      errors: we,
      warnings: Be,
      onClick: y && ((Fe) => y(Fe, _)),
      hidden: d,
      layout: f,
      childElementPosition: m,
      clickable: k,
      arrow: A
    }, import_react2.default.createElement(df.Provider, {
      value: F
    }, U)));
  }
  let I = typeof b == "function";
  if (!s && !I && !e10.dependencies)
    return R(b);
  let W = {};
  W.label = typeof r == "string" ? r : "", w && (W = Object.assign(Object.assign({}, W), w));
  let G = (0, import_react2.useContext)(df), H = (U) => {
    if (u && G) {
      let X = U.name;
      G(U, X);
    }
  };
  return import_react2.default.createElement(Kl, Object.assign({}, P, {
    name: s,
    shouldUpdate: E,
    dependencies: $,
    rules: h,
    trigger: C,
    validateTrigger: O,
    onMetaChange: H,
    messageVariables: W
  }), (U, X, K) => {
    let Oe = null, Se = c !== void 0 ? c : h && h.some((we) => !!(we && typeof we == "object" && we.required)), he = Wo(s).length && X ? X.name : [], pe = (he.length > 0 && N ? [N, ...he] : he).join("_");
    if (E && $ && Le("Form.Item", "`shouldUpdate` and `dependencies` shouldn't be used together."), I)
      (E || $) && !s ? Oe = b(K) : (E || $ || Le("Form.Item", "`children` of render props only work with `shouldUpdate` or `dependencies`."), s && Le("Form.Item", "Do not use `name` with `children` of render props since it's not a field."));
    else if ($ && !s)
      Le("Form.Item", "Must set `name` or use render props when `dependencies` is set.");
    else if (import_react2.default.isValidElement(b)) {
      b.props.defaultValue && Le("Form.Item", "`defaultValue` will not work on controlled Field. You should use `initialValues` of Form instead.");
      let we = Object.assign(Object.assign({}, b.props), U);
      L0(b) && (we.ref = (Be) => {
        let Fe = b.ref;
        Fe && (typeof Fe == "function" && Fe(Be), "current" in Fe && (Fe.current = Be)), _.current = Be;
      }), we.id || (we.id = pe), (/* @__PURE__ */ new Set([...Wo(C), ...Wo(O)])).forEach((Be) => {
        we[Be] = (...Fe) => {
          var cn, vt, ct;
          (cn = U[Be]) === null || cn === void 0 || cn.call(U, ...Fe), (ct = (vt = b.props)[Be]) === null || ct === void 0 || ct.call(vt, ...Fe);
        };
      }), Oe = import_react2.default.createElement(H$, {
        value: U[e10.valuePropName || "value"],
        update: x.current
      }, import_react2.default.cloneElement(b, we));
    } else
      s && Le("Form.Item", "`name` is only used for validate React element. If you are using Form.Item as layout display, please remove `name` instead."), Oe = b;
    return R(Oe, pe, X, Se);
  });
}, q$ = (e10) => {
  let t = ad(), n = (0, import_react2.useContext)(Pn);
  return import_react2.default.createElement(import_react2.default.Fragment, null, e10.children(n.getFieldsValue(e10.to), n), e10.to.map((r) => import_react2.default.createElement(K$, {
    key: r.toString(),
    form: n,
    namePath: r,
    onChange: t
  })));
}, K$ = (0, import_react2.memo)((e10) => {
  let t = Yl(e10.namePath, e10.form);
  return _i(() => {
    e10.onChange();
  }, [t]), null;
}), Uk = ie(UC, {
  Item: U$,
  Subscribe: q$,
  Header: x0,
  Array: N0,
  useForm: Gl,
  useWatch: Yl
}), Y0 = "adm-grid", G$ = (e10) => {
  let t = {
    "--columns": e10.columns.toString()
  }, {
    gap: n
  } = e10;
  return n !== void 0 && (Array.isArray(n) ? (t["--gap-horizontal"] = xn(n[0]), t["--gap-vertical"] = xn(n[1])) : t["--gap"] = xn(n)), j(e10, import_react2.default.createElement("div", {
    className: Y0,
    style: t
  }, e10.children));
}, Y$ = (e10) => {
  let t = Z({
    span: 1
  }, e10), n = {
    "--item-span": t.span
  };
  return j(t, import_react2.default.createElement("div", {
    className: `${Y0}-item`,
    style: n,
    onClick: t.onClick
  }, t.children));
}, X0 = ie(G$, {
  Item: Y$
}), X$ = Jy([O1, Vy]), Zo = () => [1, 0, 0, 1, 0, 0], Sf = (e10) => e10[4], Ff = (e10) => e10[5], Rr = (e10) => e10[0], Mr = (e10, t, n) => Q0([1, 0, 0, 1, t, n], e10), Q$ = (e10, t, n = t) => Q0([t, 0, 0, n, 0, 0], e10), J$ = (e10, [t, n]) => [e10[0] * t + e10[2] * n + e10[4], e10[1] * t + e10[3] * n + e10[5]], Q0 = (e10, t) => [e10[0] * t[0] + e10[2] * t[1], e10[1] * t[0] + e10[3] * t[1], e10[0] * t[2] + e10[2] * t[3], e10[1] * t[2] + e10[3] * t[3], e10[0] * t[4] + e10[2] * t[5] + e10[4], e10[1] * t[4] + e10[3] * t[5] + e10[5]], Ho = "adm-image-viewer", J0 = (e10) => {
  let {
    dragLockRef: t,
    maxZoom: n
  } = e10, r = (0, import_react2.useRef)(null), i = (0, import_react2.useRef)(null), [{
    matrix: a
  }, o] = Ne(() => ({
    matrix: Zo(),
    config: {
      tension: 200
    }
  })), s = ls(r), c = ls(i), u = (0, import_react2.useRef)(!1), d = (f, m, g = !1) => {
    if (!s || !c)
      return f;
    let p = -s.width / 2, h = -s.height / 2, b = -c.width / 2, w = -c.height / 2, C = Rr(f), v = C * c.width, y = C * c.height, [E, $] = J$(f, [b, w]);
    if (m === "translate") {
      let k = E, A = $;
      if (v > s.width) {
        let P = p - (v - s.width), N = p;
        k = g ? _e(E, P, N) : Fa(E, P, N, C * 50);
      } else
        k = -v / 2;
      if (y > s.height) {
        let P = h - (y - s.height), N = h;
        A = g ? _e($, P, N) : Fa($, P, N, C * 50);
      } else
        A = -y / 2;
      return Mr(f, k - E, A - $);
    }
    if (m === "scale" && g) {
      let [k, A] = [v > s.width ? _e(E, p - (v - s.width), p) : -v / 2, y > s.height ? _e($, h - (y - s.height), h) : -y / 2];
      return Mr(f, k - E, A - $);
    }
    return f;
  };
  return X$({
    onDrag: (f) => {
      if (f.first)
        return;
      if (f.pinching)
        return f.cancel();
      if (f.tap && f.elapsedTime > 0 && f.elapsedTime < 1e3) {
        e10.onTap();
        return;
      }
      let m = Rr(a.get());
      if (t && (t.current = m !== 1), !u.current && m <= 1)
        o.start({
          matrix: Zo()
        });
      else {
        let g = a.get(), p = [f.offset[0] - Sf(g), f.offset[1] - Ff(g)], h = Mr(g, ...f.last ? [p[0] + f.velocity[0] * f.direction[0] * 200, p[1] + f.velocity[1] * f.direction[1] * 200] : p);
        o.start({
          matrix: d(h, "translate", f.last),
          immediate: !f.last
        });
      }
    },
    onPinch: (f) => {
      var m;
      u.current = !f.last;
      let [g] = f.offset;
      if (g < 0)
        return;
      let p;
      n === "auto" ? p = s && c ? Math.max(s.height / c.height, s.width / c.width) : 1 : p = n;
      let h = f.last ? _e(g, 1, p) : g;
      if ((m = e10.onZoomChange) === null || m === void 0 || m.call(e10, h), f.last && h <= 1)
        o.start({
          matrix: Zo()
        }), t && (t.current = !1);
      else {
        if (!s)
          return;
        let b = a.get(), w = Rr(b), C = f.origin[0] - s.width / 2, v = f.origin[1] - s.height / 2, y = Mr(b, -C, -v);
        y = Q$(y, h / w), y = Mr(y, C, v), o.start({
          matrix: d(y, "scale", f.last),
          immediate: !f.last
        }), t && (t.current = !0);
      }
    }
  }, {
    target: r,
    drag: {
      from: () => [Sf(a.get()), Ff(a.get())],
      pointer: {
        touch: !0
      }
    },
    pinch: {
      from: () => [Rr(a.get()), 0],
      pointer: {
        touch: !0
      }
    }
  }), import_react2.default.createElement("div", {
    className: `${Ho}-slide`,
    onPointerMove: (f) => {
      Rr(a.get()) !== 1 && f.stopPropagation();
    }
  }, import_react2.default.createElement("div", {
    className: `${Ho}-control`,
    ref: r
  }, import_react2.default.createElement(ue.div, {
    className: `${Ho}-image-wrapper`,
    style: {
      matrix: a
    }
  }, import_react2.default.createElement("img", {
    ref: i,
    src: e10.image,
    draggable: !1,
    alt: e10.image
  }))));
}, zo = "adm-image-viewer", ex = (0, import_react2.forwardRef)((e10, t) => {
  let n = window.innerWidth + Qt(16), [{
    x: r
  }, i] = Ne(() => ({
    x: e10.defaultIndex * n,
    config: {
      tension: 250,
      clamp: !0
    }
  })), a = e10.images.length;
  function o(u, d = !1) {
    var f;
    let m = _e(u, 0, a - 1);
    (f = e10.onIndexChange) === null || f === void 0 || f.call(e10, m), i.start({
      x: m * n,
      immediate: d
    });
  }
  (0, import_react2.useImperativeHandle)(t, () => ({
    swipeTo: o
  }));
  let s = (0, import_react2.useRef)(!1), c = jt((u) => {
    if (s.current)
      return;
    let [d] = u.offset;
    if (u.last) {
      let f = Math.floor(d / n), m = f + 1, g = Math.min(u.velocity[0] * 2e3, n) * u.direction[0];
      o(_e(Math.round((d + g) / n), f, m));
    } else
      i.start({
        x: d,
        immediate: !0
      });
  }, {
    transform: ([u, d]) => [-u, d],
    from: () => [r.get(), 0],
    bounds: () => ({
      left: 0,
      right: (a - 1) * n
    }),
    rubberband: !0,
    axis: "x",
    pointer: {
      touch: !0
    }
  });
  return import_react2.default.createElement("div", Object.assign({
    className: `${zo}-slides`
  }, c()), import_react2.default.createElement(ue.div, {
    className: `${zo}-indicator`
  }, r.to((u) => `${_e(Math.round(u / n), 0, a - 1) + 1} / ${a}`)), import_react2.default.createElement(ue.div, {
    className: `${zo}-slides-inner`,
    style: {
      x: r.to((u) => -u)
    }
  }, e10.images.map((u, d) => import_react2.default.createElement(J0, {
    key: d,
    image: u,
    onTap: e10.onTap,
    maxZoom: e10.maxZoom,
    onZoomChange: (f) => {
      if (f !== 1) {
        let m = Math.round(r.get() / n);
        i.start({
          x: m * n
        });
      }
    },
    dragLockRef: s
  }))));
}), Ia = "adm-image-viewer", em = {
  maxZoom: 3,
  getContainer: null,
  visible: !1
}, tm = (e10) => {
  var t;
  let n = Z(em, e10), r = import_react2.default.createElement(Ei, {
    visible: n.visible,
    disableBodyScroll: !1,
    opacity: "thick",
    afterClose: n.afterClose,
    destroyOnClose: !0
  }, import_react2.default.createElement("div", {
    className: `${Ia}-content`
  }, n.image && import_react2.default.createElement(J0, {
    image: n.image,
    onTap: () => {
      var i;
      (i = n.onClose) === null || i === void 0 || i.call(n);
    },
    maxZoom: n.maxZoom
  })), n.image && import_react2.default.createElement("div", {
    className: `${Ia}-footer`
  }, (t = n.renderFooter) === null || t === void 0 ? void 0 : t.call(n, n.image), import_react2.default.createElement(br, {
    position: "bottom"
  })));
  return gr(n.getContainer, r);
}, tx = Object.assign(Object.assign({}, em), {
  defaultIndex: 0
}), nm = (0, import_react2.forwardRef)((e10, t) => {
  var n;
  let r = Z(tx, e10), [i, a] = (0, import_react2.useState)(r.defaultIndex), o = (0, import_react2.useRef)(null);
  (0, import_react2.useImperativeHandle)(t, () => ({
    swipeTo: (u, d) => {
      var f;
      a(u), (f = o.current) === null || f === void 0 || f.swipeTo(u, d);
    }
  }));
  let s = (0, import_react2.useCallback)((u) => {
    var d;
    a(u), (d = r.onIndexChange) === null || d === void 0 || d.call(r, u);
  }, [r.onIndexChange]), c = import_react2.default.createElement(Ei, {
    visible: r.visible,
    disableBodyScroll: !1,
    opacity: "thick",
    afterClose: r.afterClose,
    destroyOnClose: !0
  }, import_react2.default.createElement("div", {
    className: `${Ia}-content`
  }, r.images && import_react2.default.createElement(ex, {
    ref: o,
    defaultIndex: i,
    onIndexChange: s,
    images: r.images,
    onTap: () => {
      var u;
      (u = r.onClose) === null || u === void 0 || u.call(r);
    },
    maxZoom: r.maxZoom
  })), r.images && import_react2.default.createElement("div", {
    className: `${Ia}-footer`
  }, (n = r.renderFooter) === null || n === void 0 ? void 0 : n.call(r, r.images[i], i), import_react2.default.createElement(br, {
    position: "bottom"
  })));
  return gr(r.getContainer, c);
}), ar = /* @__PURE__ */ new Set();
function nx(e10) {
  nc();
  let t = wr(import_react2.default.createElement(tm, Object.assign({}, e10, {
    afterClose: () => {
      var n;
      ar.delete(t), (n = e10.afterClose) === null || n === void 0 || n.call(e10);
    }
  })));
  return ar.add(t), t;
}
function rx(e10) {
  nc();
  let t = wr(import_react2.default.createElement(nm, Object.assign({}, e10, {
    afterClose: () => {
      var n;
      ar.delete(t), (n = e10.afterClose) === null || n === void 0 || n.call(e10);
    }
  })));
  return ar.add(t), t;
}
function nc() {
  ar.forEach((e10) => {
    e10.close();
  }), ar.clear();
}
var ix = ie(nm, {
  show: rx
}), ax = ie(tm, {
  Multi: ix,
  show: nx,
  clear: nc
});
var hn = "adm-space", sx = {
  direction: "horizontal"
}, lx = (e10) => {
  let t = Z(sx, e10), {
    direction: n,
    onClick: r
  } = t;
  return j(t, import_react2.default.createElement("div", {
    className: V(hn, {
      [`${hn}-wrap`]: t.wrap,
      [`${hn}-block`]: t.block,
      [`${hn}-${n}`]: !0,
      [`${hn}-align-${t.align}`]: !!t.align,
      [`${hn}-justify-${t.justify}`]: !!t.justify
    }),
    onClick: r
  }, import_react2.default.Children.map(t.children, (i) => i != null && import_react2.default.createElement("div", {
    className: `${hn}-item`
  }, i))));
}, rc = lx, wt = "adm-image-uploader", cx = {
  disableUpload: !1,
  deletable: !0,
  deleteIcon: import_react2.default.createElement(Ci, {
    className: `${wt}-cell-delete-icon`
  }),
  showUpload: !0,
  multiple: !1,
  maxCount: 0,
  defaultValue: [],
  accept: "image/*",
  preview: !0,
  showFailed: !0,
  imageFit: "cover"
};
var rm = () => null, Zn = "adm-index-bar", fx = (e10) => {
  let [t, n] = (0, import_react2.useState)(!1);
  return import_react2.default.createElement("div", {
    className: V(`${Zn}-sidebar`, {
      [`${Zn}-sidebar-interacting`]: t
    }),
    onMouseDown: () => {
      n(!0);
    },
    onMouseUp: () => {
      n(!1);
    },
    onTouchStart: () => {
      n(!0);
    },
    onTouchEnd: () => {
      n(!1);
    },
    onTouchMove: (r) => {
      if (!t)
        return;
      let {
        clientX: i,
        clientY: a
      } = r.touches[0], o = document.elementFromPoint(i, a);
      if (!o)
        return;
      let s = o.dataset.index;
      s && e10.onActive(s);
    }
  }, e10.indexItems.map(({
    index: r,
    brief: i
  }) => {
    let a = r === e10.activeIndex;
    return import_react2.default.createElement("div", {
      className: `${Zn}-sidebar-row`,
      onMouseDown: () => {
        e10.onActive(r);
      },
      onTouchStart: () => {
        e10.onActive(r);
      },
      onMouseEnter: () => {
        t && e10.onActive(r);
      },
      "data-index": r,
      key: r
    }, t && a && import_react2.default.createElement("div", {
      className: `${Zn}-sidebar-bubble`
    }, i), import_react2.default.createElement("div", {
      className: V(`${Zn}-sidebar-item`, {
        [`${Zn}-sidebar-item-active`]: a
      }),
      "data-index": r
    }, import_react2.default.createElement("div", null, i)));
  }));
}, Hn = "adm-index-bar", dx = {
  sticky: !0
}, mx = (0, import_react2.forwardRef)((e10, t) => {
  let n = Z(dx, e10), r = Qt(35), i = (0, import_react2.useRef)(null), a = [], o = [];
  sn(n.children, (f) => {
    var m;
    if (import_react2.default.isValidElement(f)) {
      if (f.type !== rm) {
        Le("IndexBar", "The children of `IndexBar` must be `IndexBar.Panel` components.");
        return;
      }
      a.push({
        index: f.props.index,
        brief: (m = f.props.brief) !== null && m !== void 0 ? m : f.props.index.charAt(0)
      }), o.push(j(f.props, import_react2.default.createElement("div", {
        key: f.props.index,
        "data-index": f.props.index,
        className: `${Hn}-anchor`
      }, import_react2.default.createElement("div", {
        className: `${Hn}-anchor-title`
      }, f.props.title || f.props.index), f.props.children)));
    }
  });
  let [s, c] = (0, import_react2.useState)(() => {
    let f = a[0];
    return f ? f.index : null;
  });
  (0, import_react2.useImperativeHandle)(t, () => ({
    scrollTo: u
  }));
  function u(f) {
    var m;
    let g = i.current;
    if (!g)
      return;
    let p = g.children;
    for (let h = 0; h < p.length; h++) {
      let b = p.item(h);
      if (!!b && b.dataset.index === f) {
        g.scrollTop = b.offsetTop, c(f), s !== f && ((m = n.onIndexChange) === null || m === void 0 || m.call(n, f));
        return;
      }
    }
  }
  let {
    run: d
  } = za(() => {
    var f;
    let m = i.current;
    if (!m)
      return;
    let g = m.scrollTop, p = m.getElementsByClassName(`${Hn}-anchor`);
    for (let h = 0; h < p.length; h++) {
      let b = p.item(h);
      if (!b)
        continue;
      let w = b.dataset.index;
      if (!!w && b.offsetTop + b.clientHeight - r > g) {
        c(w), s !== w && ((f = n.onIndexChange) === null || f === void 0 || f.call(n, w));
        return;
      }
    }
  }, {
    wait: 50,
    trailing: !0,
    leading: !0
  });
  return j(n, import_react2.default.createElement("div", {
    className: V(`${Hn}`, {
      [`${Hn}-sticky`]: n.sticky
    })
  }, import_react2.default.createElement(fx, {
    indexItems: a,
    activeIndex: s,
    onActive: (f) => {
      u(f);
    }
  }), import_react2.default.createElement("div", {
    className: `${Hn}-body`,
    ref: i,
    onScroll: d
  }, o)));
}), Kk = ie(mx, {
  Panel: rm
});
var ia = "adm-input", yx = {
  defaultValue: "",
  onlyShowClearWhenFocus: !0
}, bx = (0, import_react2.forwardRef)((e10, t) => {
  let n = Z(yx, e10), [r, i] = te(n), [a, o] = (0, import_react2.useState)(!1), s = (0, import_react2.useRef)(!1), c = (0, import_react2.useRef)(null), {
    locale: u
  } = $e();
  (0, import_react2.useImperativeHandle)(t, () => ({
    clear: () => {
      i("");
    },
    focus: () => {
      var g;
      (g = c.current) === null || g === void 0 || g.focus();
    },
    blur: () => {
      var g;
      (g = c.current) === null || g === void 0 || g.blur();
    },
    get nativeElement() {
      return c.current;
    }
  }));
  let d = (g) => {
    var p;
    n.onEnterPress && (g.code === "Enter" || g.keyCode === 13) && n.onEnterPress(g), (p = n.onKeyDown) === null || p === void 0 || p.call(n, g);
  };
  Ce(() => {
    var g;
    if (n.enterKeyHint)
      return (g = c.current) === null || g === void 0 || g.setAttribute("enterkeyhint", n.enterKeyHint), () => {
        var p;
        (p = c.current) === null || p === void 0 || p.removeAttribute("enterkeyhint");
      };
  }, [n.enterKeyHint]);
  function f() {
    let g = r;
    n.type === "number" && (g = g && _e(parseFloat(g), n.min, n.max).toString()), g !== r && i(g);
  }
  let m = (() => !n.clearable || !r || n.readOnly ? !1 : n.onlyShowClearWhenFocus ? a : !0)();
  return j(n, import_react2.default.createElement("div", {
    className: V(`${ia}`, n.disabled && `${ia}-disabled`)
  }, import_react2.default.createElement("input", {
    ref: c,
    className: `${ia}-element`,
    value: r,
    onChange: (g) => {
      i(g.target.value);
    },
    onFocus: (g) => {
      var p;
      o(!0), (p = n.onFocus) === null || p === void 0 || p.call(n, g);
    },
    onBlur: (g) => {
      var p;
      o(!1), f(), (p = n.onBlur) === null || p === void 0 || p.call(n, g);
    },
    id: n.id,
    placeholder: n.placeholder,
    disabled: n.disabled,
    readOnly: n.readOnly,
    maxLength: n.maxLength,
    minLength: n.minLength,
    max: n.max,
    min: n.min,
    autoComplete: n.autoComplete,
    autoFocus: n.autoFocus,
    pattern: n.pattern,
    inputMode: n.inputMode,
    type: n.type,
    name: n.name,
    autoCapitalize: n.autoCapitalize,
    autoCorrect: n.autoCorrect,
    onKeyDown: d,
    onKeyUp: n.onKeyUp,
    onCompositionStart: (g) => {
      var p;
      s.current = !0, (p = n.onCompositionStart) === null || p === void 0 || p.call(n, g);
    },
    onCompositionEnd: (g) => {
      var p;
      s.current = !1, (p = n.onCompositionEnd) === null || p === void 0 || p.call(n, g);
    },
    onClick: n.onClick,
    step: n.step,
    role: n.role,
    "aria-valuenow": n["aria-valuenow"],
    "aria-valuemax": n["aria-valuemax"],
    "aria-valuemin": n["aria-valuemin"],
    "aria-label": n["aria-label"]
  }), m && import_react2.default.createElement("div", {
    className: `${ia}-clear`,
    onMouseDown: (g) => {
      g.preventDefault();
    },
    onClick: () => {
      var g, p;
      i(""), (g = n.onClear) === null || g === void 0 || g.call(n), D8() && s.current && (s.current = !1, (p = c.current) === null || p === void 0 || p.blur());
    },
    "aria-label": u.Input.clear
  }, import_react2.default.createElement(no, null))));
}), am = bx, yt = "adm-jumbo-tabs", wx = () => null, Ex = (e10) => {
  var t;
  let n = (0, import_react2.useRef)(null), r = (0, import_react2.useRef)(null), i = {}, a = null, o = [];
  sn(e10.children, (f, m) => {
    if (!import_react2.default.isValidElement(f))
      return;
    let g = f.key;
    if (typeof g != "string")
      return;
    m === 0 && (a = g);
    let p = o.push(f);
    i[g] = p - 1;
  });
  let [s, c] = te({
    value: e10.activeKey,
    defaultValue: (t = e10.defaultActiveKey) !== null && t !== void 0 ? t : a,
    onChange: (f) => {
      var m;
      f !== null && ((m = e10.onChange) === null || m === void 0 || m.call(e10, f));
    }
  }), {
    scrollLeft: u,
    animate: d
  } = m1(n, i[s]);
  return ki(() => {
    d(!0);
  }, r), j(e10, import_react2.default.createElement("div", {
    className: yt,
    ref: r
  }, import_react2.default.createElement("div", {
    className: `${yt}-header`
  }, import_react2.default.createElement(h1, {
    scrollTrackRef: n
  }), import_react2.default.createElement(ue.div, {
    className: `${yt}-tab-list`,
    ref: n,
    scrollLeft: u
  }, o.map((f) => j(f.props, import_react2.default.createElement("div", {
    key: f.key,
    className: `${yt}-tab-wrapper`
  }, import_react2.default.createElement("div", {
    onClick: () => {
      let {
        key: m
      } = f;
      f.props.disabled || m != null && c(m.toString());
    },
    className: V(`${yt}-tab`, {
      [`${yt}-tab-active`]: f.key === s,
      [`${yt}-tab-disabled`]: f.props.disabled
    })
  }, import_react2.default.createElement("div", {
    className: `${yt}-tab-title`
  }, f.props.title), import_react2.default.createElement("div", {
    className: `${yt}-tab-description`
  }, f.props.description))))))), o.map((f) => {
    if (f.props.children === void 0)
      return null;
    let m = f.key === s;
    return import_react2.default.createElement(yr, {
      key: f.key,
      active: m,
      forceRender: f.props.forceRender,
      destroyOnClose: f.props.destroyOnClose
    }, import_react2.default.createElement("div", {
      className: `${yt}-content`,
      style: {
        display: m ? "block" : "none"
      }
    }, f.props.children));
  })));
}, Yk = ie(Ex, {
  Tab: wx
});
var Cx = (e10) => {
  let {
    action: t
  } = e10;
  return j(e10.action, import_react2.default.createElement(nn, {
    key: t.key,
    onClick: e10.onAction,
    className: V("adm-modal-button", {
      "adm-modal-button-primary": e10.action.primary
    }),
    fill: e10.action.primary ? "solid" : "none",
    size: e10.action.primary ? "large" : "middle",
    block: !0,
    color: t.danger ? "danger" : "primary",
    loading: "auto",
    disabled: t.disabled
  }, t.text));
}, $x = {
  actions: [],
  closeOnAction: !1,
  closeOnMaskClick: !1,
  getContainer: null
}, om = (e10) => {
  let t = Z($x, e10), n = import_react2.default.createElement(import_react2.default.Fragment, null, !!t.image && import_react2.default.createElement("div", {
    className: Ft("image-container")
  }, import_react2.default.createElement(io, {
    src: t.image,
    alt: "modal header image",
    width: "100%"
  })), !!t.header && import_react2.default.createElement("div", {
    className: Ft("header")
  }, import_react2.default.createElement(ai, null, t.header)), !!t.title && import_react2.default.createElement("div", {
    className: Ft("title")
  }, t.title), import_react2.default.createElement("div", {
    className: Ft("content")
  }, typeof t.content == "string" ? import_react2.default.createElement(ai, null, t.content) : t.content), import_react2.default.createElement(rc, {
    direction: "vertical",
    block: !0,
    className: V(Ft("footer"), t.actions.length === 0 && Ft("footer-empty"))
  }, t.actions.map((r, i) => import_react2.default.createElement(Cx, {
    key: r.key,
    action: r,
    onAction: () => ye(void 0, void 0, void 0, function* () {
      var a, o, s;
      yield Promise.all([(a = r.onClick) === null || a === void 0 ? void 0 : a.call(r), (o = t.onAction) === null || o === void 0 ? void 0 : o.call(t, r, i)]), t.closeOnAction && ((s = t.onClose) === null || s === void 0 || s.call(t));
    })
  }))));
  return import_react2.default.createElement(z1, {
    className: V(Ft(), t.className),
    style: t.style,
    afterClose: t.afterClose,
    afterShow: t.afterShow,
    showCloseButton: t.showCloseButton,
    closeOnMaskClick: t.closeOnMaskClick,
    onClose: t.onClose,
    visible: t.visible,
    getContainer: t.getContainer,
    bodyStyle: t.bodyStyle,
    bodyClassName: V(Ft("body"), t.image && Ft("with-image"), t.bodyClassName),
    maskStyle: t.maskStyle,
    maskClassName: t.maskClassName,
    stopPropagation: t.stopPropagation,
    disableBodyScroll: t.disableBodyScroll,
    destroyOnClose: t.destroyOnClose,
    forceRender: t.forceRender
  }, n);
};
function Ft(e10 = "") {
  return "adm-modal" + (e10 && "-") + e10;
}
var zs = /* @__PURE__ */ new Set();
function ic(e10) {
  let t = wr(import_react2.default.createElement(om, Object.assign({}, e10, {
    afterClose: () => {
      var n;
      zs.delete(t.close), (n = e10.afterClose) === null || n === void 0 || n.call(e10);
    }
  })));
  return zs.add(t.close), t;
}
function xx(e10) {
  let t = {
    confirmText: mi().locale.Modal.ok
  }, n = Z(t, e10);
  return new Promise((r) => {
    ic(Object.assign(Object.assign({}, n), {
      closeOnAction: !0,
      actions: [{
        key: "confirm",
        text: n.confirmText,
        primary: !0
      }],
      onAction: n.onConfirm,
      onClose: () => {
        var i;
        (i = n.onClose) === null || i === void 0 || i.call(n), r();
      }
    }));
  });
}
var _x = {
  confirmText: "\u786E\u8BA4",
  cancelText: "\u53D6\u6D88"
};
function kx(e10) {
  let {
    locale: t
  } = mi(), n = Z(_x, {
    confirmText: t.common.confirm,
    cancelText: t.common.cancel
  }, e10);
  return new Promise((r) => {
    ic(Object.assign(Object.assign({}, n), {
      closeOnAction: !0,
      onClose: () => {
        var i;
        (i = n.onClose) === null || i === void 0 || i.call(n), r(!1);
      },
      actions: [{
        key: "confirm",
        text: n.confirmText,
        primary: !0,
        onClick: () => ye(this, void 0, void 0, function* () {
          var i;
          yield (i = n.onConfirm) === null || i === void 0 ? void 0 : i.call(n), r(!0);
        })
      }, {
        key: "cancel",
        text: n.cancelText,
        onClick: () => ye(this, void 0, void 0, function* () {
          var i;
          yield (i = n.onCancel) === null || i === void 0 ? void 0 : i.call(n), r(!1);
        })
      }]
    }));
  });
}
function Ox() {
  zs.forEach((e10) => {
    e10();
  });
}
var Qk = ie(om, {
  show: ic,
  alert: xx,
  confirm: kx,
  clear: Ox
}), zn = "adm-nav-bar", Sx = {
  backArrow: !0
}, Fx = (e10) => {
  let t = Z(Sx, e10), {
    back: n,
    backArrow: r
  } = t;
  return j(t, import_react2.default.createElement("div", {
    className: V(zn)
  }, import_react2.default.createElement("div", {
    className: `${zn}-left`,
    role: "button"
  }, n !== null && import_react2.default.createElement("div", {
    className: `${zn}-back`,
    onClick: t.onBack
  }, r && import_react2.default.createElement("span", {
    className: `${zn}-back-arrow`
  }, r === !0 ? import_react2.default.createElement(e8, null) : r), import_react2.default.createElement("span", {
    "aria-hidden": "true"
  }, n)), t.left), import_react2.default.createElement("div", {
    className: `${zn}-title`
  }, t.children), import_react2.default.createElement("div", {
    className: `${zn}-right`
  }, t.right)));
}, Jk = Fx, Pt = "adm-notice-bar", Px = {
  color: "default",
  delay: 2e3,
  speed: 50,
  wrap: !1,
  icon: import_react2.default.createElement(a8, null)
}, Nx = (0, import_react2.memo)((e10) => {
  let t = Z(Px, e10), n = (0, import_react2.useRef)(null), r = (0, import_react2.useRef)(null), [i, a] = (0, import_react2.useState)(!0), o = t.speed, s = (0, import_react2.useRef)(!0), c = (0, import_react2.useRef)(!1);
  function u() {
    if (s.current || t.wrap)
      return;
    let d = n.current, f = r.current;
    if (!d || !f)
      return;
    if (d.offsetWidth >= f.offsetWidth) {
      c.current = !1, f.style.removeProperty("transition-duration"), f.style.removeProperty("transform");
      return;
    }
    if (c.current)
      return;
    let m = !f.style.transform;
    f.style.transitionDuration = "0s", m ? f.style.transform = "translateX(0)" : f.style.transform = `translateX(${d.offsetWidth}px)`;
    let g = m ? f.offsetWidth : d.offsetWidth + f.offsetWidth;
    c.current = !0, f.style.transitionDuration = `${Math.round(g / o)}s`, f.style.transform = `translateX(-${f.offsetWidth}px)`;
  }
  return h6(() => {
    s.current = !1, u();
  }, t.delay), ki(() => {
    u();
  }, n), Ol(() => {
    u();
  }, r, {
    subtree: !0,
    childList: !0,
    characterData: !0
  }), i ? j(t, import_react2.default.createElement("div", {
    className: V(Pt, `${Pt}-${t.color}`, {
      [`${Pt}-wrap`]: t.wrap
    })
  }, t.icon && import_react2.default.createElement("span", {
    className: `${Pt}-left`
  }, t.icon), import_react2.default.createElement("span", {
    ref: n,
    className: `${Pt}-content`
  }, import_react2.default.createElement("span", {
    onTransitionEnd: () => {
      c.current = !1, u();
    },
    ref: r,
    className: `${Pt}-content-inner`
  }, t.content)), (t.closeable || t.extra) && import_react2.default.createElement("span", {
    className: `${Pt}-right`
  }, t.extra, t.closeable && import_react2.default.createElement("div", {
    className: `${Pt}-close`,
    onClick: () => {
      var d;
      a(!1), (d = t.onClose) === null || d === void 0 || d.call(t);
    }
  }, import_react2.default.createElement(Ci, {
    className: `${Pt}-close-icon`
  }))))) : null;
});
var Ir = "adm-page-indicator", Mx = {
  color: "primary",
  direction: "horizontal"
}, Ix = (0, import_react2.memo)((e10) => {
  let t = Z(Mx, e10), n = [];
  for (let r = 0; r < t.total; r++)
    n.push(import_react2.default.createElement("div", {
      key: r,
      className: V(`${Ir}-dot`, {
        [`${Ir}-dot-active`]: t.current === r
      })
    }));
  return j(t, import_react2.default.createElement("div", {
    className: V(Ir, `${Ir}-${t.direction}`, `${Ir}-color-${t.color}`)
  }, n));
}), Lx = Ix, bt = "adm-passcode-input", Nf = {
  defaultValue: "",
  length: 6,
  plain: !1,
  error: !1,
  seperated: !1,
  caret: !0
}, Dx = (0, import_react2.forwardRef)((e10, t) => {
  let n = Z(Nf, e10), r = n.length > 0 && n.length < 1 / 0 ? Math.floor(n.length) : Nf.length, {
    locale: i
  } = $e(), [a, o] = (0, import_react2.useState)(!1), [s, c] = te(n), u = (0, import_react2.useRef)(null), d = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    var h;
    s.length >= r && ((h = n.onFill) === null || h === void 0 || h.call(n, s));
  }, [s, r]);
  let f = () => {
    var h, b;
    n.keyboard || (h = d.current) === null || h === void 0 || h.focus(), o(!0), (b = n.onFocus) === null || b === void 0 || b.call(n);
  };
  (0, import_react2.useEffect)(() => {
    if (!a)
      return;
    let h = window.setTimeout(() => {
      var b;
      (b = u.current) === null || b === void 0 || b.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "smooth"
      });
    }, 100);
    return () => {
      window.clearTimeout(h);
    };
  }, [a]);
  let m = () => {
    var h;
    o(!1), (h = n.onBlur) === null || h === void 0 || h.call(n);
  };
  (0, import_react2.useImperativeHandle)(t, () => ({
    focus: () => {
      var h;
      return (h = u.current) === null || h === void 0 ? void 0 : h.focus();
    },
    blur: () => {
      var h, b;
      (h = u.current) === null || h === void 0 || h.blur(), (b = d.current) === null || b === void 0 || b.blur();
    }
  }));
  let g = () => {
    let h = [], b = s.split(""), w = b.length, C = _e(b.length, 0, r - 1);
    for (let v = 0; v < r; v++)
      h.push(import_react2.default.createElement("div", {
        className: V(`${bt}-cell`, {
          [`${bt}-cell-caret`]: n.caret && w === v && a,
          [`${bt}-cell-focused`]: C === v && a,
          [`${bt}-cell-dot`]: !n.plain && b[v]
        }),
        key: v
      }, b[v] && n.plain ? b[v] : ""));
    return h;
  }, p = V(bt, {
    [`${bt}-focused`]: a,
    [`${bt}-error`]: n.error,
    [`${bt}-seperated`]: n.seperated
  });
  return import_react2.default.createElement(import_react2.default.Fragment, null, j(n, import_react2.default.createElement("div", {
    ref: u,
    tabIndex: 0,
    className: p,
    onFocus: f,
    onBlur: m,
    role: "button",
    "aria-label": i.PasscodeInput.name
  }, import_react2.default.createElement("div", {
    className: `${bt}-cell-container`
  }, g()), import_react2.default.createElement("input", {
    ref: d,
    className: `${bt}-native-input`,
    value: s,
    type: "text",
    pattern: "[0-9]*",
    inputMode: "numeric",
    onChange: (h) => {
      c(h.target.value.slice(0, n.length));
    },
    "aria-hidden": !0
  }))), n.keyboard && import_react2.default.cloneElement(n.keyboard, {
    visible: a,
    onInput: (h) => {
      s.length < r && c((s + h).slice(0, n.length));
    },
    onDelete: () => {
      c(s.slice(0, -1));
    },
    onClose: () => {
      var h;
      (h = u.current) === null || h === void 0 || h.blur();
    }
  }));
});
var sm = (0, import_react2.createContext)(null), zx = {
  disabled: !1,
  defaultValue: null
}, Ux = (e10) => {
  let t = Z(zx, e10), [n, r] = te({
    value: t.value,
    defaultValue: t.defaultValue,
    onChange: (i) => {
      var a;
      i !== null && ((a = t.onChange) === null || a === void 0 || a.call(t, i));
    }
  });
  return import_react2.default.createElement(
    sm.Provider,
    {
      value: {
        value: n === null ? [] : [n],
        check: (i) => {
          r(i);
        },
        uncheck: () => {
        },
        disabled: t.disabled
      }
    },
    t.children
  );
}, pn = "adm-radio", qx = {
  defaultChecked: !1
}, Kx = (e10) => {
  let t = Z(qx, e10), n = (0, import_react2.useContext)(sm), [r, i] = te({
    value: t.checked,
    defaultValue: t.defaultChecked,
    onChange: t.onChange
  }), a = t.disabled, {
    value: o
  } = t;
  n && o !== void 0 && (lo && (e10.checked !== void 0 && Le("Radio", "When used within `Radio.Group`, the `checked` prop of `Radio` will not work."), e10.defaultChecked !== void 0 && Le("Radio", "When used within `Radio.Group`, the `defaultChecked` prop of `Radio` will not work.")), r = n.value.includes(o), i = (c) => {
    var u;
    c ? n.check(o) : n.uncheck(o), (u = t.onChange) === null || u === void 0 || u.call(t, c);
  }, a = a || n.disabled);
  let s = () => t.icon ? import_react2.default.createElement("div", {
    className: `${pn}-custom-icon`
  }, t.icon(r)) : import_react2.default.createElement("div", {
    className: `${pn}-icon`
  }, r && import_react2.default.createElement(q1, null));
  return j(t, import_react2.default.createElement("label", {
    className: V(pn, {
      [`${pn}-checked`]: r,
      [`${pn}-disabled`]: a,
      [`${pn}-block`]: t.block
    })
  }, import_react2.default.createElement(K1, {
    type: "radio",
    checked: r,
    onChange: i,
    disabled: a,
    id: t.id
  }), s(), t.children && import_react2.default.createElement("div", {
    className: `${pn}-content`
  }, t.children)));
}, oO = ie(Kx, {
  Group: Ux
}), Gx = () => import_react2.default.createElement("svg", {
  viewBox: "0 0 42 40",
  height: "1em",
  xmlns: "http://www.w3.org/2000/svg",
  style: {
    verticalAlign: "-0.125em"
  }
}, import_react2.default.createElement("path", {
  d: "m21 34-10.52 5.53a2 2 0 0 1-2.902-2.108l2.01-11.714-8.511-8.296a2 2 0 0 1 1.108-3.411l11.762-1.71 5.26-10.657a2 2 0 0 1 3.586 0l5.26 10.658L39.815 14a2 2 0 0 1 1.108 3.411l-8.51 8.296 2.009 11.714a2 2 0 0 1-2.902 2.109L21 34Z",
  fill: "currentColor",
  fillRule: "evenodd"
}));
var Yx = {
  count: 5,
  allowHalf: !1,
  character: import_react2.default.createElement(Gx, null),
  defaultValue: 0,
  readOnly: !1,
  allowClear: !0
};
var Re = "adm-result-page", t_ = {
  success: Qd,
  error: no,
  info: r1,
  waiting: e1,
  warning: n1
}, n_ = {
  status: "info",
  details: []
}, r_ = (e10) => {
  let t = Z(n_, e10), {
    status: n,
    title: r,
    description: i,
    details: a,
    icon: o,
    primaryButtonText: s,
    secondaryButtonText: c,
    onPrimaryButtonClick: u,
    onSecondaryButtonClick: d
  } = t, f = o || import_react2.default.createElement(t_[n]), [m, g] = (0, import_react2.useState)(!0), p = It(c), h = It(s);
  return j(t, import_react2.default.createElement("div", {
    className: Re
  }, import_react2.default.createElement("div", {
    className: `${Re}-header`
  }, import_react2.default.createElement("div", {
    className: `${Re}-icon`
  }, f), import_react2.default.createElement("div", {
    className: `${Re}-title`
  }, r), It(i) ? import_react2.default.createElement("div", {
    className: `${Re}-description`
  }, i) : null, a.length ? import_react2.default.createElement("div", {
    className: `${Re}-details`
  }, (m ? a.slice(0, 3) : a).map((b, w) => import_react2.default.createElement("div", {
    className: V(`${Re}-detail`, b.bold && `${Re}-detail-bold`),
    key: w
  }, import_react2.default.createElement("span", null, b.label), import_react2.default.createElement("span", null, b.value))), a.length > 3 && import_react2.default.createElement("div", {
    onClick: () => g((b) => !b)
  }, import_react2.default.createElement("div", {
    className: V(`${Re}-collapse`, !m && `${Re}-collapse-active`)
  }))) : null, import_react2.default.createElement("div", {
    className: `${Re}-bgWrapper`
  }, import_react2.default.createElement("div", {
    className: `${Re}-bg`
  }))), import_react2.default.createElement("div", {
    className: `${Re}-content`
  }, t.children), import_react2.default.createElement("div", {
    className: `${Re}-footer`
  }, p && import_react2.default.createElement(nn, {
    block: !0,
    color: "default",
    fill: "solid",
    size: "large",
    onClick: d,
    className: `${Re}-footer-btn`
  }, c), h && p && import_react2.default.createElement("div", {
    className: `${Re}-footer-space`
  }), h && import_react2.default.createElement(nn, {
    block: !0,
    color: "primary",
    fill: "solid",
    size: "large",
    onClick: u,
    className: `${Re}-footer-btn`
  }, s))));
}, i_ = "adm-result-page-card", a_ = (e10) => j(e10, import_react2.default.createElement("div", {
  className: V(`${i_}`)
}, e10.children)), cO = ie(r_, {
  Card: a_
}), Ut = "adm-search-bar", o_ = {
  clearable: !0,
  onlyShowClearWhenFocus: !1,
  showCancelButton: !1,
  defaultValue: "",
  clearOnCancel: !0,
  icon: import_react2.default.createElement(i8, null)
}, s_ = (0, import_react2.forwardRef)((e10, t) => {
  let {
    locale: n
  } = $e(), r = Z(o_, {
    cancelText: n.common.cancel
  }, e10), [i, a] = te(r), [o, s] = (0, import_react2.useState)(!1), c = (0, import_react2.useRef)(null), u = (0, import_react2.useRef)(!1);
  (0, import_react2.useImperativeHandle)(t, () => ({
    clear: () => {
      var f;
      return (f = c.current) === null || f === void 0 ? void 0 : f.clear();
    },
    focus: () => {
      var f;
      return (f = c.current) === null || f === void 0 ? void 0 : f.focus();
    },
    blur: () => {
      var f;
      return (f = c.current) === null || f === void 0 ? void 0 : f.blur();
    },
    get nativeElement() {
      var f, m;
      return (m = (f = c.current) === null || f === void 0 ? void 0 : f.nativeElement) !== null && m !== void 0 ? m : null;
    }
  }));
  let d = () => {
    let f;
    return typeof r.showCancelButton == "function" ? f = r.showCancelButton(o, i) : f = r.showCancelButton && o, f && import_react2.default.createElement("div", {
      className: `${Ut}-suffix`
    }, import_react2.default.createElement(nn, {
      fill: "none",
      className: `${Ut}-cancel-button`,
      onClick: () => {
        var m, g, p;
        r.clearOnCancel && ((m = c.current) === null || m === void 0 || m.clear()), (g = c.current) === null || g === void 0 || g.blur(), (p = r.onCancel) === null || p === void 0 || p.call(r);
      },
      onMouseDown: (m) => {
        m.preventDefault();
      }
    }, r.cancelText));
  };
  return j(r, import_react2.default.createElement("div", {
    className: V(Ut, {
      [`${Ut}-active`]: o
    })
  }, import_react2.default.createElement("div", {
    className: `${Ut}-input-box`
  }, r.icon && import_react2.default.createElement("div", {
    className: `${Ut}-input-box-icon`
  }, r.icon), import_react2.default.createElement(am, {
    ref: c,
    className: V(`${Ut}-input`, {
      [`${Ut}-input-without-icon`]: !r.icon
    }),
    value: i,
    onChange: a,
    maxLength: r.maxLength,
    placeholder: r.placeholder,
    clearable: r.clearable,
    onlyShowClearWhenFocus: r.onlyShowClearWhenFocus,
    onFocus: (f) => {
      var m;
      s(!0), (m = r.onFocus) === null || m === void 0 || m.call(r, f);
    },
    onBlur: (f) => {
      var m;
      s(!1), (m = r.onBlur) === null || m === void 0 || m.call(r, f);
    },
    onClear: r.onClear,
    type: "search",
    enterKeyHint: "search",
    onEnterPress: () => {
      var f, m;
      u.current || ((f = c.current) === null || f === void 0 || f.blur(), (m = r.onSearch) === null || m === void 0 || m.call(r, i));
    },
    "aria-label": n.SearchBar.name,
    onCompositionStart: () => {
      u.current = !0;
    },
    onCompositionEnd: () => {
      u.current = !1;
    }
  })), d()));
});
var l_ = (0, import_react2.memo)(() => import_react2.default.createElement("svg", {
  width: "17px",
  height: "13px",
  viewBox: "0 0 17 13",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, import_react2.default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, import_react2.default.createElement("g", {
  transform: "translate(-2832.000000, -1103.000000)",
  stroke: "#FFFFFF",
  strokeWidth: "3"
}, import_react2.default.createElement("g", {
  transform: "translate(2610.000000, 955.000000)"
}, import_react2.default.createElement("g", {
  transform: "translate(24.000000, 91.000000)"
}, import_react2.default.createElement("g", {
  transform: "translate(179.177408, 36.687816)"
}, import_react2.default.createElement("polyline", {
  points: "34.2767388 22 24.797043 31.4796958 21 27.6826527"
}))))))));
var Uo = (0, import_react2.memo)((e10) => j(e10, import_react2.default.createElement("svg", {
  viewBox: "0 0 30 30"
}, import_react2.default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, import_react2.default.createElement("path", {
  d: "M30,0 C13.4314575,3.04359188e-15 -2.02906125e-15,13.4314575 0,30 L0,30 L0,0 Z",
  fill: "var(--adm-color-background)",
  transform: "translate(15.000000, 15.000000) scale(-1, -1) translate(-15.000000, -15.000000) "
}))))), Ie = "adm-side-bar", f_ = () => null, d_ = (e10) => {
  var t;
  let n = null, r = [];
  sn(e10.children, (c, u) => {
    if (!import_react2.default.isValidElement(c))
      return;
    let d = c.key;
    typeof d == "string" && (u === 0 && (n = d), r.push(c));
  });
  let [i, a] = te({
    value: e10.activeKey,
    defaultValue: (t = e10.defaultActiveKey) !== null && t !== void 0 ? t : n,
    onChange: (c) => {
      var u;
      c !== null && ((u = e10.onChange) === null || u === void 0 || u.call(e10, c));
    }
  }), o = r[r.length - 1], s = o && o.key === i;
  return j(e10, import_react2.default.createElement("div", {
    className: Ie
  }, import_react2.default.createElement("div", {
    className: `${Ie}-items`
  }, r.map((c, u) => {
    let d = c.key === i, f = r[u - 1] && r[u - 1].key === i, m = r[u + 1] && r[u + 1].key === i;
    return j(c.props, import_react2.default.createElement("div", {
      key: c.key,
      onClick: () => {
        let {
          key: g
        } = c;
        g == null || c.props.disabled || a(g.toString());
      },
      className: V(`${Ie}-item`, {
        [`${Ie}-item-active`]: d,
        [`${Ie}-item-disabled`]: c.props.disabled
      })
    }, import_react2.default.createElement(import_react2.default.Fragment, null, f && import_react2.default.createElement(Uo, {
      className: `${Ie}-item-corner ${Ie}-item-corner-top`
    }), m && import_react2.default.createElement(Uo, {
      className: `${Ie}-item-corner ${Ie}-item-corner-bottom`
    })), import_react2.default.createElement(ws, {
      content: c.props.badge,
      className: `${Ie}-badge`
    }, import_react2.default.createElement("div", {
      className: `${Ie}-item-title`
    }, d && import_react2.default.createElement("div", {
      className: `${Ie}-item-highlight`
    }), c.props.title))));
  })), import_react2.default.createElement("div", {
    className: V(`${Ie}-extra-space`, s && `${Ie}-item-active-next-sibling`)
  }, s && import_react2.default.createElement(Uo, {
    className: `${Ie}-item-corner ${Ie}-item-corner-top`
  }))));
}, dO = ie(d_, {
  Item: f_
});
var fm = {}, sc = { exports: {} }, dm = { exports: {} };
(function(e10) {
  function t(n) {
    if (Array.isArray(n))
      return n;
  }
  e10.exports = t, e10.exports.__esModule = !0, e10.exports.default = e10.exports;
})(dm);
var mm = { exports: {} };
(function(e10) {
  function t(n, r) {
    var i = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (i != null) {
      var a, o, s, c, u = [], d = !0, f = !1;
      try {
        if (s = (i = i.call(n)).next, r === 0) {
          if (Object(i) !== i)
            return;
          d = !1;
        } else
          for (; !(d = (a = s.call(i)).done) && (u.push(a.value), u.length !== r); d = !0)
            ;
      } catch (m) {
        f = !0, o = m;
      } finally {
        try {
          if (!d && i.return != null && (c = i.return(), Object(c) !== c))
            return;
        } finally {
          if (f)
            throw o;
        }
      }
      return u;
    }
  }
  e10.exports = t, e10.exports.__esModule = !0, e10.exports.default = e10.exports;
})(mm);
var hm = { exports: {} }, pm = { exports: {} };
(function(e10) {
  function t(n, r) {
    (r == null || r > n.length) && (r = n.length);
    for (var i = 0, a = new Array(r); i < r; i++)
      a[i] = n[i];
    return a;
  }
  e10.exports = t, e10.exports.__esModule = !0, e10.exports.default = e10.exports;
})(pm);
(function(e10) {
  var t = pm.exports;
  function n(r, i) {
    if (r) {
      if (typeof r == "string")
        return t(r, i);
      var a = Object.prototype.toString.call(r).slice(8, -1);
      if (a === "Object" && r.constructor && (a = r.constructor.name), a === "Map" || a === "Set")
        return Array.from(r);
      if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
        return t(r, i);
    }
  }
  e10.exports = n, e10.exports.__esModule = !0, e10.exports.default = e10.exports;
})(hm);
var vm = { exports: {} };
(function(e10) {
  function t() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  e10.exports = t, e10.exports.__esModule = !0, e10.exports.default = e10.exports;
})(vm);
(function(e10) {
  var t = dm.exports, n = mm.exports, r = hm.exports, i = vm.exports;
  function a(o, s) {
    return t(o) || n(o, s) || r(o, s) || i();
  }
  e10.exports = a, e10.exports.__esModule = !0, e10.exports.default = e10.exports;
})(sc);
var lc = {}, x_ = Bi.exports.default;
Object.defineProperty(lc, "__esModule", {
  value: !0
});
lc.default = __;
var Af = x_(import_react2.default);
function __(e10) {
  var t = Af.useRef();
  t.current = e10;
  var n = Af.useCallback(function() {
    for (var r, i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(a));
  }, []);
  return n;
}
var or = {}, cc = {};
Object.defineProperty(cc, "__esModule", {
  value: !0
});
cc.default = k_;
function k_() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var O_ = Wi.exports.default, S_ = Bi.exports.default;
Object.defineProperty(or, "__esModule", {
  value: !0
});
or.useLayoutUpdateEffect = or.default = void 0;
var Ks = S_(import_react2.default), F_ = O_(cc), Gs = (0, F_.default)() ? Ks.useLayoutEffect : Ks.useEffect, P_ = Gs;
or.default = P_;
var N_ = function(t, n) {
  var r = Ks.useRef(!0);
  Gs(function() {
    if (!r.current)
      return t();
  }, n), Gs(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
};
or.useLayoutUpdateEffect = N_;
var uc = {}, A_ = Bi.exports.default, T_ = Wi.exports.default;
Object.defineProperty(uc, "__esModule", {
  value: !0
});
uc.default = M_;
var R_ = T_(sc.exports), Yo = A_(import_react2.default);
function M_(e10) {
  var t = Yo.useRef(!1), n = Yo.useState(e10), r = (0, R_.default)(n, 2), i = r[0], a = r[1];
  Yo.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function o(s, c) {
    c && t.current || a(s);
  }
  return [i, o];
}
var fc = Wi.exports.default;
Object.defineProperty(fm, "__esModule", {
  value: !0
});
var I_ = fm.default = L_, Tf = fc(sc.exports), Rf = fc(lc), Mf = or, If = fc(uc);
function Xo(e10) {
  return e10 !== void 0;
}
function L_(e10, t) {
  var n = t || {}, r = n.defaultValue, i = n.value, a = n.onChange, o = n.postState, s = (0, If.default)(function() {
    return Xo(i) ? i : Xo(r) ? typeof r == "function" ? r() : r : typeof e10 == "function" ? e10() : e10;
  }), c = (0, Tf.default)(s, 2), u = c[0], d = c[1], f = i !== void 0 ? i : u, m = o ? o(f) : f, g = (0, Rf.default)(a), p = (0, If.default)([f]), h = (0, Tf.default)(p, 2), b = h[0], w = h[1];
  (0, Mf.useLayoutUpdateEffect)(function() {
    var v = b[0];
    u !== v && g(u, v);
  }, [b]), (0, Mf.useLayoutUpdateEffect)(function() {
    Xo(i) || d(i);
  }, [i]);
  var C = (0, Rf.default)(function(v, y) {
    d(v, y), w([f], y);
  });
  return [m, C];
}
var yn = "adm-step", V_ = (e10) => {
  let {
    title: t,
    description: n,
    icon: r,
    status: i = "wait"
  } = e10;
  return j(e10, import_react2.default.createElement("div", {
    className: V(`${yn}`, `${yn}-status-${i}`)
  }, import_react2.default.createElement("div", {
    className: `${yn}-indicator`
  }, import_react2.default.createElement("div", {
    className: `${yn}-icon-container`
  }, r)), import_react2.default.createElement("div", {
    className: `${yn}-content`
  }, import_react2.default.createElement("div", {
    className: `${yn}-title`
  }, t), !!n && import_react2.default.createElement("div", {
    className: `${yn}-description`
  }, n))));
}, Lf = "adm-steps", j_ = "adm-step", B_ = import_react2.default.createElement("span", {
  className: `${j_}-icon-dot`
}), W_ = {
  current: 0,
  direction: "horizontal"
}, Z_ = (e10) => {
  let t = Z(W_, e10), {
    direction: n,
    current: r
  } = t, i = V(Lf, `${Lf}-${n}`);
  return j(t, import_react2.default.createElement("div", {
    className: i
  }, import_react2.default.Children.map(t.children, (a, o) => {
    var s;
    if (!import_react2.default.isValidElement(a))
      return a;
    let c = a.props, u = c.status || "wait";
    o < r ? u = c.status || "finish" : o === r && (u = c.status || "process");
    let d = (s = c.icon) !== null && s !== void 0 ? s : B_;
    return import_react2.default.cloneElement(a, {
      status: u,
      icon: d
    });
  })));
}, pO = ie(Z_, {
  Step: V_
}), qt = "adm-swipe-action", H_ = {
  rightActions: [],
  leftActions: [],
  closeOnTouchOutside: !0,
  closeOnAction: !0,
  stopPropagation: []
}, z_ = (0, import_react2.forwardRef)((e10, t) => {
  let n = Z(H_, e10), r = (0, import_react2.useRef)(null), i = (0, import_react2.useRef)(null), a = (0, import_react2.useRef)(null);
  function o(w) {
    let C = w.current;
    return C ? C.offsetWidth : 0;
  }
  function s() {
    return o(i);
  }
  function c() {
    return o(a);
  }
  let [{
    x: u
  }, d] = Ne(() => ({
    x: 0,
    config: {
      tension: 200,
      friction: 30
    }
  }), []), f = (0, import_react2.useRef)(!1), m = (0, import_react2.useRef)(null);
  function g() {
    var w;
    (w = m.current) === null || w === void 0 || w.call(m), f.current = !1;
  }
  let p = jt((w) => {
    var C;
    if (m.current = w.cancel, !w.intentional || (w.down && (f.current = !0), !f.current))
      return;
    let [v] = w.offset;
    if (w.last) {
      let y = s(), E = c(), $ = v + w.velocity[0] * w.direction[0] * 50;
      v > 0 ? $ = Math.max(0, $) : v < 0 ? $ = Math.min(0, $) : $ = 0;
      let k = Bl([-E, 0, y], $);
      d.start({
        x: k
      }), k !== 0 && ((C = e10.onActionsReveal) === null || C === void 0 || C.call(e10, k > 0 ? "left" : "right")), window.setTimeout(() => {
        f.current = !1;
      });
    } else
      d.start({
        x: v,
        immediate: !0
      });
  }, {
    from: () => [u.get(), 0],
    bounds: () => {
      let w = s();
      return {
        left: -c(),
        right: w
      };
    },
    axis: "x",
    preventScroll: !0,
    pointer: {
      touch: !0
    },
    triggerAllEvents: !0
  });
  function h() {
    d.start({
      x: 0
    }), g();
  }
  (0, import_react2.useImperativeHandle)(t, () => ({
    show: (w = "right") => {
      var C;
      w === "right" ? d.start({
        x: -c()
      }) : w === "left" && d.start({
        x: s()
      }), (C = e10.onActionsReveal) === null || C === void 0 || C.call(e10, w);
    },
    close: h
  })), (0, import_react2.useEffect)(() => {
    if (!n.closeOnTouchOutside)
      return;
    function w(C) {
      if (u.get() === 0)
        return;
      let v = r.current;
      v && !v.contains(C.target) && h();
    }
    return document.addEventListener("touchstart", w), () => {
      document.removeEventListener("touchstart", w);
    };
  }, [n.closeOnTouchOutside]);
  function b(w) {
    var C, v;
    let y = (C = w.color) !== null && C !== void 0 ? C : "light";
    return import_react2.default.createElement(nn, {
      key: w.key,
      className: `${qt}-action-button`,
      style: {
        "--background-color": (v = U_[y]) !== null && v !== void 0 ? v : y
      },
      onClick: (E) => {
        var $, k;
        n.closeOnAction && h(), ($ = w.onClick) === null || $ === void 0 || $.call(w, E), (k = n.onAction) === null || k === void 0 || k.call(n, w, E);
      }
    }, w.text);
  }
  return j(n, import_react2.default.createElement("div", Object.assign({
    className: qt
  }, p(), {
    ref: r,
    onClickCapture: (w) => {
      f.current && (w.stopPropagation(), w.preventDefault());
    }
  }), import_react2.default.createElement(ue.div, {
    className: `${qt}-track`,
    style: {
      x: u
    }
  }, tn(n.stopPropagation, import_react2.default.createElement("div", {
    className: `${qt}-actions ${qt}-actions-left`,
    ref: i
  }, n.leftActions.map(b))), import_react2.default.createElement("div", {
    className: `${qt}-content`,
    onClickCapture: (w) => {
      u.goal !== 0 && (w.preventDefault(), w.stopPropagation(), h());
    }
  }, import_react2.default.createElement(ue.div, {
    style: {
      pointerEvents: u.to((w) => w !== 0 && u.goal !== 0 ? "none" : "auto")
    }
  }, n.children)), tn(n.stopPropagation, import_react2.default.createElement("div", {
    className: `${qt}-actions ${qt}-actions-right`,
    ref: a
  }, n.rightActions.map(b))))));
}), U_ = {
  light: "var(--adm-color-light)",
  weak: "var(--adm-color-weak)",
  primary: "var(--adm-color-primary)",
  success: "var(--adm-color-success)",
  warning: "var(--adm-color-warning)",
  danger: "var(--adm-color-danger)"
};
var gm = (e10) => j(e10, import_react2.default.createElement("div", {
  className: "adm-swiper-item",
  onClick: e10.onClick
}, e10.children));
function q_(e10) {
  let [t, n] = (0, import_react2.useState)(e10), r = (0, import_react2.useRef)(t);
  return (0, import_react2.useEffect)(() => {
    r.current = t;
  }, [t]), [t, n, r];
}
function K_(e10, t) {
  let n = Object.keys(e10), r = Object.keys(t), i = /* @__PURE__ */ new Set([...n, ...r]), a = {};
  return i.forEach((o) => {
    let s = e10[o], c = t[o];
    typeof s == "function" && typeof c == "function" ? a[o] = function(...u) {
      s(...u), c(...u);
    } : a[o] = s || c;
  }), a;
}
var Nt = "adm-swiper", G_ = {
  mousedown: "onMouseDown",
  mousemove: "onMouseMove",
  mouseup: "onMouseUp"
}, Y_ = {
  defaultIndex: 0,
  allowTouchMove: !0,
  autoplay: !1,
  autoplayInterval: 3e3,
  loop: !1,
  direction: "horizontal",
  slideSize: 100,
  trackOffset: 0,
  stuckAtBoundary: !0,
  rubberband: !0,
  stopPropagation: []
}, oa, X_ = (0, import_react2.forwardRef)(_l((e10, t) => {
  let n = Z(Y_, e10), [r] = (0, import_react2.useState)({}), i = n.direction === "vertical", a = n.slideSize / 100, o = n.trackOffset / 100, {
    validChildren: s,
    count: c
  } = (0, import_react2.useMemo)(() => {
    let u = 0;
    return {
      validChildren: import_react2.default.Children.map(n.children, (f) => import_react2.default.isValidElement(f) ? f.type !== gm ? (Le("Swiper", "The children of `Swiper` must be `Swiper.Item` components."), null) : (u++, f) : null),
      count: u
    };
  }, [n.children]);
  return c === 0 || !s ? (Le("Swiper", "`Swiper` needs at least one child."), null) : () => {
    let u = n.loop;
    a * (c - 1) < 1 && (u = !1);
    let d = (0, import_react2.useRef)(null);
    function f() {
      let F = d.current;
      return F ? (i ? F.offsetHeight : F.offsetWidth) * n.slideSize / 100 : 0;
    }
    let [m, g] = (0, import_react2.useState)(n.defaultIndex);
    Va(() => {
      var F;
      (F = n.onIndexChange) === null || F === void 0 || F.call(n, m);
    }, [m]);
    let [p, h, b] = q_(!1);
    function w(F) {
      let R = 0, I = c - 1;
      return n.stuckAtBoundary && (R += o / a, I -= (1 - a - o) / a), _e(F, R, I);
    }
    let [{
      position: C
    }, v] = Ne(() => ({
      position: w(m) * 100,
      config: {
        tension: 200,
        friction: 30
      },
      onRest: () => {
        if (b.current || !u)
          return;
        let F = C.get(), R = 100 * c, I = Qo(F, R);
        I !== F && v.start({
          position: I,
          immediate: !0
        });
      }
    }), [c]), y = (0, import_react2.useRef)(null);
    function E() {
      var F;
      (F = y.current) === null || F === void 0 || F.call(y), b.current = !1;
    }
    let $ = jt((F) => {
      if (y.current = F.cancel, !F.intentional || (F.first && !oa && (oa = r), oa !== r))
        return;
      oa = F.last ? void 0 : r;
      let R = f();
      if (!R)
        return;
      let I = i ? 1 : 0, W = F.offset[I], G = F.direction[I], H = F.velocity[I];
      if (h(!0), !F.last)
        v.start({
          position: W * 100 / R,
          immediate: !0
        });
      else {
        let U = Math.floor(W / R), X = U + 1, K = Math.round((W + H * 2e3 * G) / R);
        k(_e(K, U, X)), window.setTimeout(() => {
          h(!1);
        });
      }
    }, {
      transform: ([F, R]) => [-F, -R],
      from: () => {
        let F = f();
        return [C.get() / 100 * F, C.get() / 100 * F];
      },
      triggerAllEvents: !0,
      bounds: () => {
        if (u)
          return {};
        let F = f(), R = w(0) * F, I = w(c - 1) * F;
        return i ? {
          top: R,
          bottom: I
        } : {
          left: R,
          right: I
        };
      },
      rubberband: n.rubberband,
      axis: i ? "y" : "x",
      preventScroll: !i,
      pointer: {
        touch: !0
      }
    });
    function k(F, R = !1) {
      let I = Math.round(F), W = u ? Qo(I, c) : _e(I, 0, c - 1);
      g(W), v.start({
        position: (u ? I : w(I)) * 100,
        immediate: R
      });
    }
    function A() {
      k(Math.round(C.get() / 100) + 1);
    }
    function P() {
      k(Math.round(C.get() / 100) - 1);
    }
    (0, import_react2.useImperativeHandle)(t, () => ({
      swipeTo: k,
      swipeNext: A,
      swipePrev: P
    })), Ce(() => {
      let F = s.length - 1;
      m > F && k(F, !0);
    });
    let {
      autoplay: N,
      autoplayInterval: T
    } = n;
    (0, import_react2.useEffect)(() => {
      if (!N || p)
        return;
      let F = window.setInterval(() => {
        A();
      }, T);
      return () => {
        window.clearInterval(F);
      };
    }, [N, T, p, c]);
    function O() {
      return u ? import_react2.default.createElement("div", {
        className: `${Nt}-track-inner`
      }, import_react2.default.Children.map(s, (F, R) => import_react2.default.createElement(ue.div, {
        className: `${Nt}-slide`,
        style: {
          [i ? "y" : "x"]: C.to((I) => {
            let W = -I + R * 100, G = c * 100, H = G / 2;
            return W = Qo(W + H, G) - H, `${W}%`;
          }),
          [i ? "top" : "left"]: `-${R * 100}%`
        }
      }, F))) : import_react2.default.createElement(ue.div, {
        className: `${Nt}-track-inner`,
        style: {
          [i ? "y" : "x"]: C.to((F) => `${-F}%`)
        }
      }, import_react2.default.Children.map(s, (F) => import_react2.default.createElement("div", {
        className: `${Nt}-slide`
      }, F)));
    }
    let _ = {
      "--slide-size": `${n.slideSize}%`,
      "--track-offset": `${n.trackOffset}%`
    }, x = Object.assign({}, n.allowTouchMove ? $() : {}), S = {};
    for (let F of n.stopPropagation) {
      let R = G_[F];
      S[R] = function(I) {
        I.stopPropagation();
      };
    }
    let M = K_(x, S);
    return j(n, import_react2.default.createElement("div", {
      className: V(Nt, `${Nt}-${n.direction}`),
      style: _
    }, import_react2.default.createElement("div", Object.assign({
      ref: d,
      className: V(`${Nt}-track`, {
        [`${Nt}-track-allow-touch-move`]: n.allowTouchMove
      }),
      onClickCapture: (F) => {
        b.current && F.stopPropagation(), E();
      }
    }, M), O()), n.indicator === void 0 ? import_react2.default.createElement("div", {
      className: `${Nt}-indicator`
    }, import_react2.default.createElement(Lx, Object.assign({}, n.indicatorProps, {
      total: c,
      current: m,
      direction: n.direction
    }))) : n.indicator(c, m)));
  };
}));
function Qo(e10, t) {
  let n = e10 % t;
  return n < 0 ? n + t : n;
}
var gO = ie(X_, {
  Item: gm
}), Q_ = (0, import_react2.memo)((e10) => j(e10, import_react2.default.createElement("svg", {
  width: "28px",
  height: "28px",
  viewBox: "0 0 28 28"
}, import_react2.default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, import_react2.default.createElement("g", {
  transform: "translate(-137.000000, -840.000000)",
  fill: "#1576FE"
}, import_react2.default.createElement("g", {
  transform: "translate(80.000000, 823.000000)"
}, import_react2.default.createElement("g", {
  transform: "translate(53.000000, 13.000000)"
}, import_react2.default.createElement("path", {
  d: "M17.9996753,31.5 C10.5556724,31.5 4.5,25.4443275 4.5,18.0003247 C4.5,10.5563219 10.5556724,4.5 17.9996753,4.5 C18.5355492,4.5 18.9702974,4.93474816 18.9702974,5.47062208 C18.9702974,6.006496 18.5355492,6.44124416 17.9996753,6.44124416 C11.6261524,6.44124416 6.44124416,11.6267709 6.44124416,18.0002938 C6.44124416,24.3738167 11.6261524,29.5587249 17.9996753,29.5587249 C24.3731982,29.5587249 29.5587249,24.3738167 29.5587249,18.0002938 C29.5587249,14.7964616 28.2778291,11.8169616 25.9523687,9.61220279 C25.5637302,9.24317094 25.5473089,8.62893223 25.9157222,8.23967523 C26.2841356,7.84976878 26.8989928,7.83461537 27.2882498,8.20302872 C30.0042351,10.7787368 31.5,14.2580826 31.5,18.0002938 C31.5,25.4443275 25.4436781,31.5 17.9996753,31.5 Z"
})))))))), bn = "adm-switch", J_ = {
  defaultChecked: !1
}, ek = (e10) => {
  let t = Z(J_, e10), n = t.disabled || t.loading || !1, [r, i] = (0, import_react2.useState)(!1), {
    locale: a
  } = $e(), [o, s] = te({
    value: t.checked,
    defaultValue: t.defaultChecked,
    onChange: t.onChange
  });
  function c() {
    return ye(this, void 0, void 0, function* () {
      if (n || t.loading || r)
        return;
      let u = !o;
      if (t.beforeChange) {
        i(!0);
        try {
          yield t.beforeChange(u), i(!1);
        } catch (f) {
          throw i(!1), f;
        }
      }
      let d = s(u);
      if (f1(d)) {
        i(!0);
        try {
          yield d, i(!1);
        } catch (f) {
          throw i(!1), f;
        }
      }
    });
  }
  return j(t, import_react2.default.createElement("div", {
    onClick: c,
    className: V(bn, {
      [`${bn}-checked`]: o,
      [`${bn}-disabled`]: n || r
    }),
    role: "switch",
    "aria-label": a.Switch.name,
    "aria-checked": o,
    "aria-disabled": n
  }, import_react2.default.createElement("div", {
    className: `${bn}-checkbox`
  }, import_react2.default.createElement("div", {
    className: `${bn}-handle`
  }, (t.loading || r) && import_react2.default.createElement(Q_, {
    className: `${bn}-spin-icon`
  })), import_react2.default.createElement("div", {
    className: `${bn}-inner`
  }, o ? t.checkedText : t.uncheckedText))));
}, yO = ek, tk = () => null, At = "adm-tab-bar", nk = {
  safeArea: !1
}, rk = (e10) => {
  var t;
  let n = Z(nk, e10), r = null, i = [];
  sn(n.children, (s, c) => {
    if (!import_react2.default.isValidElement(s))
      return;
    let u = s.key;
    typeof u == "string" && (c === 0 && (r = u), i.push(s));
  });
  let [a, o] = te({
    value: n.activeKey,
    defaultValue: (t = n.defaultActiveKey) !== null && t !== void 0 ? t : r,
    onChange: (s) => {
      var c;
      s !== null && ((c = n.onChange) === null || c === void 0 || c.call(n, s));
    }
  });
  return j(n, import_react2.default.createElement("div", {
    className: At
  }, import_react2.default.createElement("div", {
    className: `${At}-wrap`
  }, i.map((s) => {
    let c = s.key === a;
    function u() {
      let d = s.props.icon && import_react2.default.createElement("div", {
        className: `${At}-item-icon`
      }, typeof s.props.icon == "function" ? s.props.icon(c) : s.props.icon), f = s.props.title && import_react2.default.createElement("div", {
        className: V(`${At}-item-title`, Boolean(d) && `${At}-item-title-with-icon`)
      }, typeof s.props.title == "function" ? s.props.title(c) : s.props.title);
      return d ? import_react2.default.createElement(import_react2.default.Fragment, null, import_react2.default.createElement(ws, {
        content: s.props.badge,
        className: `${At}-icon-badge`
      }, d), f) : f ? import_react2.default.createElement(ws, {
        content: s.props.badge,
        className: `${At}-title-badge`
      }, f) : null;
    }
    return j(s.props, import_react2.default.createElement("div", {
      key: s.key,
      onClick: () => {
        let {
          key: d
        } = s;
        d != null && o(d.toString());
      },
      className: V(`${At}-item`, {
        [`${At}-item-active`]: c
      })
    }, u()));
  })), n.safeArea && import_react2.default.createElement(br, {
    position: "bottom"
  })));
}, bO = ie(rk, {
  Item: tk
});
var Jo = "adm-text-area", ym = {
  rows: 2,
  showCount: !1,
  autoSize: !1,
  defaultValue: ""
}, bm = (0, import_react2.forwardRef)((e10, t) => {
  let n = Z(ym, e10), {
    autoSize: r,
    showCount: i,
    maxLength: a
  } = n, [o, s] = te(Object.assign(Object.assign({}, n), {
    value: n.value === null ? "" : n.value
  }));
  n.value === null && e9("TextArea", "`value` prop on `TextArea` should not be `null`. Consider using an empty string to clear the component.");
  let c = (0, import_react2.useRef)(null);
  (0, import_react2.useImperativeHandle)(t, () => ({
    clear: () => {
      s("");
    },
    focus: () => {
      var m;
      (m = c.current) === null || m === void 0 || m.focus();
    },
    blur: () => {
      var m;
      (m = c.current) === null || m === void 0 || m.blur();
    },
    get nativeElement() {
      return c.current;
    }
  })), Ce(() => {
    if (!r)
      return;
    let m = c.current;
    if (!m)
      return;
    m.style.height = "auto";
    let g = m.scrollHeight;
    if (typeof r == "object") {
      let p = window.getComputedStyle(m), h = parseFloat(p.lineHeight);
      r.minRows && (g = Math.max(g, r.minRows * h)), r.maxRows && (g = Math.min(g, r.maxRows * h));
    }
    m.style.height = `${g}px`;
  }, [o, r]);
  let u = (0, import_react2.useRef)(!1), d, f = [...o].length;
  return typeof i == "function" ? d = i(f, a) : i && (d = import_react2.default.createElement("div", {
    className: `${Jo}-count`
  }, a === void 0 ? f : f + "/" + a)), j(n, import_react2.default.createElement("div", {
    className: Jo
  }, import_react2.default.createElement("textarea", {
    ref: c,
    className: `${Jo}-element`,
    rows: n.rows,
    value: o,
    placeholder: n.placeholder,
    onChange: (m) => {
      let g = m.target.value;
      a && !u.current && (g = [...g].slice(0, a).join("")), s(g);
    },
    id: n.id,
    onCompositionStart: (m) => {
      var g;
      u.current = !0, (g = n.onCompositionStart) === null || g === void 0 || g.call(n, m);
    },
    onCompositionEnd: (m) => {
      var g;
      if (u.current = !1, a) {
        let p = m.target.value;
        s([...p].slice(0, a).join(""));
      }
      (g = n.onCompositionEnd) === null || g === void 0 || g.call(n, m);
    },
    autoComplete: n.autoComplete,
    autoFocus: n.autoFocus,
    disabled: n.disabled,
    readOnly: n.readOnly,
    name: n.name,
    onFocus: n.onFocus,
    onBlur: n.onBlur,
    onClick: n.onClick
  }), d));
});
bm.defaultProps = ym;
function Em(e10, t = "children") {
  let n = (r) => {
    let i = 0;
    return r.forEach((a) => {
      a[t] ? i = Math.max(i, n(a[t]) + 1) : i = Math.max(i, 1);
    }), i;
  };
  return n(e10);
}
var sa = "adm-tree-select", mk = {
  options: [],
  fieldNames: {},
  defaultValue: []
}, hk = (e10) => {
  let t = Z(mk, e10), n = t.fieldNames.label || "label", r = t.fieldNames.value || "value", i = t.fieldNames.children || "children", [a, o] = te({
    value: t.value,
    defaultValue: t.defaultValue
  }), [s, c, u] = (0, import_react2.useMemo)(() => {
    let g = Em(t.options, i), p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map();
    function b(w, C) {
      C.forEach((v) => {
        h.set(v[r], w), p.set(v[r], v), v[i] && b(v, v[i]);
      });
    }
    return b(void 0, t.options), [g, p, h];
  }, [t.options]), d = (g) => {
    var p;
    let h = [], b = g;
    for (; b; )
      h.push(b), b = u.get(b[r]);
    let w = h.reverse().map((C) => C[r]);
    o(w), (p = t.onChange) === null || p === void 0 || p.call(t, w, {
      options: h
    });
  }, f = (g = [], p) => g.map((h) => {
    let b = h[r] === a[p];
    return import_react2.default.createElement("div", {
      key: h[r],
      className: V(`${sa}-item`, {
        [`${sa}-item-active`]: b
      }),
      onClick: () => {
        b || d(h);
      }
    }, h[n]);
  }), m = () => {
    var g;
    let p = [];
    for (let h = 0; h < s; h++) {
      let b = `${100 / s}%`;
      s === 2 && h === 0 && (b = "33.33%"), s === 2 && h === 1 && (b = "66.67%");
      let w = import_react2.default.createElement("div", {
        key: h,
        className: V(`${sa}-column`),
        style: {
          width: b
        }
      }, f(h === 0 ? t.options : (g = c.get(a[h - 1])) === null || g === void 0 ? void 0 : g[i], h));
      p.push(w);
    }
    return p;
  };
  return j(t, import_react2.default.createElement("div", {
    className: sa
  }, m()));
}, tt = "adm-tree-select-multiple", pk = (e10) => {
  let t = Z({
    options: [],
    fieldNames: {},
    allSelectText: [],
    defaultExpandKeys: [],
    defaultValue: []
  }, e10);
  (0, import_react2.useEffect)(() => {
    Le("TreeSelect", "TreeSelect.Multiple has been deprecated.");
  }, []);
  let n = t.fieldNames.label || "label", r = t.fieldNames.value || "value", i = t.fieldNames.children || "children", [a, o] = te({
    value: t.expandKeys,
    defaultValue: t.defaultExpandKeys
  }), [s, c] = te({
    value: t.value,
    defaultValue: t.defaultValue
  }), u = (k) => {
    let A = [], P = (N) => {
      var T;
      !N || (!((T = N[i]) === null || T === void 0) && T.length ? N[i].forEach((O) => P(O)) : A.push(N[r]));
    };
    return P(k), A;
  }, [d, f, m] = (0, import_react2.useMemo)(() => {
    let k = Em(t.options, i), A = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map();
    function N(T, O) {
      O.forEach((_) => {
        P.set(_[r], T), A.set(_[r], _), _[i] && N(_, _[i]);
      });
    }
    return N(void 0, t.options), [k, A, P];
  }, [t.options]), g = (0, import_react2.useMemo)(() => {
    let k = [];
    return s.forEach((A) => {
      let P = f.get(A);
      k = k.concat(u(P));
    }), k;
  }, [s, f]), p = (0, import_react2.useMemo)(() => {
    let k = /* @__PURE__ */ new Map(), A = (P) => {
      let N = m.get(P);
      !N || (k.set(N[r], !0), A(N[r]));
    };
    return g.forEach((P) => {
      k.set(P, !0), A(P);
    }), k;
  }, [m, s]), h = (k) => {
    var A;
    let P = [...k], N = [], T = (_) => {
      _.forEach((x) => {
        var S;
        if (N.includes(x))
          return;
        let M = m.get(x);
        if (!M)
          return;
        let F = ((S = M[i]) === null || S === void 0 ? void 0 : S.map((R) => R[r])) || [];
        F.every((R) => P.includes(R)) && (P.push(M[r]), N = N.concat(F));
      });
    };
    for (let _ = 0; _ < d; _++)
      T(P);
    P = P.filter((_) => !N.includes(_));
    let O = P.map((_) => f.get(_));
    c(P), (A = t.onChange) === null || A === void 0 || A.call(t, P, O);
  }, b = (k) => {
    var A;
    let P = [], N = k;
    for (; N; )
      P.unshift(N), N = m.get(N[r]);
    let T = P.map((O) => O[r]);
    o(T), (A = t.onExpand) === null || A === void 0 || A.call(t, T, P);
  }, w = (k, A) => {
    var P;
    let N = (P = t.selectAllText) === null || P === void 0 ? void 0 : P[A];
    if (!N)
      return;
    let T = [];
    k.forEach((_) => {
      T = T.concat(u(_));
    });
    let O = T.every((_) => g.includes(_));
    return import_react2.default.createElement("div", {
      onClick: () => {
        h(O ? g.filter((_) => !T.includes(_)) : g.concat(T));
      },
      className: `${tt}-item`
    }, N);
  }, C = (k, A) => {
    var P;
    let N = (P = t.selectAllText) === null || P === void 0 ? void 0 : P[A];
    if (!N)
      return;
    let T = k.map((x) => x[r]), O = T.every((x) => g.includes(x)), _ = O ? !1 : T.some((x) => g.includes(x));
    return import_react2.default.createElement("div", {
      onClick: () => {
        h(O ? g.filter((x) => !T.includes(x)) : g.concat(T));
      },
      className: V(`${tt}-item`, `${tt}-item-leaf`)
    }, import_react2.default.createElement(zu, {
      className: `${tt}-item-checkbox`,
      checked: O,
      indeterminate: _
    }), N);
  }, v = (k) => {
    let A = a.includes(k[r]);
    return import_react2.default.createElement("div", {
      key: k[r],
      onClick: () => {
        A || b(k);
      },
      className: V(`${tt}-item`, {
        [`${tt}-item-expand`]: A
      })
    }, k[n], !!p.get(k[r]) && import_react2.default.createElement("div", {
      className: `${tt}-dot`
    }));
  }, y = (k) => {
    let A = g.includes(k[r]);
    return import_react2.default.createElement("div", {
      key: k[r],
      onClick: () => {
        h(A ? g.filter((P) => P !== k[r]) : [...g, k[r]]);
      },
      className: V(`${tt}-item`, `${tt}-item-leaf`)
    }, import_react2.default.createElement(zu, {
      className: `${tt}-item-checkbox`,
      checked: A
    }), k[n]);
  }, E = (k = [], A) => k.length === 0 ? void 0 : d === A + 1 ? import_react2.default.createElement(import_react2.default.Fragment, null, C(k, A), k.map((N) => y(N))) : import_react2.default.createElement(import_react2.default.Fragment, null, w(k, A), k.map((N) => v(N))), $ = () => {
    var k;
    let A = [];
    for (let P = 0; P < d; P++) {
      let N = `${100 / d}%`;
      d === 2 && P === 0 && (N = "33.33%"), d === 2 && P === 1 && (N = "66.67%");
      let T = import_react2.default.createElement("div", {
        key: P,
        className: V(`${tt}-column`),
        style: {
          width: N
        }
      }, E(P === 0 ? t.options : (k = f.get(a[P - 1])) === null || k === void 0 ? void 0 : k[i], P));
      A.push(T);
    }
    return A;
  };
  return j(t, import_react2.default.createElement("div", {
    className: tt
  }, $()));
}, $O = ie(hk, {
  Multiple: pk
}), wn = "adm-virtual-input", vk = {
  defaultValue: ""
}, gk = (0, import_react2.forwardRef)((e10, t) => {
  let n = Z(vk, e10), [r, i] = te(n), a = (0, import_react2.useRef)(null), o = (0, import_react2.useRef)(null), [s, c] = (0, import_react2.useState)(!1);
  function u() {
    let p = a.current;
    if (!p || document.activeElement !== p)
      return;
    let h = o.current;
    !h || (h.scrollLeft = h.clientWidth);
  }
  Ce(() => {
    u();
  }, [r]), (0, import_react2.useEffect)(() => {
    s && u();
  }, [s]), (0, import_react2.useImperativeHandle)(t, () => ({
    focus: () => {
      var p;
      (p = a.current) === null || p === void 0 || p.focus();
    },
    blur: () => {
      var p;
      (p = a.current) === null || p === void 0 || p.blur();
    }
  }));
  function d() {
    var p;
    c(!0), (p = n.onFocus) === null || p === void 0 || p.call(n);
  }
  function f() {
    var p;
    c(!1), (p = n.onBlur) === null || p === void 0 || p.call(n);
  }
  let m = n.keyboard, g = m && import_react2.default.cloneElement(m, {
    onInput: (p) => {
      var h, b;
      i(r + p), (b = (h = m.props).onInput) === null || b === void 0 || b.call(h, p);
    },
    onDelete: () => {
      var p, h;
      i(r.slice(0, -1)), (h = (p = m.props).onDelete) === null || h === void 0 || h.call(p);
    },
    visible: s,
    onClose: () => {
      var p, h, b;
      (p = a.current) === null || p === void 0 || p.blur(), (b = (h = m.props).onClose) === null || b === void 0 || b.call(h);
    },
    getContainer: null
  });
  return j(n, import_react2.default.createElement("div", {
    ref: a,
    className: V(wn, {
      [`${wn}-disabled`]: n.disabled
    }),
    tabIndex: n.disabled ? void 0 : 0,
    onFocus: d,
    onBlur: f,
    onClick: n.onClick
  }, import_react2.default.createElement("div", {
    className: `${wn}-content`,
    ref: o
  }, r, import_react2.default.createElement("div", {
    className: `${wn}-caret-container`
  }, s && import_react2.default.createElement("div", {
    className: `${wn}-caret`
  }))), n.clearable && !!r && s && import_react2.default.createElement("div", {
    className: `${wn}-clear`,
    onClick: (p) => {
      var h;
      p.stopPropagation(), i(""), (h = n.onClear) === null || h === void 0 || h.call(n);
    }
  }, import_react2.default.createElement(no, null)), !r && import_react2.default.createElement("div", {
    className: `${wn}-placeholder`
  }, n.placeholder), g));
});

// node_modules/.pnpm/antd-mobile@5.28.0_biqbaboplfbrettd7655fr4n2y/node_modules/antd-mobile/bundle/style.css
var style_default = "/build/_assets/style-FL4YQVC3.css";

// app/root.tsx
var import_react7 = require("react");

// app/components/bottom-panel.tsx
var import_antd_mobile_icons2 = require("antd-mobile-icons"), import_react_router_dom = require("react-router-dom");

// app/components/map-filter.tsx
var import_antd_mobile_icons = require("antd-mobile-icons"), import_react3 = require("react");
init_states();
var import_jsx_runtime2 = require("react/jsx-runtime");
function MapFilter() {
  let [filterPopup, toggleFilterPopup] = (0, import_react3.useState)(!1), {
    toggleAutoUpdateSBus,
    toggleSBusStops,
    toggleTransJStops,
    toggleSBus,
    toggleTransJ,
    autoUpdateSBus,
    showSBus,
    showTransJ,
    showSBusStops,
    showTransJStops
  } = useFilterState((state) => state);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Hk,
      {
        style: {
          "--initial-position-bottom": "60px",
          "--initial-position-right": "24px",
          "--edge-distance": "24px",
          zIndex: 999,
          position: "absolute"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd_mobile_icons.SetOutline, { fontSize: 32, onClick: () => toggleFilterPopup(!0) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      $i,
      {
        visible: filterPopup,
        position: "right",
        onMaskClick: () => {
          toggleFilterPopup(!1);
        },
        style: { zIndex: 9999 },
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { background: "#f5f5f5", height: "100%" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            $t,
            {
              mode: "card",
              header: "General",
              style: { marginTop: 0, minWidth: "30vw" },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                $t.Item,
                {
                  extra: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    yO,
                    {
                      defaultChecked: autoUpdateSBus,
                      onChange: toggleAutoUpdateSBus
                    }
                  ),
                  children: "Auto update Suroboyo-Bus"
                }
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            $t,
            {
              mode: "card",
              header: "Bus Positions",
              style: { marginTop: 0, minWidth: "30vw" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  $t.Item,
                  {
                    extra: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(yO, { defaultChecked: showSBus, onChange: toggleSBus }),
                    children: "Suroboyo-Bus"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  $t.Item,
                  {
                    extra: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(yO, { defaultChecked: showTransJ, onChange: toggleTransJ }),
                    children: "Trans Jatim"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            $t,
            {
              mode: "card",
              header: "Bus Stops",
              style: { marginTop: 0, minWidth: "30vw" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  $t.Item,
                  {
                    extra: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                      yO,
                      {
                        defaultChecked: showSBusStops,
                        onChange: toggleSBusStops
                      }
                    ),
                    children: "Suroboyo-Bus"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  $t.Item,
                  {
                    extra: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                      yO,
                      {
                        defaultChecked: showTransJStops,
                        onChange: toggleTransJStops
                      }
                    ),
                    children: "Trans Jatim"
                  }
                )
              ]
            }
          )
        ] })
      }
    )
  ] });
}

// app/components/bottom-panel.tsx
var import_jsx_runtime3 = require("react/jsx-runtime"), tabs = [
  {
    key: "/",
    title: "Home",
    icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd_mobile_icons2.TravelOutline, {})
  },
  {
    key: "/city-bus-routes",
    title: "City Bus Routes",
    icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd_mobile_icons2.ContentOutline, {})
  },
  {
    key: "/about",
    title: "About",
    icon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd_mobile_icons2.FaceRecognitionOutline, {})
  }
];
function BottomPanel() {
  let navigate = (0, import_react_router_dom.useNavigate)(), location = (0, import_react_router_dom.useLocation)(), { pathname } = location, setRouteActive = (value) => {
    navigate(value);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MapFilter, {}),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(bO, { activeKey: pathname, onChange: (value) => setRouteActive(value), children: tabs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(bO.Item, { icon: item.icon, title: item.title }, item.key)) })
  ] });
}

// app/style.css
var style_default2 = "/build/_assets/style-VD5UTBUW.css";

// app/components/navbar-left-panel.tsx
var import_react4 = require("react"), import_jsx_runtime4 = require("react/jsx-runtime");
function NavBarLeftPanel() {
  let [autoRefresh, toggleAutoRefresh] = (0, import_react4.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(rc, { style: { "--gap": "16px" } }) });
}

// app/components/navbar-right-panel.tsx
var import_antd_mobile_icons3 = require("antd-mobile-icons"), import_react5 = require("react"), import_jsx_runtime5 = require("react/jsx-runtime");
function NavBarRightPanel() {
  let [helpPopup, toggleHelpPopup] = (0, import_react5.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(rc, { style: { "--gap": "16px" }, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      nn,
      {
        style: { border: "none" },
        onClick: () => toggleHelpPopup(!0),
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_antd_mobile_icons3.QuestionCircleOutline, { fontSize: 24 })
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      $i,
      {
        visible: helpPopup,
        onMaskClick: () => {
          toggleHelpPopup(!1);
        },
        bodyStyle: {
          minHeight: "20vh",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: { padding: 10 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h4", { children: "How to use" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("ol", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: 'Turn on "auto-refresh" on the top right panel, or' }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: "Pull to refresh latest location" })
          ] })
        ] })
      }
    )
  ] });
}

// app/root.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function links() {
  return [
    { rel: "stylesheet", href: style_default },
    { rel: "stylesheet", href: style_default2 },
    {
      rel: "stylesheet",
      href: "https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
    }
  ];
}
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1,maximum-scale=1"
}), useBrowserLayoutEffect = typeof window < "u" ? import_react7.useLayoutEffect : () => {
};
async function loader() {
  return (0, import_node2.json)({
    ENV: {
      TRANSJ_TRACKER_ENDPOINT: process.env.TRANSJ_TRACKER_ENDPOINT,
      SBUS_TRACKER_ENDPOINT: process.env.SBUS_TRACKER_ENDPOINT
    }
  });
}
function App() {
  let useWindowSize = () => {
    let [size, setSize] = (0, import_react7.useState)([0, 0]);
    return useBrowserLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      return window.addEventListener("resize", updateSize), updateSize(), () => window.removeEventListener("resize", updateSize);
    }, []), size;
  }, [, windowHeight] = useWindowSize(), data = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react6.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react6.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "app", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "top", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          Jk,
          {
            right: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(NavBarRightPanel, {}),
            left: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(NavBarLeftPanel, {}),
            backArrow: !1,
            children: "Map"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: { height: windowHeight - 96 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react6.Outlet, {}),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react6.ScrollRestoration, {}),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react6.Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react6.LiveReload, {})
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "bottom", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(BottomPanel, {}) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react6.Scripts, {})
    ] })
  ] });
}

// app/routes/city-bus-routes.tsx
var city_bus_routes_exports = {};
__export(city_bus_routes_exports, {
  default: () => CityBusRoutes
});
var import_jsx_runtime7 = require("react/jsx-runtime");
function CityBusRoutes() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "full-height-container", children: "Routes" });
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
var import_jsx_runtime8 = require("react/jsx-runtime");
function About() {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "full-height-container", children: "Hello" });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react20 = require("react");

// app/components/lazy-load.tsx
var import_react8 = require("react"), import_jsx_runtime9 = require("react/jsx-runtime");
function ClientOnly({ children }) {
  let [mounted, setMounted] = (0, import_react8.useState)(!1);
  return (0, import_react8.useEffect)(() => {
    setMounted(!0);
  }, []), mounted ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_jsx_runtime9.Fragment, { children }) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_jsx_runtime9.Fragment, { children: "Loading..." });
}

// app/routes/index.tsx
var import_jsx_runtime13 = require("react/jsx-runtime"), Map3 = (0, import_react20.lazy)(() => Promise.resolve().then(() => (init_map_wrapper(), map_wrapper_exports)));
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ClientOnly, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react20.Suspense, { fallback: "", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Map3, {}) }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "59b08130", entry: { module: "/build/entry.client-YOWZUYQ7.js", imports: ["/build/_shared/chunk-OWBAWDB6.js", "/build/_shared/chunk-JRVWGHQB.js", "/build/_shared/chunk-OXU6VSUH.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-5AULYAYT.js", imports: ["/build/_shared/chunk-RO5NYSV5.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-NDMWG23D.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/city-bus-routes": { id: "routes/city-bus-routes", parentId: "root", path: "city-bus-routes", index: void 0, caseSensitive: void 0, module: "/build/routes/city-bus-routes-XOP2EG42.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-I62EU6Z6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-59B08130.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/city-bus-routes": {
    id: "routes/city-bus-routes",
    parentId: "root",
    path: "city-bus-routes",
    index: void 0,
    caseSensitive: void 0,
    module: city_bus_routes_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
