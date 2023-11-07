import React from 'react'
import "../App.css"
import { Form, Input, Select, Checkbox, Button, Space, Radio, DatePicker } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons"
const RegistrationForm = () => {

    // watching value of participatingAs input box
    const [form] = Form.useForm();
    const participatingAs = Form.useWatch('participatingAs', form);
    //   for form submit
    const onFinish = (values) => {
        console.log(values);
    }
    return (
        <div className='w-full flex justify-center'>
            <Form
                form={form}
                onFinish={onFinish}

                style={{ width: "60%" }}
                className='px-10 py-14 reg-form'
            >
                <Space direction='horizontal'>
                    <Form.Item label="Name" name={"name"}
                        rules={[{ required: true, message: "This field is required" }, { whitespace: true }]}
                        hasFeedback
                    >
                        <Input placeholder='Enter full name' />
                    </Form.Item>
                    <Form.Item label="Gender" name={"gender"}
                        rules={[{ required: true, message: "This field is required" }]}
                        hasFeedback>
                        <Select placeholder="Gender">
                            <Select.Option value="male">male</Select.Option>
                            <Select.Option value="female">female</Select.Option>
                            <Select.Option value="others">others</Select.Option>
                        </Select>
                    </Form.Item>
<Form.Item label="Date of Birth" name={"dob"} rules={[{ required: true, message: "This field is required" }]}
                        hasFeedback>
    <DatePicker placeholder='choose a date'/>
</Form.Item>

                </Space>
                <Space direction='horizontal'>
                    <Form.Item label="Email" name={"email"}
                        rules={[{ required: true, message: "Please enter a valid email" }, { type: "email" }]}
                        hasFeedback>
                        <Input placeholder='Enter email address' />
                    </Form.Item>
                    <Form.Item label="Contact No." name={"contact-number"}
                        rules={[{ required: true, message: "This field is required" }]}
                        hasFeedback>
                        <Input placeholder='contact number' />
                    </Form.Item>

                </Space>
                <Space direction='horizontal'>
                    <Form.Item label="Event" name={"event"}
                        rules={[{ required: true, message: "This field id required" }]}
                        hasFeedback>
                        <Select placeholder="Select event">
                            <Select.Option value="event1">event1</Select.Option>
                            <Select.Option value="event2">event2</Select.Option>
                            <Select.Option value="event3">event3</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Participating as :" name={"participatingAs"} rules={[{ required: true, message: "This field id required" }]}
                        hasFeedback>
                        <Select placeholder="solo/team" initialvalue="solo" >
                            <Select.Option value="solo">solo</Select.Option>
                            <Select.Option value="team">team</Select.Option>

                        </Select>

                    </Form.Item>
                </Space>
                <Form.Item label="College Address" name={"clg-address"}>
                    <Input placeholder='your college address' />
                </Form.Item>

                {
                    participatingAs === "team" ? <Form.List name="teammates">
                        {

                            (fields, { add, remove }) => (
                                <>
                                    {fields.map((field, index) => {
                                        return <Space key={field.key} direction='horizontal'>
                                            <Form.Item

                                                name={[field.name, "full-name"]} label={`teammate-${index + 1}`}
                                                rules={[{ required: true, message: "This field is required" }, { whitespace: true }]}
                                                hasFeedback

                                            >

                                                <Input placeholder='Full name' />
                                            </Form.Item>
                                            <Form.Item name={[field.name, "gender"]}

                                                rules={[{ required: true, message: "Gender required" }]}
                                                hasFeedback>
                                                <Select placeholder="Gender"  >
                                                    {
                                                        ["Male", "Female", "Others"].map((gender) => {
                                                            return <Select.Option value={gender} key={gender} >{gender}</Select.Option>
                                                        })
                                                    }
                                                </Select>
                                            </Form.Item>
                                            <Form.Item

                                                name={[field.name, "contact"]}
                                                rules={[{ required: true, message: "Phone number required" }]}
                                                hasFeedback>
                                                <Input placeholder='contact number' />
                                            </Form.Item>
                                            <MinusCircleOutlined style={{ color: "red", height: 30 }} onClick={() => remove(field.name)} />
                                        </Space>
                                    })}
                                    <Form.Item>
                                        <Button block icon={<PlusOutlined />} onClick={() => add()} >Add teammates</Button>
                                    </Form.Item>
                                </>
                            )
                        }
                    </Form.List> : null
                }

                <Form.Item label="Are you NITAP student ?" name={"isNitapStudent"} rules={[{ required: true, message: "This field is required" }]}
                    hasFeedback>
                    <Radio.Group>
                        <Radio value={true}> yes </Radio>
                        <Radio value={false}> no </Radio>
                    </Radio.Group>
                </Form.Item>

                <Button htmlType='submit'>Register</Button>
            </Form>


        </div>
    )
}

export default RegistrationForm