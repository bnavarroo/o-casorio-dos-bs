import { Button } from '@styles/ui/button';
import { IProps } from './types';
import { tableHeader, handleEditGuest } from './helpers';
import * as Styled from './styles';

const TableGuest: React.FC<IProps> = ({ data, totalItems }) => (
  <>
    <Styled.Showing>
      <i>
        Exibindo {data?.length} de {totalItems}
      </i>
    </Styled.Showing>
    <Styled.Table>
      <thead>
        <tr>
          {tableHeader?.map(({ field, description, className }) => (
            <th key={field} className={className}>
              {description}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((guest) => (
          <tr key={guest?.id} className={guest?.confirmed ? 'confirmed' : ''}>
            <td>{guest?.id}</td>
            <td className="text-left">{guest?.name}</td>
            <td className="text-left">{guest?.internalName || '-'}</td>
            <td>{guest?.isChild ? 'Sim' : 'Não'}</td>
            <td>{guest?.confirmed ? 'Sim' : 'Não'}</td>
            <td>{guest?.updatedAt}</td>
            <td>
              <Button
                type="button"
                onClick={handleEditGuest(guest)}
                $type="link"
                $specialFont={false}
              >
                Editar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Styled.Table>
  </>
);

export default TableGuest;
