

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
    id: 1,
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

function Index() {
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
                <select id="unit1">
                    {
                        subUnit.filter(obj => obj.unitId===1).map(item =>(<option value={item.id}>{item.name}</option>))
                    }
                </select>
                <input type="text" />
                =
                <select id="unit2">
                    {
                        subUnit.filter(obj => obj.unitId===1).map(item =>(<option value={item.id}>{item.name}</option>))
                    }
                </select>
                <input type="text" />
            </div>
        </div>
    </div>
  );
}

export default Index;
