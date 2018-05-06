import React from 'react';
import PropType from 'prop-types';

import Classes from './style.scss';
import Input from '../Input/';

/**
 * Usage Example:
 * ```
 * <SelectBox
 * />
 * ```
 */
const SelectBox = props => {
    const {
        name,
        caption,
        options,
        userClass,
        userStyle,
        onClick,
        onChange,
    } = props;

    const clickHdl = (event, id) => {
        const el = event.currentTarget;

        if( el.classList.contains(Classes.activeselectholder) ) {
            el.classList.remove( Classes.activeselectholder );
        }
        else {
            el.classList.add( Classes.activeselectholder );
        }

        onClick();
    };

    const itemClickHdl = (event, key, label) => {
        const el = event.currentTarget,
            desc = el.parentNode.parentNode.childNodes[1],
            select = el.parentNode.parentNode.childNodes[0];

        desc.innerHTML = label;
        select.selectedIndex = key;
        onChange(select.value);
    };

    const cls = [...userClass, Classes.selectholder];

    let list = [],
        selectOptions = [];
    options.forEach( (item, key) => {
        list.push(<div onClick={e => itemClickHdl(e, key, item.label)}><span>{item.label}</span></div>);
        selectOptions.push(<option value={item.value}>{item.label}</option>);
    });

    return (
        <div className={cls.join(' ')} onClick={clickHdl}  style={userStyle}>
            <select name={name}>{selectOptions}</select>
            <span className={Classes.desc}>{caption}</span>
            <span className={Classes.pulldown}/>
            <div className={Classes.selectdropdown}>{list}</div>
        </div>
    );
};

SelectBox.propTypes = {
    name: PropType.string.isRequired,
    caption: PropType.string,
    options: PropType.array,
    userStyle: PropType.object,
    userClass: PropType.array,
    onClick: PropType.func,
    onChange: PropType.func,
};

SelectBox.defaultProps = {
    name: "input-name",
    caption: "Select One",
    options: [],
    userStyle: {},
    userClass: [],
    onClick: () => { console.log("On click triggered"); },
    onChange: (value) => { console.log("On change triggered: " + value); },
};

export default SelectBox;



/*
/blucube/pen/ytwjx?editors=0010
// set up select boxes
$('.selectholder').each(function(){
    // on click, show dropdown
    $(this).click(function(){
        if($(this).hasClass('activeselectholder')) {
            // roll up roll up
            $(this).children('.selectdropdown').slideUp(200);
            $(this).removeClass('activeselectholder');
            // change span back to selected option text
            if($(this).children('select').val() != '0') {
                $(this).children('.desc').fadeOut(100, function(){
                    $(this).text($(this).siblings("select").val());
                    $(this).fadeIn(100);
                });
            }
        }
        else {
            // if there are any other open dropdowns, close 'em
            $('.activeselectholder').each(function(){
                $(this).children('.selectdropdown').slideUp(200);
                // change span back to selected option text
                if($(this).children('select').val() != '0') {
                    $(this).children('.desc').fadeOut(100, function(){
                        $(this).text($(this).siblings("select").val());
                        $(this).fadeIn(100);
                    });
                }
                $(this).removeClass('activeselectholder');
            });
            // roll down
            $(this).children('.selectdropdown').slideDown(200);
            $(this).addClass('activeselectholder');
            // change span to show select box title while open
            if($(this).children('select').val() != '0') {
                $(this).children('.desc').fadeOut(100, function(){
                    $(this).text($(this).siblings("select").children("option[value=0]").text());
                    $(this).fadeIn(100);
                });
            }
        }
    });
});

// select dropdown click action
$('.selectholder .selectdropdown span').click(function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    var value = $(this).text();
    $(this).parent().siblings('select').val(value);
    $(this).parent().siblings('.desc').fadeOut(100, function(){
        $(this).text(value);
        $(this).fadeIn(100);
    });
});
 */