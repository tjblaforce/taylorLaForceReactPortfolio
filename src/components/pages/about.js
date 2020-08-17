import React from 'react';
import profilePicture from "../../../static/assets/images/bio/IMG_6330.jpg"

export default function () {
    return (
        <div className="content-page-wrapper">
            <div 
                className="left-column"
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />

            <div className="right-column">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam sem nec posuere tristique. Nullam a aliquet eros. Sed elementum egestas malesuada. Duis at 
                purus at arcu malesuada elementum. In sed nunc egestas, pellentesque ex at, malesuada ipsum. Mauris a augue dictum, tincidunt lectus a, varius quam. Donec auctor porta 
                erat a auctor. Etiam feugiat imperdiet tempus. Cras a ligula tellus. Vivamus sed sem dui. Morbi interdum, nulla a laoreet molestie, nunc sapien facilisis quam, sit amet 
                tempus velit metus egestas ex. Aliquam placerat imperdiet quam laoreet iaculis. Curabitur aliquet bibendum quam, vitae gravida est eleifend nec. Ut euismod vestibulum 
                neque sed pellentesque.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus elit ac lectus volutpat imperdiet. Nam nibh turpis, tincidunt accumsan dui ut, vehicula 
                scelerisque arcu. Sed lacinia pretium urna, in commodo nulla efficitur non. Ut in nisl vitae magna rutrum volutpat eu ornare orci. Morbi malesuada risus vitae nisl viverra,
                commodo auctor lectus porttitor. Donec commodo, dui nec mollis molestie, purus odio varius urna, nec porta ligula enim vitae lacus.
                Donec vitae risus ac tellus mattis sodales eu eu felis. Nunc vel purus sodales, interdum lectus vel, rhoncus diam. Curabitur convallis leo sit amet diam euismod laoreet. 
                Vestibulum cursus ante ac neque porttitor, pulvinar vestibulum lacus pellentesque. Mauris tempor, neque quis rutrum pellentesque, arcu lorem laoreet odio, quis luctus 
                augue justo eget elit. Nunc suscipit lorem quis metus venenatis, nec eleifend libero pretium. Sed at diam et turpis molestie aliquet id quis nulla. Vestibulum aliquam 
                lorem ac vestibulum hendrerit. Ut vehicula scelerisque leo, quis vehicula lorem consequat nec. Duis elementum facilisis tortor a interdum. Nam sollicitudin a purus in blandit. 
                Etiam molestie orci egestas enim aliquam, vitae ullamcorper purus lobortis. Mauris in malesuada augue. Praesent vehicula lobortis magna, eu tincidunt velit placerat posuere. 
                Ut quam nibh, vestibulum vitae dictum et, accumsan dictum dui.
            </div>
        </div>
    );
}