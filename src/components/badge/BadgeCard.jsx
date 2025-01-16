import React from 'react';
import { Badge, Avatar } from '@nextui-org/react';
import Preview from '@/components/Preview';

const BadgeCard = ({ props, options }) => {
  // Avatar 데이터를 배열로 정의
  const avatars = [
    'https://avatars.githubusercontent.com/u/45845547?v=4',
    'https://avatars.githubusercontent.com/u/146312456?v=4',
    'https://avatars.githubusercontent.com/u/83891638?v=4',
    'https://avatars.githubusercontent.com/u/152269806?v=4',
  ];

  const SelectedIcon = options.content.find(
    (item) => item.label === props.content
  )?.icon;

  return (
    <Preview title="Preview">
      <div className="flex h-full items-center justify-center">
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
  );
};

export default BadgeCard;
