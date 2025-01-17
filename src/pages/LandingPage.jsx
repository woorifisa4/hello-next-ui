import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Slider,
  Input,
} from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [buttonSize, setButtonSize] = useState(50);
  const [buttonColor, setButtonColor] = useState(180);
  const [cardSpacing, setCardSpacing] = useState(12);
  const navigate = useNavigate();
  const pages = ['/pagination', '/badge', '/spinner', '/select'];

  const handleRandomNavigate = () => {
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    navigate(randomPage);
  };

  const handleButtonSizeInput = (value) => {
    const num = parseInt(value);
    if (!isNaN(num) && num >= 0 && num <= 100) {
      setButtonSize(num);
    }
  };

  const handleCardSpacingInput = (value) => {
    const num = parseInt(value);
    if (!isNaN(num) && num >= 0 && num <= 24) {
      setCardSpacing(num);
    }
  };

  const handleButtonColorInput = (value) => {
    const num = parseInt(value);
    if (!isNaN(num) && num >= 0 && num <= 360) {
      setButtonColor(num);
    }
  };

  const buttonHue = `hsl(${buttonColor}, 70%, 50%)`;

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <h1 className="mb-6 text-6xl font-bold text-gray-900">
            Next UI 실습하기
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            NextUI 컴포넌트의 속성값을 실시간으로 조정하면서 실습해보세요. 아래
            슬라이더를 조절하여 UI 요소들의 변화를 직접 체험해보세요.
          </p>

          <div className="mb-8">
            <Button
              onPress={handleRandomNavigate}
              className="mt-4 font-semibold transition-all"
              style={{
                backgroundColor: buttonHue,
                padding: `${buttonSize * 0.1}rem`,
              }}
            >
              실습 시작하기
              <ArrowRight className="h-5 w-5" />
            </Button>
            <p className="mb-2 mt-12 text-sm text-gray-600">버튼 크기 조절</p>
            <div className="flex items-center justify-center gap-4">
              <Slider
                size="sm"
                step={1}
                maxValue={100}
                minValue={0}
                value={buttonSize}
                onChange={setButtonSize}
                className="max-w-md"
              />
              <Input
                type="number"
                value={buttonSize}
                onChange={(e) => handleButtonSizeInput(e.target.value)}
                min={0}
                max={100}
                className="w-24"
                size="sm"
              />
            </div>
            <div className="mt-12 text-center">
              <p className="mb-2 text-sm text-gray-600">버튼 색상 조절</p>
              <div className="flex items-center justify-center gap-4">
                <Slider
                  size="sm"
                  step={1}
                  maxValue={360}
                  minValue={0}
                  value={buttonColor}
                  onChange={setButtonColor}
                  className="max-w-md"
                />
                <Input
                  type="number"
                  value={buttonColor}
                  onChange={(e) => handleButtonColorInput(e.target.value)}
                  min={0}
                  max={360}
                  className="w-24"
                  size="sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <p className="mb-2 text-center text-sm text-gray-600">
              카드 간격 조절
            </p>
            <div className="flex items-center justify-center gap-4">
              <Slider
                size="sm"
                step={1}
                maxValue={24}
                minValue={0}
                value={cardSpacing}
                onChange={setCardSpacing}
                className="max-w-md"
              />
              <Input
                type="number"
                value={cardSpacing}
                onChange={(e) => handleCardSpacingInput(e.target.value)}
                min={0}
                max={24}
                className="w-24"
                size="sm"
              />
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: `${cardSpacing * 0.25}rem` }}
          >
            {[
              {
                title: '상태 관리 실습',
                description:
                  'React의 useState와 같은 Hook들을 활용하여 실시간으로 UI를 제어하는 방법을 배웁니다.',
              },
              {
                title: 'UI 디자인 실습',
                description:
                  '컴포넌트의 크기, 색상, 간격 등 다양한 속성을 조절하며 디자인 감각을 향상시킵니다.',
              },
              {
                title: 'NextUI 활용',
                description:
                  'NextUI의 다양한 컴포넌트들을 실제로 다루어보며 라이브러리 활용 능력을 키웁니다.',
              },
            ].map((feature, index) => (
              <Card key={index} className="shadow-sm">
                <CardHeader className="flex-col items-center px-4 pb-0 pt-4">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </CardHeader>
                <CardBody className="text-center">
                  <p className="text-gray-600">{feature.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
