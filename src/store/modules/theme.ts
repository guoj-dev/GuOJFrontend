import { Mutation, Action, Getter, State } from 'vuex-simple';

export default class ThemeModule {
    @State()
    public ThemeTree = {
        TopBar: {
            Dark: true,
            Color: 'blue',
            BackgroundImage:
                'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
        },
        SideBar: {
            Dark: true,
            Color: 'blue',
        },
        Global: {
            Dark: true,
            Color: 'white',
            BackgroundImage: 'https://s2.ax1x.com/2019/09/12/nBc7FO.jpg',
        },
        Usercard: {
            Dark: true,
            Color: 'blue',
            LoginButton: {
                Dark: true,
                Outlined: false,
                Rounded: false,
                Color: 'primary',
            },
            RegisterButton: {
                Dark: true,
                Outlined: false,
                Rounded: false,
                Color: 'green',
            },
        },
        Home: {
            Fortune: {
                Dark: true,
                ThemeColor: false,
                Color: 'white',
            },
            Hitokoto: {
                Dark: true,
                Color: 'primary',
            },
            ProblemNew: {
                Dark: true,
                Color: 'cyan',
            },
        },
        ProblemSet: {
            Dark: true,
            Color: 'light-blue light-1',
            Problem: {
                ProblemColor: false,
                Dark: true,
                Color: 'light-blue accent-4',
                Tags: {
                    Dark: true,
                    Outlined: false,
                },
            },
        },
        NotFound: {
            Dark: true,
            Color: 'primary',
        },
        Error: {
            Dark: true,
            Color: 'primary',
        },
    };
    @Getter()
    public get TopBar() {
        return this.ThemeTree.TopBar;
    }
    @Getter()
    public get SideBar() {
        return this.ThemeTree.SideBar;
    }
    @Getter()
    public get Global() {
        return this.ThemeTree.Global;
    }
    @Getter()
    public get Usercard() {
        return this.ThemeTree.Usercard;
    }
    @Getter()
    public get Home() {
        return this.ThemeTree.Home;
    }
    @Getter()
    public get NotFound() {
        return this.ThemeTree.NotFound;
    }
    @Getter()
    public get Error() {
        return this.ThemeTree.Error;
    }
    @Getter()
    public get ProblemSet() {
        return this.ThemeTree.ProblemSet;
    }
}
