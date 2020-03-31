import { Mutation, Action, Getter, State } from "vuex-simple";

export interface WarnData {
    Color: String;
    Text: String;
    Timeout: Number;
}

export default class WarnModule {
    @State()
    color: String = "";

    @State()
    snackbar: Boolean = false;

    @State()
    text: String = "";

    @State()
    timeout: Number = 0;

    @Mutation()
    public addWarn(WarnData: WarnData) {
        this.color = WarnData.Color;
        this.snackbar = true;
        this.text = WarnData.Text;
        this.timeout = WarnData.Timeout;
    }

    @Mutation()
    public endWarn() {
        this.snackbar = false;
    }

    @Action()
    public AddWarn(WarnData:WarnData) {
        this.addWarn(WarnData);
    }

    @Action()
    public EndWarn() {
        this.endWarn();
    }

    @Getter()
    public get SnackbarEvent() {
        return this.snackbar;
    }

    @Getter()
    public get Color() {
        return this.color;
    }

    @Getter()
    public get Text() {
        return this.text;
    }

    @Getter()
    public get Timeout() {
        return this.timeout;
    }
}
