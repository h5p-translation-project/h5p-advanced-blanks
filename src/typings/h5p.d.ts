declare namespace H5P {
  class Event {
    constructor(type: string, data: any, extras: { bubbles: boolean, external: boolean });
    preventBubbling();
    getBubbles(): boolean;
    scheduleForExternal(): boolean;
  }

  class EventDispatcher {
    on(type: string, listener, thisArg: object);
    once(type: string, listener, thisArg: object);
    off(type: string, listener);
    call(type: string, event);
    trigger(event: string | Event, eventData: any, extras: { bubbles: boolean, external: boolean });
  }

  class Question extends EventDispatcher {

  }

  class JoubelSpeechBubble {
    constructor(elements, message: string);
  }

  var jQuery: any;
}

declare var H5PIntegration: any;
