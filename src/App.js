import React from 'react'
import perform from './perform'
import pic from './img/KVL.jpg'

import './index.css'

const App = () => {
  return (
    <>
  
     <div id="whole_body" className=" w-10/12 h-auto ml-auto mr-auto ">
       <div class="relative w-full">
        <div class="  font-bold text-black px-4 rounded-lg text-5xl text-center h-auto mt-8 ">
          Experiment: Verification of Kirchoff's Voltage Law
        </div>
        
        </div>
        <form name="f1" id="f1">
          <div className="static w-full">
            <br />
            <div id="main_circuit" class="relative block w-7/12 mt-24">
              <img src={pic } className=" absolute border-2 border-white w-full" alt="pic" />
              <input type="number" name="r1" defaultValue={100} id="r1" className=" absolute w-12  left-64 ml-4 mt-28" />
              <input type="number" name="r2" defaultValue={150} id="r2" className="absolute w-12 right-56  mt-28"/>
              <input type="number" name="r3" defaultValue={200} id="r3" className="absolute w-11 left-72 -ml-2  mt-44" />
              <input type="number" name="v2" defaultValue={110} id="v2" className=" absolute w-12 right-10 mt-44" />
              <input type="number" name="v1" defaultValue={220} id="v1" className="absolute w-12 left-8 mt-44" />
              <input type="number" name="V1" defaultValue={0} id="V1" className=" absolute left-44 top-60 text-center bg-gradient-to-r from-blue w-14 text-black border-2 border-blue rounded-lg" readOnly="readonly" />
              <input type="number" name="V2" defaultValue={0} id="V2" className="absolute left-44 mt-1 text-center bg-gradient-to-r from-blue w-14 text-black border-2 border-blue rounded-lg" readOnly="readonly" />
              <input type="number" name="V3" defaultValue={0} id="V3" className="absolute right-52 mt-1 text-center bg-gradient-to-r from-blue w-14 text-black border-2 border-blue rounded-lg" readOnly="readonly" />
              <input type="number" name="V4" defaultValue={0} id="V4" className="absolute right-60 mr-10 mt-60 text-center bg-gradient-to-r from-blue w-14 text-black border-2 border-blue rounded-lg" readOnly="readonly" />
              <input type="number" name="V5" defaultValue={0} id="V5" className="absolute right-24 mr-4 mt-60 text-center bg-gradient-to-r from-blue w-14 text-black border-2 border-blue rounded-lg" readOnly="readonly" />
            </div>
            <div className=" float-right p-4 w-96 h-92 border-4 border-black rounded-xl  ">
              <div className=" font-bold text-3xl text-center">
                Instructions
              </div>
              <br />
              <div id="tab-content1" className="animated fadeIn">

                <ul  class="list-disc p-4 text-xl text-blue italic ">
                  <li class="mb-4">Input the values of Voltage sources &amp; Resistances </li>
                  <li> Then click on Run.</li>
                  </ul>
               
                <p className=" text-center"><input type="button" className="mt-12 mb-4 inline block text-center font-bold bg-gradient-to-r from-blue border-2 border-black  text-2xl px-2  rounded-2xl text-pink-800 " defaultValue="Verify" onClick={perform}/></p>
              </div>
            </div>
          </div>
          <div className=" text-center clear-both " />
          <div id="observation" className=" text-center w-11/12 mt-28  ">
            <h3 className="font-bold text-4xl  text-black mb-4 ">Observation Table</h3>
            <table cellSpacing={0} className="text-sm border-4 border-black center" >
              {/* cellspacing='0' is important, must stay */}
              <tbody><tr  >
                  <th class="bg-blue border-b-2 border-r-2 text-xl  border-black p-8" rowSpan={2}>SL No.</th>
                  <th class="bg-blue border-b-2 border-r-2 text-xl  border-black" colSpan={5}>Voltmeter Readings</th>
                  <th class="bg-blue border-b-2 border-r-2  text-xl  border-black" colSpan={2}>Verification of KVL </th>
                </tr>
                <tr>
                  <th class="bg-blue border-b-2 border-r-2   border-black">V1</th>
                  <th class="bg-blue border-b-2 border-r-2   border-black ">V2</th>
                  <th class="bg-blue border-b-2 border-r-2   border-black ">V3</th>
                  <th class="bg-blue border-b-2 border-r-2   border-black ">V4</th>
                  <th class="bg-blue border-b-2 border-r-2   border-black">V5</th>
                  <th class="bg-blue border-b-2 border-r-2   border-black">V2+V4 </th>
                  <th class="bg-blue border-b-2 border-r-2   border-black">-V3+V4 </th>
                </tr>
                <tr>
                  <td class="border-2 border-blue p-4 ">1</td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v11" defaultValue id="tr1" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v21" defaultValue id="tr2" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v31" defaultValue id="tr3" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v41" defaultValue id="tr4" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v51" defaultValue id="tr5" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="k11" defaultValue id="tr6" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="k21" defaultValue id="tr7" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                </tr>
                {/* Table Row */}
                <tr>
                  <td class="border-2 border-blue p-4"><strong>2</strong></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v12" defaultValue id="tr1" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v22" defaultValue id="tr2" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v32" defaultValue id="tr3" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v42" defaultValue id="tr4" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v52" defaultValue id="tr5" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="k12" defaultValue id="tr6" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"> <input type="number" name="k22" defaultValue id="tr7" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                </tr>
                <tr>
                  <td class="border-2 border-blue p-4"><strong>3</strong></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v13" defaultValue id="tr1" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v23" defaultValue id="tr2" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v33" defaultValue id="tr3" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v43" defaultValue id="tr4" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v53" defaultValue id="tr5" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="k13" defaultValue id="tr6" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="k23" defaultValue id="tr7" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                </tr>
                <tr>
                  <td class="border-2 border-blue p-4"><strong>4</strong></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v14" defaultValue id="tr1" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v24" defaultValue id="tr2" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v34" defaultValue id="tr3" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v44" defaultValue id="tr4" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v54" defaultValue id="tr5" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="k14" defaultValue id="tr6" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="k24" defaultValue id="tr7" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                </tr>
                <tr>
                  <td class="border-2 border-blue p-4"><strong>5</strong></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v15" defaultValue id="tr1" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v25" defaultValue id="tr2" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v35" defaultValue id="tr3" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v45" defaultValue id="tr4" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="v55" defaultValue id="tr5" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="k15" defaultValue id="tr6" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                  <td class="border-2 border-blue p-4"><input type="number" name="k25" defaultValue id="tr7" className="bg-transparent text-black text-center border-none w-20" readOnly="readonly" /></td>
                </tr>
              </tbody></table>
            <br />
            <br />
          </div>
          <div className="mb-8 ml-96">
            <input type="button" onclick="window.print()" defaultValue="Click here to print the observation table" className=" border-4 border-black w-auto p-2 font-bold bg-gradient-to-r from-blue text-pink-700	 text-xl   rounded-lg " />
           
          </div>
        </form>
      </div>
    
    </>
  )
}

export default App
