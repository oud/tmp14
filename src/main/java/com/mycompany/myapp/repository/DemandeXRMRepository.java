package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.DemandeXRM;
import java.util.UUID;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the DemandeXRM entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DemandeXRMRepository extends JpaRepository<DemandeXRM, UUID> {}
