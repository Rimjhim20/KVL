import React from 'react'

var count = 0;
var dr1, dr2, dr3, dr4, dr5, dr6, dr7, dr8;

export default function perform() {

    

    var r1, r2, r3, v1, v2;
    var i1, i2, k1, k2, v3, v4, v5;
    r1 = parseFloat(document.getElementById('r1').value);
    r2 = parseFloat(document.getElementById('r2').value);
    r3 = parseFloat(document.getElementById('r3').value);
    v1 = parseFloat(document.getElementById('v1').value);
    v2 = parseFloat(document.getElementById('v2').value);


    i1 = (v1 * (r2 + r3) + r3 * v2) / ((r1 + r3) * (r2 + r3) - r3 * r3);
    i2 = (v2 * (r1 + r3) + r3 * v1) / ((r1 + r3) * (r2 + r3) - r3 * r3);

    v3 = i1 * r1;
    v4 = (i1 - i2) * r3;
    v5 = i2 * r2;

    document.f1.V1.value = v1;
    console.log("hi there"+v3);
    document.f1.V5.value = v2;

    document.f1.V2.value = v3;
    document.f1.V3.value = v5;
    document.f1.V4.value = v4;


    count = count + 1;

    if (count === 1) {

        document.f1.v11.value = v1;
      console.log( document.f1.v11.value) ;
        document.f1.v21.value = v3;
        document.f1.v31.value = v5;
        document.f1.v41.value = v4;
        document.f1.v51.value = v2;

        document.f1.k11.value = v3 + v4;
        document.f1.k21.value = v5 - v4;
    } else if (count === 2) {

        document.f1.v12.value = v1;
        document.f1.v22.value = v3;
        document.f1.v32.value = v5;
        document.f1.v42.value = v4;
        document.f1.v52.value = v2;

        document.f1.k12.value = v3 + v4;
        document.f1.k22.value = v5 - v4;
    } else if (count === 3) {

        document.f1.v13.value = v1;
        document.f1.v23.value = v3;
        document.f1.v33.value = v5;
        document.f1.v43.value = v4;
        document.f1.v53.value = v2;

        document.f1.k13.value = v3 + v4;
        document.f1.k23.value = v5 - v4;
    } else if (count === 4) {

        document.f1.v14.value = v1;
        document.f1.v24.value = v3;
        document.f1.v34.value = v5;
        document.f1.v44.value = v4;
        document.f1.v54.value = v2;

        document.f1.k14.value = v3 + v4;
        document.f1.k24.value = v5 - v4;
    } else if (count === 5) {

        document.f1.v15.value = v1;
        document.f1.v25.value = v3;
        document.f1.v35.value = v5;
        document.f1.v45.value = v4;
        document.f1.v55.value = v2;

        document.f1.k15.value = v3 + v4;
        document.f1.k25.value = v5 - v4;
    } else
        alert("The observation table is full. Refresh the page to continue");



    if (count < 6)
        alert('Observation table updated');

    	// dr1=document.f1.A.value;
    	// 			dr2=document.f1.A.value * rl1;
    	// 		dr3=rl1;


}

export function printpage(){
    window.print()
}





