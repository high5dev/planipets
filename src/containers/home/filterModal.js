import React, { useState } from 'react'
import { Modal, Button, Input } from 'antd';
import { Select } from 'antd';
import { Link, withRouter } from 'react-router-dom'

const { Option } = Select;
function FilterModal({ isModalVisible,
    handleOk,
    handleCancel,
    history,
    filter }) {

    const [Search, setSearch] = useState({
        type: '', animal: '',villa:''
    })
    return (
        <Modal className="filterModal" footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} closable={false}>
            <div className="innerModalDiv">
                <div className="modalHeading">
                    <h2>
                        Trouvez le toilletteur qui prendra soin de
                        votre fidèle compagnon
                    </h2>
                </div>
                <div className="filterInput" onClick={() => console.log(filter)}>
                    <Select
                        className="select"
                        name="Professional"
                        defaultValue="Professional"

                    >
                        {filter.types &&
                            filter.types.map((types, index) => (
                                <Option key={index} value={types.id}>
                                    {types.name}
                                </Option>
                            ))}
                    </Select>

                    <Select className="select" defaultValue="Animal" style={{ width: 120, display:'none' }}
                        onChange={(e) => setSearch({
                            ...Search,
                            animal: filter.animals.find(el => el.id === e).name
                        })}
                    >
                        {
                            filter.animals &&
                            filter.animals.map((animal, index) => <Option key={index} value={animal.id}>{animal.name}</Option>)
                        }
                    </Select>

                    <Input
                        suffixIcon={null}
                        className="select ant-select"
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        placeholder="ville"
                        onChange={(e) => setSearch({
                            ...Search,
                            villa: e.target.value
                        })}
                    />


                    {/* <Select
                        suffixIcon={null}
                        className="select"
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        defaultValue="ville"
                        onChange={(e) => setSearch({
                            ...Search,
                            type: filter.types.find(el => el.id === e).name
                        })}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        {
                            filter.types &&
                            filter.types.map((type, index) => <Option key={index} value={type.id}>{type.name}</Option>)
                        }
                    </Select> */}

                    {/* <Select
                        suffixIcon={null}
                        className="select"
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        defaultValue="ville"
                        onChange={(e) => setSearch({
                            ...Search,
                            type: filter.types.find(el => el.id === e).name
                        })}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        filterSort={(optionA, optionB) =>
                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                        }
                    >
                        {filter.types &&
                            filter.types.map((type, index) => (
                                <Option key={index} value={type.id}>
                                    {type.name}
                                </Option>
                            ))}
                    </Select> */}
                    {/* <button className='tr'>Trouver votre toiletteur</button> */}
                    {/* <Link to="/vet-listings"> */}
                    <button className="modalButton" onClick={() => history.push(Search.type || Search.animal ? `/vet-listings?animal=${Search.animal}&type=${Search.type}` : `/vet-listings`)}>
                        Trouver votre toiletteur
                    </button>
                    {/* </Link> */}
                </div>
            </div>
        </Modal>
    )
}

export default withRouter(FilterModal)
