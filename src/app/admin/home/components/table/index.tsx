import { IProps } from './types';
import { tableHeader } from './helpers';
import * as Styled from './styles';

const TableGuest: React.FC<IProps> = ({
  data,
  totalItems,
  totalConfirmed,
  totalChild,
}) => (
  <>
    <Styled.Showing>
      <Styled.ShowingLeftData>
        <span>
          <b>Confirmados</b>: {totalConfirmed}
        </span>
        <span>
          <b>Crianças</b>: {totalChild}
        </span>
      </Styled.ShowingLeftData>
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
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
          </tr>
        ))}
      </tbody>
    </Styled.Table>
  </>
);

export default TableGuest;
