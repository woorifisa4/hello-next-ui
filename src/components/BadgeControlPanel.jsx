import React, { useState } from 'react';
import { Card, CardBody } from '@nextui-org/react';
import { Input, Switch } from '@nextui-org/react';

const BadgeControlPanel = ({ props, onPropChange, options }) => {

  const handleShapeChange = (e) => {
    onPropChange('shape', e.target.checked ? 'circle' : 'rectangle');
  };

  return (
    <Card className="w-full md:w-96">
      <CardBody>
        <h2 className="mb-6 text-2xl font-bold">Controls</h2>
        <div className="flex flex-col gap-4">

          {/* Color */}
          <div className="flex flex-col gap-2">
            <p className="text-default-700 text-sm">Color</p>
            <select
              className="w-full rounded-lg border border-gray-200 p-2"
              value={props.color}
              onChange={(e) => onPropChange('color', e.target.value)}
            >
              {options.color.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          {/* Size */}
          <div className="flex flex-col gap-2">
            <p className="text-default-700 text-sm">Size</p>
            <select
              className="w-full rounded-lg border border-gray-200 p-2"
              value={props.size}
              onChange={(e) => onPropChange('size', e.target.value)}
            >
              {options.size.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          {/* Variant */}
          <div className="flex flex-col gap-2">
            <p className="text-default-700 text-sm">Variant</p>
            <select
              className="w-full rounded-lg border border-gray-200 p-2"
              value={props.variant}
              onChange={(e) => onPropChange('variant', e.target.value)}
            >
              {options.variant.map((variant) => (
                <option key={variant} value={variant}>
                  {variant}
                </option>
              ))}
            </select>
          </div>

          {/* Placement */}
          <div className="flex flex-col gap-2">
            <p className="text-default-700 text-sm">Placement</p>
            <select
              className="w-full rounded-lg border border-gray-200 p-2"
              value={props.placement}
              onChange={(e) => onPropChange('placement', e.target.value)}
            >
              {options.placement.map((placement) => (
                <option key={placement} value={placement}>
                  {placement}
                </option>
              ))}
            </select>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2">
            <p className="text-default-700 text-sm">Content</p>
            <select
              className="w-full rounded-lg border border-gray-200 p-2"
              value={props.content}
              onChange={(e) => onPropChange('content', e.target.value)}
            >
              {options.content.map((content) => (
                <option key={content.label} value={content.label}>
                  {content.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};


export default BadgeControlPanel;