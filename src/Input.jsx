import React, { useState } from 'react';

const Input = (props) => {
    const [isEdit, setIsEdit] = useState(false);


    const handleEdit = () => {
        // setIsEdit(!isEdit)
        // for (var i = 0; i > 5; i++) {
        //     console.log("first");
        //     setTimeout(console.log(i));
        //     console.log("second");
        // }

        let demostr = 'harshad mahajan good morning done';
        function titleCase(str) {
            var splitStr = str.toLowerCase().split(' ');
            console.log(splitStr)
            for (var i = 0; i < splitStr.length; i++) {
                // You do not need to check if i is larger than splitStr length, as your for does that for you
                // Assign it back to the array
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
            }
            // Directly return the joined string
            return splitStr.join(' ');
        }
        console.log(titleCase(demostr));
    }


    const handleDelete = () => {
        
        // let strrr = ['harshad', 'mahajan', 'good', 'morning', 'done'];
        let demostr = 'geeta omkar kulkarni most welcome';
        function titleCase(str) {
            var splitStr = str.toLowerCase().split(' ');
            console.log(splitStr)
            for (var i = 0; i < splitStr.length; i++) {
                // You do not need to check if i is larger than splitStr length, as your for does that for you
                // Assign it back to the array
                splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
            }
            // Directly return the joined string
            return splitStr.join(' ');
        }
        console.log(titleCase(demostr));



     // dynamic url   
        function createDynamicURL() {
            //The variables containing the respective IDs
            var companyID = ['harshad', 'mahajan', 'good', 'morning', 'done', 'nayan', 'vishal', 'geeta']
            var finalUrL = '&Category=';
            var list = [];
            for (var i = 0; i < companyID.length; i++) {
                list.push(finalUrL + companyID[i])
            }
            return list.join('');
        }
        console.log(createDynamicURL())



// lxical scop and clouser
        // function sum(a) {
        //     console.log("dfgfdg" + a)
        //     var b = 6;
        //     return function calldcemo(c) {
        //         console.log(a + b + c)
        //     }
        // }
        // var value = sum(3)
        // console.log(value(6))
        // console.log(sum(3))

    }



    const handleTextChange = (e) => {
        props.setTitle(e.target.value);
    }

    return (
        <div>Input
            {isEdit ?
                <h3>{props.title}</h3>
                :
                <input placeholder={props.title} defaultValue={props.title} onChange={(e) => handleTextChange(e)} />
            }
            <input placeholder={props.Desc} defaultValue={props.Desc} />
            <button onClick={() => handleEdit()}>Edit</button>
            <button onClick={() => handleDelete()}>Delete</button>
        </div>
    )
}

export default Input