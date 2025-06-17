
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
}

const presetColors = [
  '#3b82f6', '#ef4444', '#10b981', '#f59e0b',
  '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16',
  '#f97316', '#6366f1', '#14b8a6', '#f43f5e'
];

export const ColorPicker = ({ label, value, onChange }: ColorPickerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-2">
      <Label className="text-foreground">{label}</Label>
      <div className="relative">
        <Button
          variant="outline"
          className="w-full justify-start"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div 
            className="w-4 h-4 rounded mr-2 border" 
            style={{ backgroundColor: value }}
          />
          {value}
        </Button>
        
        {isOpen && (
          <div className="absolute top-full left-0 z-10 mt-1 p-3 bg-background border rounded-md shadow-lg">
            <div className="grid grid-cols-4 gap-2 mb-3">
              {presetColors.map((color) => (
                <button
                  key={color}
                  className="w-8 h-8 rounded border-2 hover:border-foreground transition-colors"
                  style={{ backgroundColor: color }}
                  onClick={() => {
                    onChange(color);
                    setIsOpen(false);
                  }}
                />
              ))}
            </div>
            <input
              type="color"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="w-full h-8 rounded border"
            />
          </div>
        )}
      </div>
    </div>
  );
};
