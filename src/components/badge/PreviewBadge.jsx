  import React from 'react';
  import { Card, CardBody } from '@nextui-org/react';
  import { Badge, Avatar } from '@nextui-org/react';

  const PreviewBadge = ({ props, options}) => {
    // Avatar 데이터를 배열로 정의
    const avatars = [
      "https://i.pravatar.cc/300?u=a042581f4e29026709d",
      "https://i.pravatar.cc/150?u=a042f81f4e29026024d",
      "https://i.pravatar.cc/150?u=a04258a2462d826712d",
      "https://i.pravatar.cc/300?u=a042581f4e290267072",
    ];

    const SelectedIcon = options.content.find((item) => item.label === props.content)?.icon;

    return (
      <Card className="flex-1">
        <CardBody>
          <h2 className="mb-6 text-2xl font-bold">Preview</h2>
          <div className="flex h-full items-center justify-center">
            <div className="flex gap-3 items-center">
              {avatars.map((src, index) => (
                <Badge
                  key={index}
                  color={props.color}
                  size={props.size}
                  variant={props.variant}
                  placement={props.placement}
                  content={props.content === 'default' ? '5' : SelectedIcon && <SelectedIcon/>}
                >
                  <Avatar size="lg" radius="md" src={src} />
                </Badge>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    );
  };

  export default PreviewBadge;
