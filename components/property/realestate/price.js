import { useState } from "react";
import { RangeSlider, Row, Col, InputGroup, InputNumber } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const Price = ({ setPriceValue }) => {
  const [value, setValue] = useState([0, 1000000]);

  return (
    <>
      <Row>
        <Col xs={24} sm={24} lg={24} md={10}>
          <RangeSlider
            progress
            style={{ marginTop: 16, marginBottom: 16 }}
            value={value}
            onChange={(value) => {
              setValue(value);
              setPriceValue(value)
            }}
            min={0}
            max={1000000}
            step={1000}
            renderMark={(mark) => {
              return mark;
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <InputGroup>
            <InputNumber
              min={0}
              max={10000000}
              name="min_price"
              value={value[0]}
              onChange={(nextValue) => {
                const [start, end] = value;

                if (nextValue > end) {
                  return;
                }
                setValue([nextValue, end]);

                console.log(nextValue);
              }}
            />
            <InputGroup.Addon>to</InputGroup.Addon>
            <InputNumber
              min={0}
              max={10000000}
              name="max_price"
              value={value[1]}
              onChange={(nextValue) => {
                const [start, end] = value;

                if (start > nextValue) {
                  return;
                }
                setValue([start, nextValue]);
              }}
            />
          </InputGroup>
        </Col>
      </Row>
    </>
  );
};

export default Price;
