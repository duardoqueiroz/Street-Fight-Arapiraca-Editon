const { ccclass } = cc._decorator;

@ccclass
export default abstract class KeyboardController extends cc.Component {
  public onLoad(): void {
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  }

  public abstract onKeyDown(event: cc.Event.EventKeyboard): void;

  public abstract onKeyUp(event: cc.Event.EventKeyboard): void;
}
