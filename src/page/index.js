import React, {useState} from 'react';

const unitList = [{
    id: 1,
    name: 'length'
}]

const subUnit = [{
    id: 1,
    unitId: 1,
    code: 'M',
    name: 'meter'
},
{
    id: 2,
    unitId: 1,
    code: 'CM',
    name: 'centimeter'
},
]

const styles={
    borderRadius:'8px',
    border: '1px solid #dadce0',
    boxShadow: 'none',
}
let unitValue1 =0;
let unitValue2 =0;
let selectUnit1 =null;
let selectUnit2 =null;

function Index() {
    const [result, setResult] =useState(0);

    const calculcateUnit = (unitValue1, unitValue2, selectUnit1, selectUnit2) =>{
        let hasil = 0;
        console.log('unitValue1', unitValue1)
        if(selectUnit1 !== null && selectUnit2 !== null){
            console.log(selectUnit1.code);
            console.log(selectUnit2.code);
            if(selectUnit1.code !== selectUnit2.code && selectUnit1.code === 'M' && selectUnit2.code === 'CM'){
                hasil = Number(unitValue1)*100;
            }

            if(selectUnit1.code !== selectUnit2.code && selectUnit1.code === 'CM' &&  selectUnit2.code==='M'){
                hasil = Number(unitValue1)/100;
            }

            console.log('hasil', hasil);
            setResult(hasil);
        }
    }

    const handleInputUnit1=(data)=>{
        unitValue1 = data;
        calculcateUnit(unitValue1, unitValue2, selectUnit1, selectUnit2);
    }

    const handleInputUnit2=(data)=>{
        unitValue2 = data;
    }

    const onChangeSelect1 = (data) =>{
        selectUnit1 = subUnit.find(item=> (item.id===Number(data)))
        calculcateUnit(unitValue1, unitValue2, selectUnit1, selectUnit2);
    }

    const onChangeSelect2 = (data) =>{
        selectUnit2 = subUnit.find(item=> (item.id===Number(data)))
        calculcateUnit(unitValue1, unitValue2, selectUnit1, selectUnit2);
    }
  return (
    <div>
        <div className="container" style={{width: 500, marginInline: 'auto', ...styles}}>
            <label for="unit-convertion">Unit Convertion</label>
            <br/>
            <select id="test">
                {
                    unitList.map(item =>(<option value={item.id}>{item.name}</option>))
                }
            </select>
            <div> 
                <select id="unit1" onChange={(e)=> onChangeSelect1(e.target.value)}>
                    {
                        subUnit.filter(obj => obj.unitId===1).map(item =>(<option value={item.id}>{item.name}</option>))
                    }
                </select>
                <input type="text" onKeyUp={(e)=>handleInputUnit1(e.target.value)}/>
                =
                <select id="unit2" onChange={(e)=> onChangeSelect2(e.target.value)}>
                    {
                        subUnit.filter(obj => obj.unitId===1).map(item =>(<option value={item.id}>{item.name}</option>))
                    }
                </select>
                <input type="text"  onKeyUp={(e)=>handleInputUnit2(e.target.value)} value={result}/>
            </div>
        </div>
    </div>
  );
}

export default Index;
