import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import { Copy, Check } from 'lucide-react';

const GeneratedCode = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="mt-6">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-lg font-medium">Generated Code</h3>
        <Button isIconOnly variant="light" size="sm" onPress={onCopy}>
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </Button>
      </div>
      <code
        className="block overflow-x-auto rounded bg-gray-100 p-4 text-sm"
        style={{
          whiteSpace: 'pre', // 줄바꿈 유지
          wordBreak: 'break-word', // 단어가 너무 길면 줄바꿈
        }}
      >
        {textToCopy}
      </code>
    </div>
  );
};

export default GeneratedCode;
