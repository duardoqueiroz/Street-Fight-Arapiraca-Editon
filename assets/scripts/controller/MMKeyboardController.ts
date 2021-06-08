import KeyboardController from "./KeyboardController";

const {ccclass} = cc._decorator;

@ccclass
export default class MainmenuKeyboardController extends KeyboardController {
    
    protected onKeyDown(event: cc.Event.EventKeyboard) {
        switch (event.keyCode) {
            case cc.macro.KEY.enter:
                cc.director.loadScene("load_map");
                break;
        }
    }
    protected onKeyUp(event: cc.Event.EventKeyboard) {
        throw new Error("Method not implemented.");
    }

}