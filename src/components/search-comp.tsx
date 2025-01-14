'use client';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { debounce } from 'lodash';
import { SearchIcon } from 'lucide-react';
import { Input } from './ui/input';

export const SearchForm = ({
  onSearch,
  placeholder,
  classname,
}: {
  classname?: string;
  placeholder?: string;
  onSearch: any;
}) => {
  const { register } = useForm();

  const handleSearch = useCallback(
    debounce((searchTerm) => {
      onSearch(searchTerm);
    }, 300), // Debounce for 300 milliseconds
    [onSearch]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    handleSearch(searchTerm);
  };

  return (
    <form>
      <div
        className={`h-[44px] border rounded-lg w-[277px] flex items-center pl-4 gap-2 ${classname}`}
      >
        <SearchIcon className="text-[#667085]" />
        <Input
          className="p-0 border-none focus:border-none placeholder:text-[#667085] shadow-none "
          placeholder={placeholder}
          {...register('search', {
            onChange: (e) => handleChange(e),
          })}
        />
      </div>
    </form>
  );
};
