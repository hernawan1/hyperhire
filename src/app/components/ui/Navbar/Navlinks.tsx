'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import s from './Navbar.module.css';
import Image from 'next/image';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../Select"

import { Button } from '../Button/button-login';

interface NavlinksProps {
  user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
  return (
    <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
      <div  className="flex items-center space-x-8">
      <Link href="/" className={s.logo} aria-label="Logo">
          {/* <Logo /> */}
          <Image src="/logo.png" alt="Icon" width={100} height={100} />
        </Link>
      </div>
      <div className="flex items-center flex-4">
        <nav className="ml-6 space-x-2 lg:block items-center">
          <Link href="/account" className={s.link}>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="채용" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">채용</SelectItem>
                <SelectItem value="dark">해외 개발자 원격 채용</SelectItem>
                <SelectItem value="system">외국인 원격 채용 (비개발 직군)</SelectItem>
              </SelectContent>
            </Select>
          </Link>
          <Link href="/account" className={s.link}>
              해외 개발자 활용 서비스
          </Link>
        </nav>
      </div>
      <div className="flex justify-end space-x-8">
        <Link href="/signin" className={s.link}>
          <Button className='bg-white text-[#4A77FF] font-medium'>문의하기</Button>
        </Link>
      </div>
    </div>
  );
}
