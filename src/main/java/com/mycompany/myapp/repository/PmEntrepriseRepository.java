package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.PmEntreprise;
import java.util.UUID;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the PmEntreprise entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PmEntrepriseRepository extends JpaRepository<PmEntreprise, UUID> {}
