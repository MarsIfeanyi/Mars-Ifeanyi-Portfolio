import React from "react";

type IconComponent = React.ComponentType<{ className?: string }>;

type Props = {
  name: string;
  icon: IconComponent;
};

const SkillCard = ({ icon: Icon, name }: Props) => {
  return (
    <div className="group relative bg-white dark:bg-gray-900 dark:border-white  shadow-md rounded-xl p-4 flex flex-col items-center gap-3 cursor-pointer hover:scale-105 transition-all duration-300">
      <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-200 dark:bg-white/5 dark:border-white/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
        <Icon className="w-7 h-7" />
      </div>
      <span className="text-sm font-medium text-foreground">{name}</span>
    </div>
  );
};

export default SkillCard;
