import { Input } from "@nextui-org/react";
import { SearchIcon } from "../../componentes/crud/SearchIcon";

export function Buscador({search,setSearch}){
    return(
        <Input
          value={search}
          onChange={(e)=>{setSearch(e.target.value)}}
          type="text"s
          placeholder="Buscador"
          className="max-w-xs"
          startContent={
            <SearchIcon></SearchIcon>
          }
        />
    )

}

