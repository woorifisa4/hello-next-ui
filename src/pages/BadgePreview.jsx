import useBadgeProps from '@/utils/useBadgeProps';
import { Badge, Avatar } from '@nextui-org/react';
import Preview from '@/components/Preview';
import ControlPanel from '@/components/ControlPanel';
import SelectControl from '@/components/SelectControl';

const BadgePreview = () => {
  const { props, handlePropChange } = useBadgeProps();

  const NotificationIcon = ({ size, height, width, ...props }) => {
    return (
      <svg
        fill="none"
        height={size || height || 24}
        viewBox="0 0 24 24"
        width={size || width || 24}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          clipRule="evenodd"
          d="M18.707 8.796c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.537 4.537 0 01-2.9 1.413c-1.571.134-3.143.247-4.736.247-1.595 0-3.166-.068-4.737-.247a4.532 4.532 0 01-2.9-1.413 3.616 3.616 0 01-.864-2.378c0-.875.178-1.682.73-2.31.754-.854 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2h.09c2.08 0 4.204.987 5.466 2.625.82 1.054 1.195 2.108 1.195 3.745v.426zM9.074 20.061c0-.504.462-.734.89-.833.5-.106 3.545-.106 4.045 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.635 3.635 0 01-1.713.731 3.795 3.795 0 01-1.008 0 3.618 3.618 0 01-1.714-.732c-.39-.269-.67-.694-.695-1.173z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    );
  };

  const CheckIcon = ({ size, height, width, ...props }) => {
    return (
      <svg
        fill="none"
        height={size || height || 18}
        viewBox="0 0 24 24"
        width={size || width || 18}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
      </svg>
    );
  };

  const options = {
    color: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
    content: [
      { label: 'default' },
      { label: 'Notification', icon: NotificationIcon },
      { label: 'Check', icon: CheckIcon },
    ],
    size: ['sm', 'md', 'lg'],
    variant: ['solid', 'flat', 'faded', 'shadow'],
    placement: ['top-right', 'bottom-right', 'top-left', 'bottom-left'],
  };

  const avatars = [
    'https://i.pravatar.cc/300?u=a042581f4e29026709d',
    'https://i.pravatar.cc/150?u=a042f81f4e29026024d',
    'https://i.pravatar.cc/150?u=a04258a2462d826712d',
    'https://i.pravatar.cc/300?u=a042581f4e290267072',
  ];

  const SelectedIcon = options.content.find(
    (item) => item.label === props.content
  )?.icon;

  const generatedCode = `import { Badge, Avatar } from '@nextui-org/react';

const NotificationIcon = () => (
  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path
      clipRule="evenodd"
      d="M18.707 8.796c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.537 4.537 0 01-2.9 1.413c-1.571.134-3.143.247-4.736.247-1.595 0-3.166-.068-4.737-.247a4.532 4.532 0 01-2.9-1.413 3.616 3.616 0 01-.864-2.378c0-.875.178-1.682.73-2.31.754-.854 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2h.09c2.08 0 4.204.987 5.466 2.625.82 1.054 1.195 2.108 1.195 3.745v.426zM9.074 20.061c0-.504.462-.734.89-.833.5-.106 3.545-.106 4.045 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.635 3.635 0 01-1.713.731 3.795 3.795 0 01-1.008 0 3.618 3.618 0 01-1.714-.732c-.39-.269-.67-.694-.695-1.173z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

const BadgeExample = () => (
  <div className="flex items-center gap-3">
    {[${avatars.map((src) => `'${src}'`).join(', ')}].map((src, index) => (
      <Badge
        key={index}
        color="${props.color}"
        size="${props.size}"
        variant="${props.variant}"
        placement="${props.placement}"
        content={
          "${props.content}" === 'default'
            ? '5'
            : ${props.content} === 'Notification'
            ? <NotificationIcon />
            : <CheckIcon />
        }
      >
        <Avatar size="lg" radius="md" src={src} />
      </Badge>
    ))}
  </div>
);`;

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 p-8 md:flex-row">
      <Preview title="Preview">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-3">
            {avatars.map((src, index) => (
              <Badge
                key={index}
                color={props.color}
                size={props.size}
                variant={props.variant}
                placement={props.placement}
                content={
                  props.content === 'default'
                    ? '5'
                    : SelectedIcon && <SelectedIcon />
                }
              >
                <Avatar size="lg" radius="md" src={src} />
              </Badge>
            ))}
          </div>
        </div>
      </Preview>
      <ControlPanel name="Badge Control" generatedCode={generatedCode}>
        <div className="flex flex-col gap-4">
          <SelectControl
            label="Color"
            tooltip="Choose the badge color"
            options={options.color.map((color) => ({
              key: color,
              label: color,
            }))}
            selectedKey={props.color}
            onChange={(value) => handlePropChange('color', value)}
          />
          <SelectControl
            label="Size"
            tooltip="Choose the badge size"
            options={options.size.map((size) => ({ key: size, label: size }))}
            selectedKey={props.size}
            onChange={(value) => handlePropChange('size', value)}
          />
          <SelectControl
            label="Variant"
            tooltip="Choose the badge variant"
            options={options.variant.map((variant) => ({
              key: variant,
              label: variant,
            }))}
            selectedKey={props.variant}
            onChange={(value) => handlePropChange('variant', value)}
          />
          <SelectControl
            label="Placement"
            tooltip="Choose the badge placement"
            options={options.placement.map((placement) => ({
              key: placement,
              label: placement,
            }))}
            selectedKey={props.placement}
            onChange={(value) => handlePropChange('placement', value)}
          />
          <SelectControl
            label="Content"
            tooltip="Choose the badge content"
            options={options.content.map((content) => ({
              key: content.label,
              label: content.label,
            }))}
            selectedKey={props.content}
            onChange={(value) => handlePropChange('content', value)}
          />
        </div>
      </ControlPanel>
    </div>
  );
};

export default BadgePreview;
