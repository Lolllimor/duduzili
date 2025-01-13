import { useSearchParams } from "next/navigation";

function useUrlParams<T = string>(search?: string) {
  const searchParams = useSearchParams();
  let query;
  if (search) query = searchParams.get(search) as T;

  function pushParam(param: { key: string; value: string | number }) {
    const params = new URLSearchParams(searchParams.toString());
    param.value = String(param.value);
    params.set(param.key, param.value);
    window.history.replaceState(null, "", `?${params.toString()}`);
  }
  return { query, pushParam };
}

export default useUrlParams;
