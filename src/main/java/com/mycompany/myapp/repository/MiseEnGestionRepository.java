package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.MiseEnGestion;
import java.util.UUID;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the MiseEnGestion entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MiseEnGestionRepository extends JpaRepository<MiseEnGestion, UUID> {}
