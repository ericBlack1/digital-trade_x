import React from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const SectionHeader = ({ title }) => (
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
    <Link href="#" className="flex items-center text-blue-600 font-medium">
      See All
      <ChevronRight className="w-5 h-5 ml-1" />
    </Link>
  </div>
);
