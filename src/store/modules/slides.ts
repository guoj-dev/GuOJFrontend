import Axios from '../../api/session';
import { Mutation, Action, Getter, State } from 'vuex-simple';

export interface Slide {
    Type: String,
    Color: String,
    Background: String,
    Title: String
}

export default class SlidesModule {
    @State()
    public Slides: Array<Slide> = [];

    @Mutation()
    public update_slides(NewSlides: Array<Slide>) {
        this.Slides = NewSlides;
    }

    @Action()
    public UpdateSlides() {
        return new Promise((resolve, reject) => {
            Axios.get('/api/notice/').then(Response => {
                const Slides = new Array<Slide>();
                for (const i in Response.data) {
                    var a: Slide = { Color: '', Title: '', Type: '', Background: '' };
                    a.Color = Response.data[i].Color;
                    a.Title = Response.data[i].Title;
                    a.Type = Response.data[i].Type;
                    a.Background = Response.data[i].Background;
                    Slides[i] = a;
                }
                this.update_slides(Slides);
                resolve(Response);
            });
        });
    }

    @Getter()
    public get SlidesObject() {
        return this.Slides;
    }
}
