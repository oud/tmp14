package com.mycompany.myapp.domain;

import static org.assertj.core.api.Assertions.assertThat;

public class TelephoneAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertTelephoneAllPropertiesEquals(Telephone expected, Telephone actual) {
        assertTelephoneAutoGeneratedPropertiesEquals(expected, actual);
        assertTelephoneAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertTelephoneAllUpdatablePropertiesEquals(Telephone expected, Telephone actual) {
        assertTelephoneUpdatableFieldsEquals(expected, actual);
        assertTelephoneUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertTelephoneAutoGeneratedPropertiesEquals(Telephone expected, Telephone actual) {
        assertThat(actual)
            .as("Verify Telephone auto generated properties")
            .satisfies(a -> assertThat(a.getId()).as("check id").isEqualTo(expected.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertTelephoneUpdatableFieldsEquals(Telephone expected, Telephone actual) {
        assertThat(actual)
            .as("Verify Telephone relevant properties")
            .satisfies(a -> assertThat(a.getCodePaysISO()).as("check codePaysISO").isEqualTo(expected.getCodePaysISO()))
            .satisfies(a -> assertThat(a.getCodeTypeTelephone()).as("check codeTypeTelephone").isEqualTo(expected.getCodeTypeTelephone()))
            .satisfies(a ->
                assertThat(a.getDateDerniereModification())
                    .as("check dateDerniereModification")
                    .isEqualTo(expected.getDateDerniereModification())
            )
            .satisfies(a -> assertThat(a.getCodeIndicatifPays()).as("check codeIndicatifPays").isEqualTo(expected.getCodeIndicatifPays()))
            .satisfies(a -> assertThat(a.getNumeroTelephone()).as("check numeroTelephone").isEqualTo(expected.getNumeroTelephone()))
            .satisfies(a -> assertThat(a.getCodeStatut()).as("check codeStatut").isEqualTo(expected.getCodeStatut()))
            .satisfies(a -> assertThat(a.getDateStatut()).as("check dateStatut").isEqualTo(expected.getDateStatut()))
            .satisfies(a -> assertThat(a.getCodeUsageTelephone()).as("check codeUsageTelephone").isEqualTo(expected.getCodeUsageTelephone())
            );
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertTelephoneUpdatableRelationshipsEquals(Telephone expected, Telephone actual) {
        assertThat(actual)
            .as("Verify Telephone relationships")
            .satisfies(a -> assertThat(a.getPmEntreprise()).as("check pmEntreprise").isEqualTo(expected.getPmEntreprise()))
            .satisfies(a -> assertThat(a.getPmEtablissement()).as("check pmEtablissement").isEqualTo(expected.getPmEtablissement()));
    }
}
