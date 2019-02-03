import { Component } from 'react';
import bowser from 'bowser';
import get from 'lodash/get';

class BodyClasses extends Component{
    
    componentDidMount(){
        let desktop = false;
        let systemName = '';

        let browserName = get(bowser, 'name', '').toLowerCase().replace(/\s+/g, '_');
        let browserVersion = get(bowser, 'version', '').toLowerCase().replace(/\s+/g, '_');

        if (navigator.platform.match(/Mac/i) !== null) {
            systemName = 'mac';
            desktop = true;
        } else if (navigator.platform.match(/Win/i) !== null) {
            systemName = 'windows';
            desktop = true;
        }

        if (!desktop) {
            var userAgent = navigator.userAgent || navigator.vendor || window.opera;
            if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
                systemName = 'ios';
            }
            else if (userAgent.match(/Android/i)) {
                systemName = 'android';
            }
        }

        let hasScrollbar = (document.body.clientWidth !== window.outerWidth)? 'has-scrollbar' : 'without-scrollbar';

        document.body.classList.add(`browser_${browserName}`);
        document.body.classList.add(`browser_${browserName}_${browserVersion}`);
        document.body.classList.add(`system_${systemName}`);
        document.body.classList.add(hasScrollbar);
    }

    render(){
        return this.props.children
    }
}

export default BodyClasses;