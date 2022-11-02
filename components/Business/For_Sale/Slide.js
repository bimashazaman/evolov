import { useState } from "react";
import { RangeSlider, Row, Col, InputGroup, InputNumber } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const Price = () => {
  const [value, setValue] = useState([0, 100000]);
  return (
    <>
      <Row>
        <Col xs={24} sm={24} lg={24} md={10}>
          <RangeSlider
            progress
            style={{ marginTop: 16, marginBottom: 16 }}
            value={value}
            onChange={setValue}
            min={0}
            max={100000}
            step={1000}
            renderMark={(mark) => {
              if (mark === 0) {
                return "$0";
              }
              if (mark === 100000) {
                return "$100,000";
              }
              return null;
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <InputGroup>
            <InputNumber
              min={0}
              max={100000}
              value={value[0]}
              onChange={(value) => {
                setValue([value, value[1]]);
              }}
            />

            <InputGroup.Addon>to</InputGroup.Addon>
            <InputNumber
              min={0}
              max={100000}
              value={value[1]}
              onChange={(value) => {
                setValue([value[0], value]);
              }}
            />
          </InputGroup>
        </Col>
      </Row>
    </>
  );
};

export const Year = () => {
  const [value, setValue] = useState([2010, 2021]);
  return (
    <>
      <Row>
        <Col xs={24} sm={24} lg={24} md={10}>
          <RangeSlider
            progress
            style={{ marginTop: 16, marginBottom: 16 }}
            value={value}
            onChange={setValue}
            min={2010}
            max={2021}
            step={1}
            renderMark={(mark) => {
              if (mark === 2010) {
                return "2010";
              }
              if (mark === 2021) {
                return "2021";
              }
              return null;
            }}

          />
        </Col>
      </Row>
      <Row>
        <Col>
          <InputGroup>
            <InputNumber
              min={2010}
              max={2021}
              value={value[0]}
              onChange={(value) => {
                setValue([value, value[1]]);
              }}
              
            />
            <InputGroup.Addon>to</InputGroup.Addon>
            <InputNumber
              min={2010}
              max={2021}
              value={value[1]}
              onChange={(value) => {
                setValue([value[0], value]);
              }}
              
            />
          </InputGroup>
        </Col>
      </Row>
    </>
  );
};

export const Acceleration = () => {
  const [value, setValue] = useState([0, 100]);
  return (
    <>
      <Row>
        <Col xs={24} sm={24} lg={24} md={10}>
          <RangeSlider
            progress
            style={{ marginTop: 16, marginBottom: 16 }}
            value={value}
            onChange={setValue}
            min={0}
            max={100}
            step={1}
            renderMark={(mark) => {
              if (mark === 0) {
                return "0";
              }
              if (mark === 100) {
                return "100";
              }
              return null;
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
            
          <InputGroup>
            <InputNumber
              min={0}
              max={100}
              value={value[0]}
              onChange={(value) => {
                setValue([value, value[1]]);
              }}
            />
            <InputGroup.Addon>to</InputGroup.Addon>
            <InputNumber

              min={0}
              max={100}
              value={value[1]}
              onChange={(value) => {
                setValue([value[0], value]);
              }}
            />
          </InputGroup>
        </Col>
      </Row>
    </>
  );
};

export const Mileage = () => {
  const [value, setValue] = useState([0, 100000]);
  return (
    <>
      <Row>
        <Col xs={24} sm={24} lg={24} md={10}>
          <RangeSlider
            progress
            style={{ marginTop: 16, marginBottom: 16 }}
            value={value}
            onChange={setValue}
            min={0}
            max={100000}
            step={1000}
            renderMark={(mark) => {
              if (mark === 0) {
                return "0";
              }
              if (mark === 100000) {
                return "100,000";
              }
              return null;
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <InputGroup>
            <InputNumber
              min={0}
              max={100000}
              value={value[0]}
              onChange={(value) => {
                setValue([value, value[1]]);
              }}
            />
            <InputGroup.Addon>to</InputGroup.Addon>
            <InputNumber

              min={0}
              max={100000}
              value={value[1]}
              onChange={(value) => {
                setValue([value[0], value]);
              }}
            />
          </InputGroup>
        </Col>
      </Row>
    </>
  );
};



export default Price;
