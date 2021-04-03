import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

let drawerState = {
    Initial: 1,
    SlideIn: 2,
    SlideOut: 3,
};

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            drawerState: drawerState.Initial,
            brandName: 'Geetha Kalike',
        };
    }

    toggleDrawer = () => {
        let _drawerState = drawerState.Initial;
        switch (this.state.drawerState) {
            case drawerState.Initial: {
                _drawerState = drawerState.SlideIn;
                break;
            }
            case drawerState.SlideIn: {
                _drawerState = drawerState.SlideOut;
                break;
            }
            case drawerState.SlideOut: {
                _drawerState = drawerState.SlideIn;
            }
        }

        this.setState((state) => ({
            drawerState: _drawerState,
        }));
    };

    render() {
        return (
            <div className="navbar">
                <div className="navbar-background" />
                <i className="drawer-icon" onClick={this.toggleDrawer}>
                    menu
                </i>
                <h1 className="brand">{this.state.brandName}</h1>
                <div className="buttons-wrapper">
                    <Buttons />
                </div>

                <Drawer
                    drawerState={this.state.drawerState}
                    toggleDrawer={this.toggleDrawer}
                >
                    <Buttons />
                </Drawer>
            </div>
        );
    }
}

const Buttons = (props) => {
    return (
        <>

            
            <button >
                <Link to="/">Home</Link>
            </button>
            <button>
                <Link to="/settings">Settings</Link>
            </button>
            <button>
                <Link to="/share">Share with a friend</Link>
            </button>
            <button>
                <Link to="/contact">Contact Us</Link>
            </button>
        </>
    );
};

const Drawer = (props) => {
    let toggleDrawer = props.toggleDrawer;

    return (
        <div
            className={props.drawerState == drawerState.SlideIn ? 'drawer' : ''}
        >
            <DrawerMenu drawerState={props.drawerState}>
                {props.children}
            </DrawerMenu>
            <DrawerTapoutArea
                drawerState={props.drawerState}
                toggleDrawer={toggleDrawer}
            />
        </div>
    );
};

const DrawerMenu = (props) => {
    console.log(props);
    if (props.drawerState === drawerState.SlideIn) {
        return (
            <div className="drawer-menu animated slideInLeft">
                {props.children}
            </div>
        );
    }
    // else if (props.drawerState === drawerState.SlideOut)
    //     return (
    //         <div className="drawer-menu animated slideOutLeft">
    //             {props.children}
    //         </div>
    //     );
    else return <div />;
};

const DrawerTapoutArea = (props) => {
    return (
        <>
            {props.drawerState === drawerState.SlideIn ? (
                <div
                    className="drawer-tapout-area"
                    onClick={props.toggleDrawer}
                />
            ) : null}
        </>
    );
};
