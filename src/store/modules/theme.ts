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
            Cards: {
                Dark: true,
                Color: 'primary',
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
        BreadCrumbs: {
            Dark: false,
            Color: ''
        }
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
    @Getter()
    public get BreadCrumbs() {
        return this.ThemeTree.BreadCrumbs;
    }
    @Mutation()
    public set_classic() {
        this.ThemeTree = {
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
                Cards: {
                    Dark: true,
                    Color: 'primary',
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
            BreadCrumbs: {
                Dark: false,
                Color: ''
            }
        };
    }
    @Mutation()
    public set_light() {
        this.ThemeTree = {
            TopBar: {
                Dark: false,
                Color: 'white',
                BackgroundImage: '',
            },
            SideBar: {
                Dark: true,
                Color: 'black',
            },
            Global: {
                Dark: false,
                Color: 'white',
                BackgroundImage: '',
            },
            Usercard: {
                Dark: true,
                Color: 'blue',
                LoginButton: {
                    Dark: true,
                    Outlined: true,
                    Rounded: false,
                    Color: 'primary',
                },
                RegisterButton: {
                    Dark: true,
                    Outlined: true,
                    Rounded: false,
                    Color: 'green',
                },
            },
            Home: {
                Cards: {
                    Dark: false,
                    Color: 'white',
                },
            },
            ProblemSet: {
                Dark: false,
                Color: 'white',
                Problem: {
                    ProblemColor: false,
                    Dark: true,
                    Color: 'white',
                    Tags: {
                        Dark: true,
                        Outlined: true,
                    },
                },
            },
            NotFound: {
                Dark: false,
                Color: 'white',
            },
            Error: {
                Dark: false,
                Color: 'white',
            },
            BreadCrumbs: {
                Dark: false,
                Color: ''
            }
        };
    }
    @Mutation()
    public set_dark() {
        this.ThemeTree = {
            TopBar: {
                Dark: true,
                Color: 'black',
                BackgroundImage: '',
            },
            SideBar: {
                Dark: true,
                Color: 'grey darken-4',
            },
            Global: {
                Dark: true,
                Color: 'grey darken-3',
                BackgroundImage: '',
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
                Cards: {
                    Dark: true,
                    Color: '',
                },
            },
            ProblemSet: {
                Dark: true,
                Color: '',
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
                Color: '',
            },
            Error: {
                Dark: true,
                Color: '',
            },
            BreadCrumbs: {
                Dark: true,
                Color: ''
            }
        };
    }
    @Action()
    public SetClassic(){
        this.set_classic();
    }
    @Action()
    public SetLight(){
        this.set_light();
    }
    @Action()
    public SetDark(){
        this.set_dark();
    }
}
